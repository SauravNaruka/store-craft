import * as React from 'react'
import {CarouselSliderType} from './Carousel'
import {
  CAROUSEL_ACCESSIBILITY_MESSAGE_AUTOPLAY,
  CAROUSEL_ACCESSIBILITY_MESSAGE_NAVIGATION,
} from '@constants/carousel.constants'

type PropType = {
  ariaLabel: string
  className?: string
  autoplay: boolean
  autoPlayDelay: number
  sliderType?: CarouselSliderType
  sliderContainerRef: React.LegacyRef<HTMLElement> | undefined
  children: React.ReactNode | React.ReactNode[]
}

export function CarouselWrapper({
  ariaLabel,
  className,
  autoplay,
  autoPlayDelay,
  sliderType,
  sliderContainerRef,
  children,
}: PropType) {
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
      {children}
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

export default CarouselWrapper
