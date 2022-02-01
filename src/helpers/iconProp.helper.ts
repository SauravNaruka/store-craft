import iconStyles from '@styles/icon.module.css'
import type {IconPropType} from '../types/interfaces'

export function getIconCommanProps({className}: IconPropType): IconPropType {
  return {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24px',
    height: '24px',
    viewBox: '0 0 24 24',
    focusable: false,
    'aria-hidden': true,
    className: `${iconStyles.icon} ${className ?? ''}`,
  }
}
