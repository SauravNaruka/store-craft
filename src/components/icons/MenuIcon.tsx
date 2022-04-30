import {getIconCommanProps} from '@helpers/iconProp.helper'
import type {IconPropType} from '../../types/interfaces'
import iconStyles from '@styles/icon.module.css'

type PropType = IconPropType & {
  close?: boolean
}

export const MenuIcon = ({close, ...props}: PropType) => {
  const className = `h-6 w-6 ${iconStyles.iconPrimaryColor} ${
    iconStyles.menuIcon
  } ${close ? iconStyles.menuIconClose : ''} `
  return (
    <svg
      {...props}
      {...getIconCommanProps({...props, className})}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 8h16M4"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16h16"
      />
    </svg>
  )
}

export default MenuIcon
