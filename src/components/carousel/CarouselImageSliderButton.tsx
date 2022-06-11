import React from 'react'
import cn from 'classnames'
import {CarouselSliderButton, PropType} from './CarouselSliderButton'
import styles from '@styles/Carousel.module.css'
import {CarouselAspectRatio} from './Carousel'

export function CarouselImageSliderButton({
  isActive,
  children,
  className: customClassName,
  ...restProps
}: PropType) {
  return (
    <CarouselSliderButton
      isActive={isActive}
      className={cn(
        'relative mx-1 my-0 inline-block',
        CarouselAspectRatio.IMAGE,
        styles.sliderImageButton,
        {
          [styles.sliderImageButtonActive]: isActive,
          ...(customClassName ? {[customClassName]: true} : {}),
        },
      )}
      {...restProps}
    >
      {children}
    </CarouselSliderButton>
  )
}
