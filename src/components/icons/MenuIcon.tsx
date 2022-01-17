import {getIconCommanProps} from '@helpers/iconProp.helper'
import type {IconPropType} from '../../types/interfaces'
import iconStyles from '@styles/icon.module.css'

export const MenuIcon = (props: IconPropType) => (
  <svg {...props} {...getIconCommanProps(props)}>
    <path
      className={iconStyles.iconPrimaryColor}
      fillRule="evenodd"
      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
    />
  </svg>
)

export default MenuIcon
