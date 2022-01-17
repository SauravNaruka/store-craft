import iconStyles from '@styles/icon.module.css'
import type {IconPropType} from '../types/interfaces'

export function getIconCommanProps({
  width = 24,
  height = 28,
  className,
}: IconPropType): IconPropType {
  return {
    width: width,
    height: height,
    viewBox: `0 0 ${width} ${height}`,
    focusable: false,
    'aria-hidden': true,
    className: `${iconStyles.icon} ${className ?? ''}`,
  }
}
