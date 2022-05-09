import {isValidImageType} from '@helpers/image.helper'
import * as React from 'react'
import Carousel, {CarouselAspectRatio, CarouselSliderType} from './Carousel'
import Image from '@components/Image'
import {Product} from '@generated/storefront.types'

export type PropType = {
  product: Product
}

export function ProductCarousel({product}: PropType) {
  return (
    <Carousel
      id="productCarousel_child"
      autoplay={false}
      sliderType={CarouselSliderType.RESPONSIVE}
      aspectRatio={CarouselAspectRatio.IMAGE}
      className={'md:mr-auto w-full md:w-1/2'}
      ariaLabel="Slides for more product images"
    >
      {product.images.edges
        .map((imageNode, index) => {
          const image = isValidImageType(imageNode.node) ? imageNode.node : null
          if (image) {
            return (
              <Image
                key={imageNode.node.id ?? index}
                layout="fill"
                objectFit="contain"
                objectPosition="50% 50%"
                sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, 20vw"
                unoptimized={false}
                priority={index === 0 ? true : false}
                alt={image.altText}
                image={image}
                aspectRatio={{width: 4, height: 3}}
              />
            )
          }
        })
        .filter(Boolean)}
    </Carousel>
  )
}
