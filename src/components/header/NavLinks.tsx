import * as React from 'react'
import cx from 'classnames'
import ChevronLeftIcon from '@components/icons/ChevronLeftIcon'
import menuStyles from '@styles/menu.module.css'

type PropType = {
  title: string
  visible: boolean
  onClose: () => void
}

export function NavLinks({title, visible, onClose}: PropType) {
  return (
    <ul
      className={cx({
        [menuStyles.mobileMenuPane]: true,
        [menuStyles.mobileMenuPaneCenter]: visible,
        [menuStyles.mobileMenuPaneRight]: !visible,
      })}
    >
      <li>
        <button className={menuStyles.mobileMenuBackButton} onClick={onClose}>
          <ChevronLeftIcon className={menuStyles.mobileMenuBackButtonIcon} />
          <span>{title}</span>
        </button>
      </li>
      <li>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-grey-200">
          Queen Size Beds
        </a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-grey-200">
          Sofa Cum Beds
        </a>
      </li>
    </ul>
  )
}

export default NavLinks
