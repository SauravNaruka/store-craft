import * as React from 'react'
import Carousel from '@components/carousel/Carousel'
import Image from '@components/Image'
import type {NavigationItem} from '@generated/cms.types'
import styles from '@styles/Carousel.module.css'

type PropType = {
  navigationItems: NavigationItem[]
}

export function HomeCarousel({navigationItems}: PropType) {
  return (
    <Carousel
      id="homeCarousel"
      className={styles.homeCarousel}
      ariaLabel="Slides for existing offers and announcements. Navigate using the slide tabs"
    >
      {navigationItems.map(({link, image}, index) => {
        if (image?.asset?.url && image?.caption && link?.url)
          return (
            <a key={`homeCarousel_${index}`} href={link.url}>
              <Image
                key={`HomeCarousel_${index}`}
                src={image.asset.url}
                alt={image.caption}
                layout="fill"
                unoptimized={false}
                priority={index === 0 ? true : false}
                aspectRatio={{width: 16, height: 9}}
              />
            </a>
          )
      })}
    </Carousel>
  )
}

export default HomeCarousel
