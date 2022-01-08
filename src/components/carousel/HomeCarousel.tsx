import * as React from 'react'
import Carousel from '@components/carousel/Carousel'
import Image from '@components/Image'
import type {Navigation, NavigationItem} from '@generated/cms.types'
import carouselStyles from '@styles/Carousel.module.css'
import commonStyles from '@styles/common.module.scss'

type PropType = {
  navigation: Navigation
}

export function HomeCarousel({navigation}: PropType) {
  const navigationItems: NavigationItem[] = navigation?.items?.length
    ? (navigation.items as NavigationItem[])
    : []
  return (
    <Carousel
      id="homeCarousel_child"
      className={`${carouselStyles.homeCarousel}`}
      ariaLabel="Slides for existing offers and announcements"
    >
      {navigationItems.map(({link, image}, index) => {
        if (image?.asset?.url && image?.caption && link?.url)
          return (
            <a key={`homeCarousel_${index}`} href={link.url}>
              <Image
                src={image.asset.url}
                alt={image.caption}
                layout="fill"
                objectFit="cover"
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
