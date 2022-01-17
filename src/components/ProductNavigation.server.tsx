import * as React from 'react'
import {Card} from './Card.server'
import NavigationalItems from './NavigationalItems'
import {HStack} from './HStack.server'
import type {Navigation} from '@generated/cms.types'
import commonStyles from '@styles/common.module.scss'
import cardStyles from '@styles/card.module.scss'
import navigationStyles from '@styles/navigation.module.css'

const style = {
  rootClass: `${cardStyles.glassmorphicCard} ${commonStyles.backgroundGlassmorphic} ${commonStyles.shadowSmallLightSpread}`,
  imageClass: `${cardStyles.glassmorphicImage} ${navigationStyles.productNavigationImage}`,
  linkTextClass: cardStyles.glassmorphicLink,
}

type PropType = {
  navigation: Navigation
}

export function ProductNavigation({navigation}: PropType) {
  return (
    <section className={commonStyles.pageSection}>
      <HStack>
        <NavigationalItems navigation={navigation}>
          {({title, link, imageUrl, imageCaption, index}) => (
            <Card
              key={index}
              title={title}
              link={link}
              src={imageUrl}
              alt={imageCaption}
              width={96}
              height={72}
              aspectRatio={{width: 4, height: 3}}
              priority={true}
              style={style}
            />
          )}
        </NavigationalItems>
      </HStack>
    </section>
  )
}
