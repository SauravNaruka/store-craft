import * as React from 'react'
import MenuIcon from '@components/icons/MenuIcon'
import IconButton from '@components/IconButton'
import {MenuGroup} from '@components/header/Menu.server'

type PropType = {
  menuVisiblity: boolean
  onMenuToggleClick: () => void
}

export function MenuSection({menuVisiblity, onMenuToggleClick}: PropType) {
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
      <MenuGroup id="main-navigation-mobile" visible={menuVisiblity} />
    </>
  )
}
