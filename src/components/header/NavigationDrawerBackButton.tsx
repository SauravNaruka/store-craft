import * as React from 'react'
import ChevronLeftIcon from '@components/icons/ChevronLeftIcon'
import menuStyles from '@styles/menu.module.css'

type PropType = {
  title: string | null
  onClick: () => void
}

export function NavigationDrawerBackButton({
  title,
  onClick: clickHandler,
}: PropType) {
  if (!title) {
    return null
  }

  return (
    <li>
      <button
        className={`${menuStyles.mobileMenuBackButton} ${menuStyles.mobileMenuButton}`}
        onClick={() => clickHandler()}
      >
        <ChevronLeftIcon className={menuStyles.mobileMenuBackButtonIcon} />
        <span>{title}</span>
        <span aria-hidden={true} />
      </button>
    </li>
  )
}
