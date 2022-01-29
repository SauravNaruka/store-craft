import {getIconCommanProps} from '@helpers/iconProp.helper'
import type {IconPropType} from '../../types/interfaces'
import iconStyles from '@styles/icon.module.css'

export const InformationIcon = (props: IconPropType) => (
  <svg {...getIconCommanProps(props)} {...props}>
    <path
      className={iconStyles.phoneIconPrimary}
      d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"
    />
    <path
      className={iconStyles.phoneIconSecondary}
      d="M11 12a1 1 0 0 1 0-2h2a1 1 0 0 1 .96 1.27L12.33 17H13a1 1 0 0 1 0 2h-2a1 1 0 0 1-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
    />
  </svg>
)

export default InformationIcon
