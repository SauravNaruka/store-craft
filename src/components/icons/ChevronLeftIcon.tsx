import {getIconCommanProps} from '@helpers/iconProp.helper'
import type {IconPropType} from '../../types/interfaces'
import iconStyles from '@styles/icon.module.css'

export const ChevronLeftIcon = ({className, ...props}: IconPropType) => (
  <svg
    {...getIconCommanProps({
      ...props,
      className: `${iconStyles.iconSecondaryColor} ${className ?? ''}`,
    })}
    {...props}
    width="20px"
    height="20px"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
)

export default ChevronLeftIcon
