import * as React from 'react'
import cx from 'classnames'
import footerStyles from '@styles/footer.module.css'

type PropType = {
  href: string
  title: string
  subtitle: string
  icon: JSX.Element
  position?: 'first' | 'middle' | 'last'
}
export function FooterCard({
  href,
  title,
  subtitle,
  icon,
  position = 'middle',
}: PropType) {
  return (
    <a
      href={href}
      className={cx({
        [footerStyles.footerCardBox]: true,
        [footerStyles.footerCardBoxFirst]: position === 'first',
        [footerStyles.footerCardBoxLast]: position === 'last',
      })}
    >
      {icon}
      <span className={footerStyles.footerCardMain}>
        <span>{title}</span>
        <span className={footerStyles.footerCardMainSubtitle}>{subtitle}</span>
      </span>
      <span className={footerStyles.footerCardLink}>{''}</span>
    </a>
  )
}
