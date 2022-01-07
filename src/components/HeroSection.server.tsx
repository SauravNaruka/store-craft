import * as React from 'react'
import Image from '@components/Image'
import NavigationalItems from './NavigationalItems'
import type {Navigation} from '@generated/cms.types'
import navigationStyles from '@styles/navigation.module.css'

type PropType = {
  navigation: Navigation
}

export function HeroSection({navigation}: PropType) {
  return (
    <section>
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
                objectFit="cover"
                priority={true}
                aspectRatio={{width: 1, height: 1}}
              />
            </a>
          )
        }}
      </NavigationalItems>
    </section>
  )
}

export default HeroSection
