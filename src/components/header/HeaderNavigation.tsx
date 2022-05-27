import * as React from 'react'
import NavigationDrawer from '@components/header/NavigationDrawer'
import MenuIcon from '@components/icons/MenuIcon'
import IconButton from '@components/microUI/IconButton'
import type {Header} from '@generated/cms.types'

type PropType = {
  isVisible: boolean
  isMenuVisible: boolean
  header: Header
  onMenuToggleClick: () => void
}

export function HeaderNavigation({
  isVisible = true,
  isMenuVisible,
  header,
  onMenuToggleClick,
}: PropType) {
  return (
    <nav>
      <IconButton
        className={`${isVisible ? '' : 'hidden'}`}
        onClick={onMenuToggleClick}
        name="Toggle navigation"
        aria-expanded={isMenuVisible}
        aria-controls="main-navigation-mobile"
      >
        <MenuIcon close={isMenuVisible} />
      </IconButton>
      <NavigationDrawer
        id="main-navigation-mobile"
        visible={isMenuVisible}
        navigations={header?.navigations ?? []}
      />
    </nav>
  )
}

export default HeaderNavigation
