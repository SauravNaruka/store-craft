import iconStyles from '@styles/icon.module.scss'
import type {IconPropType} from '../types/interfaces'

export function getIconCommanProps({
  width = 24,
  height = 28,
  decorativeOnly = true,
  className,
}: IconPropType): IconPropType {
  return {
    width: width,
    height: height,
    viewBox: `0 0 ${width} ${height}`,
    className: `${iconStyles.icon} ${className ?? ''}`,
    ...(decorativeOnly ? {'aria-hidden': true, focusable: false} : {}),
  }
}
