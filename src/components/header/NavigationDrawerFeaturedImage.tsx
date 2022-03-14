import * as React from 'react'
import {Card} from '@components/Card.server'
import {isNavigationProduct} from '@helpers/navigation.helper'
import {
  getImageFromSanityImageBlock,
  isValidImageBlock,
} from '@helpers/image.helper'
import type {Navigation} from '@generated/cms.types'
import type {Maybe} from '@LocalTypes/interfaces'
import cardStyles from '@styles/card.module.css'
import navigationStyles from '@styles/navigation.module.css'
import menuStyles from '@styles/menu.module.css'

type PropType = {
  navigation: Maybe<Navigation>
}

const style = {
  rootClass: `${cardStyles.minimalCard} ${cardStyles.navigatonalCard}`,
  imageClass: `${cardStyles.navigationalImage} ${navigationStyles.roomNavigationImage}`,
  linkTextClass: cardStyles.minimalLink,
}

export function NavigationDrawerFeaturedImage({navigation}: PropType) {
  const featuredProducts = navigation?.featured
  const numberOfFeaturedProducts = featuredProducts?.length ?? 0

  if (featuredProducts && numberOfFeaturedProducts > 0) {
    return (
      <li>
        <h3 className={menuStyles.mobileMenuLinksTitle}>Featured</h3>
        <ul className="flex">
          {featuredProducts.map(navigationProduct => {
            if (
              isNavigationProduct(navigationProduct) &&
              isValidImageBlock(navigationProduct.image)
            ) {
              const image = getImageFromSanityImageBlock(
                navigationProduct.image,
              )
              if (image) {
                return (
                  <li>
                    <Card
                      title={navigationProduct.title ?? ''}
                      link={navigationProduct.product?.handle ?? '#'}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="50% 50%"
                      sizes="(max-width: 768px) 50vw, 50vw"
                      image={image}
                      aspectRatio={{width: 3, height: 4}}
                      style={
                        numberOfFeaturedProducts > 1
                          ? style
                          : {
                              ...style,
                              imageClass: `${style.imageClass} ${cardStyles.navigationalImageSingle}`,
                            }
                      }
                    />
                  </li>
                )
              } else {
                return null
              }
            }
          })}
        </ul>
      </li>
    )
  } else {
    return null
  }
}

export default NavigationDrawerFeaturedImage
