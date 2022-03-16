import * as React from 'react'
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
      <a
        aria-hidden="true"
        tabIndex={-1}
        href={link}
        className={cardStyles.hiddenLink}
      />
      <div className={style.imageClass}>
        <Image {...rest} />
      </div>
      <a className={style.linkTextClass} href={link}>
        <span>{title}</span>
        {subtitle && <span>{subtitle}</span>}
      </a>
    </div>
  )
}
