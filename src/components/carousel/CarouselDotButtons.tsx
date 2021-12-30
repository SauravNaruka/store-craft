import cn from 'classnames'
import commonStyles from '@styles/common.module.scss'
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
    <div role="tablist" className={styles.dotWrapper}>
      {[...Array(numberOfslides)].map((_, slideIndex) => (
        <button
          key={slideIndex}
          id={`${id}_slide_${slideIndex}`}
          role="tab"
          title={`Slide ${slideIndex + 1}`}
          aria-setsize={numberOfslides}
          aria-posinset={slideIndex + 1}
          aria-current={slideIndex === activeSlideIndex}
          className={cn({
            [styles.carouselDot]: true,
            [styles.activeDot]: slideIndex === activeSlideIndex,
          })}
          onClick={() => clickHandler(slideIndex)}
        >
          <span className={commonStyles.srOnly}>
            View slide {slideIndex + 1}
          </span>
        </button>
      ))}
    </div>
  )
}
