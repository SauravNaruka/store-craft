import * as React from 'react'
import NavigationDrawer from '@components/header/NavigationDrawer'
import MenuIcon from '@components/icons/MenuIcon'
import IconButton from '@components/IconButton'
import type {Header} from '@generated/cms.types'

type PropType = {
  header: Header
  menuVisiblity: boolean
  onMenuToggleClick: () => void
}

export function MenuSection({
  header,
  menuVisiblity,
  onMenuToggleClick,
}: PropType) {
  return (
    <>
      <IconButton
        onClick={onMenuToggleClick}
        name="Toggle navigation"
        aria-expanded={menuVisiblity}
        aria-controls="main-navigation-mobile"
      >
        <MenuIcon close={menuVisiblity} />
      </IconButton>
      <NavigationDrawer
        id="main-navigation-mobile"
        visible={menuVisiblity}
        navigations={header?.navigations ?? []}
      />
    </>
  )
}

export default MenuSection
