import * as React from 'react'
import {Card} from './Card.server'
import NavigationalItems from './NavigationalItems'
import {HStack} from './microUI/HStack.server'
import type {CollectionsByID} from '@LocalTypes/interfaces'
import type {Navigation} from '@generated/cms.types'
import commonStyles from '@styles/common.module.css'
import cardStyles from '@styles/card.module.css'
import navigationStyles from '@styles/navigation.module.css'

const style = {
  rootClass: `${cardStyles.glassmorphicCard} ${commonStyles.backgroundGlassmorphic} ${commonStyles.shadowSmallLightSpread}`,
  imageClass: `${cardStyles.glassmorphicImage} ${navigationStyles.productNavigationImage}`,
  linkTextClass: cardStyles.glassmorphicLink,
}

type PropType = {
  navigation: Navigation
  collectionsByID: CollectionsByID
}

export function ItemCollectionsNavigation({
  navigation,
  collectionsByID,
}: PropType) {
  return (
    <section className={commonStyles.pageSection}>
      <HStack>
        <NavigationalItems
          navigation={navigation}
          collectionsByID={collectionsByID}
        >
          {({title, slug, image, index}) =>
            image && (
              <Card
                key={index}
                title={title}
                link={slug}
                width={96}
                height={72}
                image={image}
                aspectRatio={{width: 4, height: 3}}
                priority={true}
                style={style}
                role="listitem"
              />
            )
          }
        </NavigationalItems>
      </HStack>
    </section>
  )
}
