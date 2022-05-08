import React from 'react'

type ButtonProp = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type PropType = ButtonProp & {
  id: string
  slideIndex: number
  isActive: boolean
  totalSlides: number
  onClick: (slideIndex: number) => void
  children?: React.ReactNode | React.ReactNode[]
  className?: string
}

export function CarouselSliderButton({
  id,
  slideIndex,
  isActive,
  totalSlides,
  children,
  ...restProps
}: PropType) {
  return (
    <button
      id={`${id}_slide_${slideIndex}`}
      role="tab"
      title={`Slide ${slideIndex + 1}`}
      aria-setsize={totalSlides}
      aria-posinset={slideIndex + 1}
      aria-current={isActive}
      {...restProps}
    >
      {children}
    </button>
  )
}
