import * as React from 'react'
import {Card} from '@components/Card.server'
import {
  isShopifyProduct,
  getShopifyProductFirstImage,
} from '@helpers/shopifyProduct.helper'
import type {Navigation} from '@generated/cms.types'
import type {Maybe} from '@LocalTypes/interfaces'
import cardStyles from '@styles/card.module.css'
import navigationStyles from '@styles/navigation.module.css'
import menuStyles from '@styles/menu.module.css'

type PropType = {
  navigation: Maybe<Navigation>
}

const style = {
  rootClass: cardStyles.minimalCard,
  imageClass: `${cardStyles.minimalImage} ${navigationStyles.roomNavigationImage}`,
  linkTextClass: cardStyles.minimalLink,
}

export function NavigationDrawerFeaturedImage({navigation}: PropType) {
  const featuredProducts = navigation?.featured
  const numberOfFeaturedProducts = featuredProducts?.length ?? 0

  if (featuredProducts && numberOfFeaturedProducts > 0) {
    return (
      <li>
        <h3 className={menuStyles.mobileMenuLinksTitle}>Featured</h3>
        <ul className="flex flex">
          {featuredProducts.map(shopifyProduct => {
            if (isShopifyProduct(shopifyProduct)) {
              return (
                <li>
                  <Card
                    title={shopifyProduct.title ?? ''}
                    link={shopifyProduct.handle ?? '#'}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="50% 50%"
                    sizes="(max-width: 768px) 50vw, 50vw"
                    image={getShopifyProductFirstImage(shopifyProduct)}
                    aspectRatio={{width: 4, height: 3}}
                    style={style}
                  />
                </li>
              )
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
