import * as React from 'react'
import NavigationalItems from '@components/NavigationalItems'
import {Card} from '@components/Card.server'
import type {CollectionsByID} from '@LocalTypes/interfaces'
import type {Navigation} from '@generated/cms.types'
import commonStyles from '@styles/common.module.css'
import cardStyles from '@styles/card.module.css'
import navigationStyles from '@styles/navigation.module.css'

const style = {
  rootClass: cardStyles.minimalCard,
  imageClass: `${cardStyles.minimalImage} ${navigationStyles.roomNavigationImage}`,
  linkTextClass: cardStyles.minimalLink,
}
type PropType = {
  navigation: Navigation
  collectionsByID: CollectionsByID
}

export function RoomNavigation({navigation, collectionsByID}: PropType) {
  return (
    <section
      className={`${commonStyles.pageSection} ${navigationStyles.roomNavigationRoot} `}
    >
      <h2>{navigation.title ?? ''}</h2>
      <div
        role="list"
        className={`${commonStyles.grid2c} ${cardStyles.minimalCardSection}`}
      >
        <NavigationalItems
          navigation={navigation}
          collectionsByID={collectionsByID}
        >
          {({title, subtitle, slug, image, index}) =>
            image && (
              <Card
                key={index}
                title={title}
                subtitle={subtitle}
                link={slug}
                layout="fill"
                objectFit="contain"
                objectPosition="50% 50%"
                sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, 20vw"
                image={image}
                aspectRatio={{width: 4, height: 3}}
                style={style}
              />
            )
          }
        </NavigationalItems>
      </div>
    </section>
  )
}
