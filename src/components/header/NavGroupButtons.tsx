import * as React from 'react'
import cx from 'classnames'
import ChevronRightIcon from '@components/icons/ChevronRightIcon'
import menuStyles from '@styles/menu.module.css'

type PropType = {
  id: string
  visible: boolean
}

export function NavGroups({id, visible}: PropType) {
  const [activeMenuID, setActiveMenuID] = React.useState<string | null>(null)
  return (
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
    </ul>
  )
}

export default NavGroups
