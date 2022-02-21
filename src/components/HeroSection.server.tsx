import * as React from 'react'
import Image from '@components/Image'
import NavigationalItems from './NavigationalItems'
import type {CollectionsByID} from '@LocalTypes/interfaces'
import type {Navigation} from '@generated/cms.types'
import navigationStyles from '@styles/navigation.module.css'
import commonStyles from '@styles/common.module.css'

type PropType = {
  navigation: Navigation
  collectionsByID: CollectionsByID
}

export function HeroSection({navigation, collectionsByID}: PropType) {
  return (
    <section className={commonStyles.pageSection}>
      <NavigationalItems
        navigation={navigation}
        collectionsByID={collectionsByID}
      >
        {({slug, image, index}) => {
          if (index > 0 || !image) {
            // Ignoring if missing image
            // We only want to display first item. Rest we are ignoring. This is a design call.
            return null
          }

          return (
            <a
              key={`homeCarousel_${index}`}
              href={slug}
              className={navigationStyles.heroNavigationStyles}
            >
              <Image
                alt={image?.altText ?? ''}
                layout="fill"
                objectFit="contain"
                objectPosition="50% 50%"
                priority={true}
                quality={25}
                image={image}
                aspectRatio={{width: 4, height: 3}}
              />
            </a>
          )
        }}
      </NavigationalItems>
    </section>
  )
}

export default HeroSection
