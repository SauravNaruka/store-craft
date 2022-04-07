import * as React from 'react'
import Link from 'next/link'
import Image, {ImageComponentProps} from '@components/Image'
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
  return (
    <div className={style.rootClass} {...(role ? {role} : {})}>
      <Link href={link}>
        <a aria-hidden="true" tabIndex={-1} className={cardStyles.hiddenLink} />
      </Link>
      <div className={style.imageClass}>
        <Image alt="crafty Wing product image" {...rest} />
      </div>
      <Link href={link}>
        <a className={style.linkTextClass}>
          <span>{title}</span>
          {subtitle && <span>{subtitle}</span>}
        </a>
      </Link>
    </div>
  )
}
