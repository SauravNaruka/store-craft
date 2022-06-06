import * as React from 'react'
import Image, {ImageComponentProps} from '@components/microUI/Image'
import {InternalLink} from '@components/microUI/InternalLink'
import cardStyles from '@styles/card.module.css'

type CardStyle = {
  rootClass: string
  imageClass: string
  linkTextClass: string
}

type PropType = ImageComponentProps & {
  title: JSX.Element | string
  subtitle?: JSX.Element | string | null
  link: string
  style: CardStyle
  role?: string | null
}

export function Card({title, subtitle, link, style, role, ...rest}: PropType) {
  const pageLink = `/products/${link}`
  return (
    <div className={style.rootClass} {...(role ? {role} : {})}>
      <InternalLink
        href={pageLink}
        aria-hidden="true"
        tabIndex={-1}
        className={cardStyles.hiddenLink}
      />

      <div className={style.imageClass}>
        <Image alt="crafty Wing product image" {...rest} />
      </div>

      <InternalLink href={pageLink} className={style.linkTextClass}>
        <span>{title}</span>
        {subtitle && <span>{subtitle}</span>}
      </InternalLink>
    </div>
  )
}
