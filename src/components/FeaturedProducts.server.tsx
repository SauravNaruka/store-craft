import * as React from 'react'
import {HStack} from './microUI/HStack.server'
import Products from './Products'
import {Card} from './Card.server'
import {getNodesFromConnection} from '@helpers/connection.helper'
import {formatAmount} from '@helpers/price.helper'
import type {Collection, Product} from 'generated/storefront.types'
import commonStyles from '@styles/common.module.css'
import cardStyles from '@styles/card.module.css'
import navigationStyles from '@styles/navigation.module.css'

const style = {
  rootClass: `${cardStyles.glassmorphicCard} ${commonStyles.backgroundGlassmorphic} ${commonStyles.shadowSmallLightSpread}`,
  imageClass: `${cardStyles.glassmorphicImage} ${navigationStyles.productNavigationImage}`,
  linkTextClass: `${cardStyles.glassmorphicLink} ${navigationStyles.textLeft}`,
}

type PropType = {
  collection: Collection
}
export function FeaturedProducts({collection}: PropType) {
  const products = getNodesFromConnection<Product>(collection.products)
  return (
    <section className={commonStyles.pageSection}>
      <h2 className={commonStyles.leftHeader}>{collection.title}</h2>
      <HStack>
        <Products products={products}>
          {({
            title,
            // subtitle,
            slug,
            currencyCode,
            amount,
            originalAmount,
            image,
            index,
          }) =>
            image && (
              <Card
                key={title + index}
                title={title}
                subtitle={
                  <div className={navigationStyles.navigationalPrice}>
                    <span>{formatAmount(amount, currencyCode)}</span>
                    {originalAmount && (
                      <del>{formatAmount(originalAmount, currencyCode)}</del>
                    )}
                  </div>
                }
                link={slug}
                width={96}
                height={72}
                image={image}
                aspectRatio={{width: 4, height: 3}}
                style={style}
                role="listitem"
              />
            )
          }
        </Products>
      </HStack>
    </section>
  )
}

export default FeaturedProducts
