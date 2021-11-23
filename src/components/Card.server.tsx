import * as React from 'react'
import Image from 'next/image'
import bedroomPic from '../../public/bedroom.jpg'
import commonStyles from '@styles/common.module.scss'
import cardStyles from '@styles/card.module.scss'

type PropType = {
  className?: string
}

const defaultClasses = `${cardStyles.card} ${commonStyles.backgroundGlassmorphic} ${commonStyles.shadowSmallLightSpread}`

export function Card({className = defaultClasses}: PropType) {
  return (
    <div className={className}>
      <div className={cardStyles.image}>
        <Image src={bedroomPic} alt="Picture of the author" />
      </div>
      <div>Bed</div>
    </div>
  )
}

export function CardText({text = 'Bed'}) {
  return <div>{text}</div>
}
