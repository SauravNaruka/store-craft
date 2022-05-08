import cn from 'classnames'
import {CarouselSliderButton, PropType} from './CarouselSliderButton'
import commonStyles from '@styles/common.module.css'
import styles from '@styles/Carousel.module.css'

export function CarouselDotSliderButton({
  isActive,
  slideIndex,
  className: customClassName,
  ...restProps
}: PropType) {
  return (
    <CarouselSliderButton
      isActive={isActive}
      slideIndex={slideIndex}
      className={cn('inline-block relative', {
        [styles.carouselDot]: true,
        [styles.activeDot]: isActive,
        ...(customClassName ? {[customClassName]: true} : {}),
      })}
      {...restProps}
    >
      <span className={commonStyles.srOnly}>View slide {slideIndex + 1}</span>
    </CarouselSliderButton>
  )
}
