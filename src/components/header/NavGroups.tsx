import * as React from 'react'
import cx from 'classnames'
import NavLinks from './NavLinks'
import NavGroupButtons from './NavGroupButtons'
import menuStyles from '@styles/menu.module.css'
import type {NavigationGroup} from '@generated/cms.types'
import {Maybe} from '@LocalTypes/interfaces'

type PropType = {
  navigations: Maybe<NavigationGroup>[]
  id: string
  visible: boolean
}

export function NavGroups({navigations, id, visible}: PropType) {
  const [activeMenuID, setActiveMenuID] = React.useState<string | null>(null)
  return (
    <div
      id={id}
      className={cx({
        'md:hidden': true,
        [menuStyles.mobileMenu]: true,
        [menuStyles.mobileMenuOpen]: visible,
      })}
    >
      <div className={menuStyles.mobileMenuPaneWraper}>
        <NavGroupButtons />
        <NavLinks
          title="Bedroom"
          visible={activeMenuID === 'menu1'}
          onClose={() => setActiveMenuID(null)}
        />
      </div>
    </div>
  )
}

export default NavGroups
