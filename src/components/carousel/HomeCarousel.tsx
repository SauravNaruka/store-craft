import * as React from 'react'
import Carousel from '@components/carousel/Carousel'
import Image from '@components/Image'
import NavigationalItems from '@components/NavigationalItems'
import type {Navigation} from '@generated/cms.types'
import styles from '@styles/Carousel.module.css'

type PropType = {
  navigation: Navigation
}

export function HomeCarousel({navigation}: PropType) {
  return (
    <Carousel
      id="homeCarousel_child"
      className={styles.homeCarousel}
      ariaLabel="Slides for existing offers and announcements"
    >
      <NavigationalItems navigation={navigation}>
        {({link, imageUrl, imageCaption, index}) => (
          <a key={`homeCarousel_${index}`} href={link}>
            <Image
              src={imageUrl}
              alt={imageCaption}
              layout="fill"
              unoptimized={false}
              priority={index === 0 ? true : false}
              aspectRatio={{width: 16, height: 9}}
            />
          </a>
        )}
      </NavigationalItems>
    </Carousel>
  )
}

export default HomeCarousel
