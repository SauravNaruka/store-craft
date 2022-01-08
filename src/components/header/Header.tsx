import * as React from 'react'
import commonStyles from '@styles/common.module.scss'
import headerStyles from '@styles/header.module.scss'

type PropType = {
  children: React.ReactNode
  props?: {[key: string]: unknown}
}

const defaultClasses = `${headerStyles.mobileHeader} ${commonStyles.backgroundGlassmorphic}`

export function Header({children, ...props}: PropType) {
  return (
    <header className={defaultClasses} {...props}>
      <nav>{children}</nav>
    </header>
  )
}

export default Header
