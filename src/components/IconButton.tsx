import * as React from 'react'
import buttonStyles from '@styles/button.module.css'

type ButtonProp = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
type PropType = ButtonProp & {
  name: string
  onClick: () => void
  className?: string
  children: React.ReactNode
}

export function IconButton({
  name,
  onClick,
  className = buttonStyles.iconButton,
  children,
  ...rest
}: PropType) {
  return (
    <button aria-label={name} className={className} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default IconButton
