import * as React from 'react'
import cn from 'classnames'
import {useKeenSlider} from 'keen-slider/react'
import {CarouselSliderWrapper} from './CarouselSliderWrapper'
import {CarouselImageSliderButton} from './CarouselImageSliderButton'
import {CarouselDotSliderButton} from './CarouselDotSliderButton'
import {If} from '@components/util/If'
import {useInterval} from '@hooks/useInterval'
import {
  CAROUSEL_ACCESSIBILITY_MESSAGE_NAVIGATION,
  CAROUSEL_ACCESSIBILITY_MESSAGE_AUTOPLAY,
} from '@constants/carousel.constants'
import 'keen-slider/keen-slider.min.css'
import styles from '@styles/Carousel.module.css'
import {AspectRatio} from '@LocalTypes/interfaces'

export enum CarouselSliderType {
  DOT = 'DOT',
  IMAGE = 'IMAGE',
  RESPONSIVE = 'RESPONSIVE',
  NONE = 'NONE',
}

export enum CarouselAspectRatio {
  VIDEO = 'aspect-video',
  IMAGE = 'aspect-[4/3]',
}

export type PropType = {
  id: string
  ariaLabel: string
  autoplay?: boolean
  autoPlayDelay?: number
  sliderType?: CarouselSliderType
  className?: string
  aspectRatio?: CarouselAspectRatio
  children: React.ReactNode | React.ReactNode[]
}

export function Carousel({
  id,
  ariaLabel,
  autoplay = true,
  autoPlayDelay = 6000,
  sliderType = CarouselSliderType.DOT,
  className,
  aspectRatio = CarouselAspectRatio.VIDEO,
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
    autoplay && React.Children.count(children) > 1 ? autoPlayDelay : null,
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

  const totalImages = React.Children.count(children)
  return (
    <section
      ref={sliderContainerRef}
      className={`relative select-none w-full h-full bg-transparent overflow-hidden ${
        className ?? ''
      }`}
      role="region"
      aria-label={`${ariaLabel}: ${getAccessibilityMessage(
        autoplay,
        autoPlayDelay,
        sliderType != CarouselSliderType.NONE,
      )}`}
    >
      <div
        ref={ref}
        className={cn(
          'keen-slider relative transition-opacity duration-150 w-full opacity-0',
          aspectRatio,
          {
            'opacity-100': isMounted,
          },
        )}
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
      <CarouselSliderWrapper>
        {React.Children.map(children, (slide, index) => {
          return (
            <>
              <If key={index} condition={isImageSliderEnabled(sliderType)}>
                <CarouselImageSliderButton
                  id={id}
                  slideIndex={index}
                  totalSlides={totalImages}
                  isActive={currentSlide === index}
                  className={
                    sliderType === CarouselSliderType.RESPONSIVE
                      ? 'hidden md:inline-block'
                      : ''
                  }
                  onClick={() => {
                    slider.current?.moveToIdx(index)
                    resetInterval()
                  }}
                >
                  {slide}
                </CarouselImageSliderButton>
              </If>
              <If key={index} condition={isDotSliderEnabled(sliderType)}>
                <CarouselDotSliderButton
                  id={id}
                  slideIndex={index}
                  totalSlides={totalImages}
                  isActive={currentSlide === index}
                  className={
                    sliderType === CarouselSliderType.RESPONSIVE
                      ? 'md:hidden'
                      : ''
                  }
                  onClick={() => {
                    slider.current?.moveToIdx(index)
                    resetInterval()
                  }}
                />
              </If>
            </>
          )
        })}
      </CarouselSliderWrapper>
    </section>
  )
}

function getAccessibilityMessage(
  autoPlay: boolean,
  duration: number,
  hasPaginationControl: boolean,
) {
  return `${getAutoPlayMessage(autoPlay, duration)} ${getNavigationMessage(
    hasPaginationControl,
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

function getNavigationMessage(hasPaginationControl: boolean) {
  if (hasPaginationControl) {
    return CAROUSEL_ACCESSIBILITY_MESSAGE_NAVIGATION
  } else {
    return ''
  }
}

function isImageSliderEnabled(sliderType: CarouselSliderType) {
  return (
    sliderType === CarouselSliderType.IMAGE ||
    sliderType === CarouselSliderType.RESPONSIVE
  )
}

function isDotSliderEnabled(sliderType: CarouselSliderType) {
  return (
    sliderType === CarouselSliderType.DOT ||
    sliderType === CarouselSliderType.RESPONSIVE
  )
}

export default Carousel
