import * as React from 'react'
import buttonStyles from '@styles/button.module.scss'

type PropType = {
  name: string
  className?: string
  children: React.ReactNode
}

export function IconButton({
  name,
  className = buttonStyles.iconButton,
  children,
}: PropType) {
  return (
    <button aria-label={name} className={className}>
      {children}
    </button>
  )
}

export default IconButton
