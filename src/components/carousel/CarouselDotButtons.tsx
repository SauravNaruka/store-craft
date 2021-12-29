import cn from 'classnames'
import styles from '@styles/Carousel.module.css'

type CarouselDotButtons = {
  id: string
  numberOfslides: number
  activeSlideIndex: number
  onClick: (slideIndex: number) => void
}

export function CarouselDotButtons({
  id,
  numberOfslides,
  activeSlideIndex,
  onClick: clickHandler,
}: CarouselDotButtons) {
  return (
    <ul role="tablist" className={styles.dotWrapper}>
      {[...Array(numberOfslides)].map((_, slideIndex) => (
        <li key={slideIndex}>
          <button
            id={`${id}_slide_${slideIndex}`}
            role="tab"
            title={`Slide ${slideIndex + 1}`}
            aria-setsize={numberOfslides}
            aria-posinset={slideIndex + 1}
            aria-current={slideIndex === activeSlideIndex}
            onClick={() => clickHandler(slideIndex)}
          >
            <span
              className={cn({
                [styles.carouselDot]: true,
                [styles.activeDot]: slideIndex === activeSlideIndex,
              })}
            />
            <span className="sr-only">View slide {slideIndex + 1}</span>
          </button>
        </li>
      ))}
    </ul>
  )
}
