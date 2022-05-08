import React from 'react'
import cn from 'classnames'
import styles from '@styles/Carousel.module.css'

type PropType = {
  className?: string
  children: React.ReactNode | React.ReactNode[]
}

export function CarouselSliderWrapper({
  className: customClass,
  children,
}: PropType) {
  return (
    <div
      role="tablist"
      className={cn(
        'flex items-center justify-center',
        styles.sliderWrapper,
        customClass ? {[customClass]: !!customClass} : {},
      )}
    >
      {children}
    </div>
  )
}
