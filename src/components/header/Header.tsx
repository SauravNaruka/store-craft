import * as React from 'react'
import styles from '@styles/header.module.scss'

type PropType = {
  children: React.ReactNode
  props?: {[key: string]: unknown}
}
export function Header({children, ...props}: PropType) {
  return (
    <header className={styles.mobileHeader} {...props}>
      <nav>{children}</nav>
    </header>
  )
}

export default Header
