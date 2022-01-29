import * as React from 'react'
import Image from '@components/Image'
import NavigationalItems from './NavigationalItems'
import type {Navigation} from '@generated/cms.types'
import navigationStyles from '@styles/navigation.module.css'
import commonStyles from '@styles/common.module.css'

type PropType = {
  navigation: Navigation
}

export function HeroSection({navigation}: PropType) {
  return (
    <section className={commonStyles.pageSection}>
      <NavigationalItems navigation={navigation}>
        {({link, imageUrl, imageCaption, index}) => {
          if (index > 0) {
            // We only want to display first item. Rest we are ignoring. This is a design call.
            return null
          }

          return (
            <a
              key={`homeCarousel_${index}`}
              href={link}
              className={navigationStyles.heroNavigationStyles}
            >
              <Image
                src={imageUrl}
                alt={imageCaption}
                layout="fill"
                objectFit="contain"
                objectPosition="50% 50%"
                priority={true}
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
