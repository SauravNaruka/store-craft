/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react'
import Carousel from '@components/carousel/Carousel'
import Image from '@components/microUI/Image'
import {getInternalLinkNavigationData} from '@helpers/LinkInternal.helper'
import type {CollectionsByID} from '@LocalTypes/interfaces'
import type {Navigation} from '@generated/cms.types'
import carouselStyles from '@styles/Carousel.module.css'

type PropType = {
  navigation: Navigation
  collectionsByID: CollectionsByID
}

export function HomeCarousel({navigation, collectionsByID}: PropType) {
  return (
    <Carousel
      id="homeCarousel_child"
      className={`${carouselStyles.homeCarousel}`}
      ariaLabel="Slides for existing offers and announcements"
    >
      {navigation?.items?.map((item, index) => {
        const navigationalData = getInternalLinkNavigationData(
          item,
          collectionsByID,
        )
        if (
          navigationalData &&
          navigationalData.title &&
          navigationalData.slug &&
          navigationalData.image
        )
          return (
            <a key={`homeCarousel_${index}`} href={navigationalData.slug}>
              <Image
                layout="fill"
                objectFit="cover"
                unoptimized={false}
                priority={index === 0 ? true : false}
                image={navigationalData.image}
                aspectRatio={{width: 16, height: 9}}
              />
            </a>
          )
      })}
    </Carousel>
  )
}

export default HomeCarousel
