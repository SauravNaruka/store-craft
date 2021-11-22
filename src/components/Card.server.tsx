import * as React from 'react'
import Image from 'next/image'
import bedroomPic from '../../public/bedroom.jpg'
import Styles from '@styles/card.module.scss'

type PropType = {
  className?: string
}

export function Card({className = Styles.card}: PropType) {
  return (
    <div className={className}>
      <div className={Styles.image}>
        <Image src={bedroomPic} alt="Picture of the author" />
      </div>
      <div>Bed</div>
    </div>
  )
}

export function CardText({text = 'Bed'}) {
  return <div>{text}</div>
}
