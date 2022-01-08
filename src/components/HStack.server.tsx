import * as React from 'react'
import hstackStyles from '@styles/HStack.module.scss'

type PropType = {
  className?: string
  children?: React.ReactNode
}

export function HStack({className, children}: PropType) {
  return (
    <div
      className={`${hstackStyles.hstack} ${className ? className : ''}`}
      role="list"
    >
      {children}
    </div>
  )
}
