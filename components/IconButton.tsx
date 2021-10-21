import * as React from 'react'
import {Icon} from './Icon'
import buttonStyles from 'styles/button.module.scss'

type PropType = {
  name: string
  width?: number
  height?: number
  className?: string
  children: React.ReactNode
}

export function IconButton({
  name,
  className = buttonStyles.iconButton,
  children,
  ...rest
}: PropType) {
  return (
    <button aria-label={name} className={className}>
      <Icon {...rest}>{children}</Icon>
    </button>
  )
}
