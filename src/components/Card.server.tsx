import * as React from 'react'
import Image, {ImageComponentProps} from '@components/Image'
import cardStyles from '@styles/card.module.scss'

type CardStyle = {
  rootClass: string
  imageClass: string
  linkTextClass: string
}

type PropType = ImageComponentProps & {
  title: JSX.Element | string
  subtitle?: string | null
  link: string
  style: CardStyle
}

export function Card({
  title,
  subtitle,
  link,
  src,
  alt,
  style,
  ...rest
}: PropType) {
  return (
    <div className={style.rootClass} role="listitem">
      <a
        aria-hidden="true"
        tabIndex={-1}
        href={link}
        className={cardStyles.hiddenLink}
      />
      {src && alt && (
        <div className={style.imageClass}>
          <Image src={src} alt={alt} {...rest} />
        </div>
      )}
      <a className={style.linkTextClass} href={link}>
        <span>{title}</span>
        {subtitle && <span>{subtitle}</span>}
      </a>
    </div>
  )
}
