import * as React from 'react'
import cx from 'classnames'
import ChevronLeftIcon from '@components/icons/ChevronLeftIcon'
import ChevronRightIcon from '@components/icons/ChevronRightIcon'
import menuStyles from '@styles/menu.module.css'

type PropType = {
  id: string
  visible: boolean
}

export function MenuGroup({id, visible}: PropType) {
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
        <ul
          className={cx({
            [menuStyles.mobileMenuPane]: true,
            [menuStyles.mobileMenuPaneLeft]: activeMenuID != null,
            [menuStyles.mobileMenuPaneCenter]: activeMenuID === null,
          })}
        >
          <li>
            <button onClick={() => setActiveMenuID('menu1')}>
              Bedroom
              <ChevronRightIcon />
            </button>
          </li>
          <li>
            <button onClick={() => setActiveMenuID('menu2')}>
              Dinning
              <ChevronRightIcon />
            </button>
          </li>
        </ul>
        <Menu
          title="Bedroom"
          visible={activeMenuID === 'menu1'}
          onClose={() => setActiveMenuID(null)}
        />
      </div>
    </div>
  )
}

type MenuPropType = {
  title: string
  visible: boolean
  onClose: () => void
}

export function Menu({title, visible, onClose}: MenuPropType) {
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

export default Menu
