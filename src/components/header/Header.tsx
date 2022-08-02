import * as React from 'react'
import cx from 'classnames'
import {SearchBar} from '@components/search/SearchBar'
import {HeaderNavigation} from '@components/header/HeaderNavigation'
import type {Header as HeaderType} from '@generated/cms.types'
import commonStyles from '@styles/common.module.css'
import headerStyles from '@styles/header.module.css'
import {CartLink} from '@components/checkout/CartLink'

type PropType = {
  header: HeaderType
}

export function Header({header}: PropType) {
  const [isMenuVisible, setMenuVisibility] = React.useState(false)
  const [isSearchActive, setSeacrchActiveStatus] = React.useState(false)

  return (
    <header
      className={cx({
        [commonStyles.backgroundGlassmorphic]: true,
        [commonStyles.shadowSmallX]: isSearchActive,
        [headerStyles.mobileHeader]: true,
        [headerStyles.mobileHeaderActiveSearch]: isSearchActive,
      })}
    >
      <HeaderNavigation
        isVisible={!isSearchActive}
        isMenuVisible={isMenuVisible && !isSearchActive}
        onMenuToggleClick={() => setMenuVisibility(!isMenuVisible)}
        header={header}
      />

      <SearchBar
        isActive={isSearchActive}
        onFocus={() => setSeacrchActiveStatus(true)}
        onBackClick={() => setSeacrchActiveStatus(false)}
      />
      {!isSearchActive && <CartLink />}
    </header>
  )
}

export default Header
