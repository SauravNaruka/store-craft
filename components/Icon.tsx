import * as React from 'react'
import iconStyles from 'styles/icon.module.scss'

type PropType = {
  width?: number
  height?: number
  children: React.ReactNode
}

export function Icon({width = 24, height = 28, children}: PropType) {
  return (
    <svg
      className={iconStyles.icon}
      aria-hidden="true"
      focusable="false"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      {children}
    </svg>
  )
}
