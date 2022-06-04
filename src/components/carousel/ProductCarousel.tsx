import {isValidImageType} from '@helpers/image.helper'
import * as React from 'react'
import Carousel, {CarouselAspectRatio, CarouselSliderType} from './Carousel'
import Image from '@components/microUI/Image'
import {
  Product,
  Image as StorefrontImage,
  ImageConnection,
  ImageEdge,
} from '@generated/storefront.types'
import {Maybe} from '@LocalTypes/interfaces'

export type PropType = {
  product: Product
  variantImage: Maybe<StorefrontImage>
}

export function ProductCarousel({product, variantImage}: PropType) {
  const images = React.useMemo(
    () => filterImageByAltText(product.images, variantImage?.altText),
    [product, variantImage],
  )

  return (
    <Carousel
      id="productCarousel_child"
      autoplay={false}
      sliderType={CarouselSliderType.RESPONSIVE}
      aspectRatio={CarouselAspectRatio.IMAGE}
      className={'md:mr-auto w-full md:w-1/2'}
      ariaLabel="Slides for more product images"
    >
      {images
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

function filterImageByAltText(
  images: ImageConnection,
  altText: string | undefined | null,
): ImageEdge[] {
  if (!altText) {
    return images.edges
  }

  return images.edges.filter(({node}) => node.altText === altText)
}
