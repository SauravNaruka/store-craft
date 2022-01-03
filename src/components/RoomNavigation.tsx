import * as React from 'react'
import Cards from '@components/cards/NavigationCards'
import {Card} from '@components/cards/Card.server'
import type {NavigationItem} from '@generated/cms.types'
import commonStyles from '@styles/common.module.scss'
import cardStyles from '@styles/card.module.scss'

const style = {
  rootClass: cardStyles.minimalCard,
  imageClass: `${cardStyles.minimalImage} ${cardStyles.roomNavigationImage}`,
  linkTextClass: cardStyles.minimalLink,
}
type PropType = {
  navigationItems: NavigationItem[]
}

export function RoomNavigation({navigationItems}: PropType) {
  return (
    <section
      role="list"
      className={`${commonStyles.twoColumnGrid} ${cardStyles.minimalCardSection}`}
    >
      <Cards navigationItems={navigationItems}>
        {({title, subtitle, link, imageUrl, imageCaption, index}) => (
          <Card
            key={index}
            title={title}
            subtitle={subtitle}
            link={link}
            src={imageUrl}
            alt={imageCaption}
            priority={false}
            aspectRatio={{width: 4, height: 3}}
            style={style}
          />
        )}
      </Cards>
    </section>
  )
}
