import * as React from 'react'
import Image from 'next/image'
import commonStyles from '@styles/common.module.scss'
import cardStyles from '@styles/card.module.scss'

type PropType = {
  title: JSX.Element | string
  link: string
  imageSrc?: string | null
  imageCaption?: string | null
  priority?: boolean
  className?: string
}

const defaultClasses = `${cardStyles.card} ${commonStyles.backgroundGlassmorphic} ${commonStyles.shadowSmallLightSpread}`

export function Card({
  title,
  link,
  imageSrc,
  imageCaption,
  priority = false,
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
      {imageSrc && imageCaption && (
        <div className={cardStyles.image}>
          <Image
            src={imageSrc + '?h=85'}
            alt={imageCaption}
            width={97}
            height={85}
            quality={90}
            priority={priority}
          />
        </div>
      )}
      <div>
        <a href={link}>{title}</a>
      </div>
    </div>
  )
}
