import * as React from 'react'
import cn from 'classnames'
import {useKeenSlider} from 'keen-slider/react'
import {useInterval} from '@hooks/useInterval'
import {CarouselDotButtons} from './CarouselDotButtons'
import {
  CAROUSEL_ACCESSIBILITY_MESSAGE_NAVIGATION,
  CAROUSEL_ACCESSIBILITY_MESSAGE_AUTOPLAY,
} from '@constants/carousel.constants'
import 'keen-slider/keen-slider.min.css'
import styles from '@styles/Carousel.module.css'

export type PropType = {
  id: string
  ariaLabel: string
  autoplay?: boolean
  autoPlayDelay?: number
  dotsNavigation?: boolean
  className?: string
  children: React.ReactNode | React.ReactNode[]
}

export function Carousel({
  id,
  ariaLabel,
  autoplay = true,
  autoPlayDelay = 6000,
  dotsNavigation = true,
  className,
  children,
}: PropType): JSX.Element {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [isMounted, setIsMounted] = React.useState(false)
  const sliderContainerRef = React.useRef<HTMLDivElement>(null)
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {perView: 1, spacing: 5},
    created: () => setIsMounted(true),
    slideChanged(s) {
      const slideNumber = s.track.details.rel
      setCurrentSlide(slideNumber)
    },
  })

  const {resetInterval} = useInterval(
    () => {
      slider.current?.next()
    },
    autoplay ? autoPlayDelay : null,
  )

  // Stop the history navigation gesture on touch devices
  React.useEffect(() => {
    const preventNavigation = (event: TouchEvent) => {
      // Center point of the touch area
      const touchXPosition = event.touches[0].pageX
      // Size of the touch area
      const touchXRadius = event.touches[0].radiusX || 0

      // We set a threshold (10px) on both sizes of the screen,
      // if the touch area overlaps with the screen edges
      // it's likely to trigger the navigation. We prevent the
      // touchstart event in that case.
      if (
        touchXPosition - touchXRadius < 10 ||
        touchXPosition + touchXRadius > window.innerWidth - 10
      )
        event.preventDefault()
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const slider = sliderContainerRef.current!

    slider.addEventListener('touchstart', preventNavigation, {passive: true})

    return () => {
      if (slider) {
        slider.removeEventListener('touchstart', preventNavigation)
      }
    }
  }, [])

  return (
    <section
      ref={sliderContainerRef}
      className={`${styles.root} ${className ?? ''}`}
      role="region"
      aria-label={`${ariaLabel}: ${getAccessibilityMessage(
        autoplay,
        autoPlayDelay,
        dotsNavigation,
      )}`}
    >
      <div
        ref={ref}
        className={cn({
          ['keen-slider']: true,
          [styles.slider]: true,
          [styles.showSlider]: isMounted,
        })}
      >
        {React.Children.map(children, (child, index) => {
          // Add the keen-slider__slide className to children
          const isSlideActive = currentSlide === index
          return (
            <span
              key={`${id}_slide_key_${index}`}
              role="tabpanel"
              aria-labelledby={`${id}_slide_${index}`}
              className="keen-slider__slide"
              {...(!isSlideActive ? {'aria-hidden': true, tabIndex: -1} : {})}
            >
              {React.isValidElement(child)
                ? {
                    ...child,
                    props: {
                      ...child.props,
                      ...(!isSlideActive
                        ? {'aria-hidden': true, tabIndex: -1}
                        : {}),
                    },
                  }
                : child}
            </span>
          )
        })}
      </div>
      {dotsNavigation && (
        <CarouselDotButtons
          id={id}
          numberOfslides={React.Children.count(children)}
          activeSlideIndex={currentSlide}
          onClick={index => {
            slider.current?.moveToIdx(index)
            resetInterval()
          }}
        />
      )}
    </section>
  )
}

function getAccessibilityMessage(
  autoPlay: boolean,
  duration: number,
  hasDots: boolean,
) {
  return `${getAutoPlayMessage(autoPlay, duration)} ${getNavigationMessage(
    hasDots,
  )}`
}

function getAutoPlayMessage(autoPlay: boolean, duration: number) {
  if (autoPlay) {
    return `${CAROUSEL_ACCESSIBILITY_MESSAGE_AUTOPLAY} ${
      duration / 1000
    } seconds`
  } else {
    return ''
  }
}

function getNavigationMessage(hasDots: boolean) {
  if (hasDots) {
    return CAROUSEL_ACCESSIBILITY_MESSAGE_NAVIGATION
  } else {
    return ''
  }
}

export default Carousel
