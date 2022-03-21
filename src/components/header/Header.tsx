import * as React from 'react'
import cx from 'classnames'
import CartIcon from '@components/icons/CartIcon'
import {SearchInput} from '@components/SearchInput'
import {MenuSection} from '@components/header/MenuSection'
import type {Header as HeaderType} from '@generated/cms.types'
import commonStyles from '@styles/common.module.css'
import headerStyles from '@styles/header.module.css'

type PropType = {
  isMenuVisible: boolean
  header: HeaderType
  onMenuToggleClick: () => void
}

export function Header({header, isMenuVisible, onMenuToggleClick}: PropType) {
  const [isSearchActive, setSeacrchActiveStatus] = React.useState(false)

  return (
    <header
      className={cx({
        [commonStyles.backgroundGlassmorphic]: true,
        [headerStyles.mobileHeader]: true,
        [headerStyles.mobileHeaderActiveSearch]: isSearchActive,
      })}
    >
      <nav className={headerStyles.headerActions}>
        <MenuSection
          isVisible={!isSearchActive}
          isMenuVisible={isMenuVisible && !isSearchActive}
          onMenuToggleClick={onMenuToggleClick}
          header={header}
        />

        <SearchInput
          isActive={isSearchActive}
          onFocus={() => setSeacrchActiveStatus(true)}
          onBackClick={() => setSeacrchActiveStatus(false)}
        />
        {!isSearchActive && <CartIcon name={'Shopping Cart'} />}
      </nav>
    </header>
  )
}

export default Header
