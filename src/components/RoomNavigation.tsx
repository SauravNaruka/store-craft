import * as React from 'react'
import NavigationalItems from '@components/NavigationalItems'
import {Card} from '@components/Card.server'
import type {Navigation} from '@generated/cms.types'
import commonStyles from '@styles/common.module.scss'
import cardStyles from '@styles/card.module.scss'
import navigationStyles from '@styles/navigation.module.css'

const style = {
  rootClass: cardStyles.minimalCard,
  imageClass: `${cardStyles.minimalImage} ${navigationStyles.roomNavigationImage}`,
  linkTextClass: cardStyles.minimalLink,
}
type PropType = {
  navigation: Navigation
}

export function RoomNavigation({navigation}: PropType) {
  return (
    <section
      className={`${cardStyles.minimalCardSection} ${navigationStyles.roomNavigationRoot}`}
    >
      <h2>{navigation.title ?? ''}</h2>
      <div role="list" className={commonStyles.grid2c}>
        <NavigationalItems navigation={navigation}>
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
        </NavigationalItems>
      </div>
    </section>
  )
}
