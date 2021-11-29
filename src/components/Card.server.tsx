import * as React from 'react'
import Image from 'next/image'
import commonStyles from '@styles/common.module.scss'
import cardStyles from '@styles/card.module.scss'
import {ImageType} from 'src/types/interfaces'

type PropType = {
  title: JSX.Element | string
  link: string
  image: ImageType
  className?: string
}

const defaultClasses = `${cardStyles.card} ${commonStyles.backgroundGlassmorphic} ${commonStyles.shadowSmallLightSpread}`

export function Card({
  title,
  link,
  image,
  className = defaultClasses,
}: PropType) {
  return (
    <div className={className} role="listitem">
      <a
        aria-hidden="true"
        tabIndex={-1}
        href={link}
        className={cardStyles.hiddenLink}
      />
      <div className={cardStyles.image}>
        <Image src={image.src} alt={image.title} width={97} height={85} />
      </div>
      <div>
        <a href={link}>{title}</a>
      </div>
    </div>
  )
}
