import * as React from 'react'
import iconStyles from '@styles/icon.module.css'

type PropType = {
  href: string
  altText: string
  children: JSX.Element
  className?: string
}

export function IconLink({href, altText, children, className = ''}: PropType) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${iconStyles.iconLink} ${className}`}
    >
      {children}
      <span className="sr-only">{altText}</span>
    </a>
  )
}

export default IconLink
