import * as React from 'react'
import Styles from '@styles/HStack.module.scss'

type PropType = {
  className?: string
  children?: React.ReactNode
}

export function HStack({className = Styles.hstack, children}: PropType) {
  return <div className={className}>{children}</div>
}
