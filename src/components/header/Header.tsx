import * as React from 'react'
import commonStyles from '@styles/common.module.css'
import headerStyles from '@styles/header.module.css'

type PropType = {
  children: React.ReactNode
  props?: {[key: string]: unknown}
}

const defaultClasses = `${headerStyles.mobileHeader} ${commonStyles.backgroundGlassmorphic}`

export function Header({children, ...props}: PropType) {
  return (
    <header className={defaultClasses} {...props}>
      <nav className={headerStyles.headerActions}>{children}</nav>
    </header>
  )
}

export default Header
