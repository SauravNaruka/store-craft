import * as React from 'react'
import Image, {ImageComponentProps} from '@components/microUI/Image'
import {InternalLink} from '@components/microUI/InternalLink'
import type {HrefProp} from '@LocalTypes/interfaces'
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
  linkProps?: HrefProp
}

export function Card({
  title,
  subtitle,
  link,
  style,
  role,
  linkProps,
  ...rest
}: PropType) {
  return (
    <div className={style.rootClass} {...(role ? {role} : {})}>
      <InternalLink
        href={link}
        aria-hidden="true"
        tabIndex={-1}
        className={cardStyles.hiddenLink}
        {...(linkProps ? linkProps : {})}
      />

      <div className={style.imageClass}>
        <Image alt="crafty Wing product image" {...rest} />
      </div>

      <InternalLink
        href={link}
        className={style.linkTextClass}
        {...(linkProps ? linkProps : {})}
      >
        <span>{title}</span>
        {subtitle && <span>{subtitle}</span>}
      </InternalLink>
    </div>
  )
}
