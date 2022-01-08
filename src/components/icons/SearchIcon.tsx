import {getIconCommanProps} from '@helpers/iconProp.helper'
import type {IconPropType} from '../../types/interfaces'
import iconStyles from '@styles/icon.module.scss'

export const SearchIcon = (props: IconPropType) => (
  <svg {...props} {...getIconCommanProps(props)}>
    <circle cx="10" cy="10" r="7" className={iconStyles.searchIconPrimary} />
    <path
      className={iconStyles.searchIconSecondary}
      d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
    />
  </svg>
)

export default SearchIcon
