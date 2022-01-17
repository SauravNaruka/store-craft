import * as React from 'react'
import {HStack} from './HStack.server'
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
            id,
            link,
            title,
            // subtitle,
            imageUrl,
            imageCaption,
            originalAmount,
            amount,
            currencyCode,
            // seo,
          }) => (
            <Card
              key={id}
              title={title}
              subtitle={
                <div className={navigationStyles.navigationalPrice}>
                  <span>{formatAmount(amount, currencyCode)}</span>
                  {originalAmount && (
                    <del>{formatAmount(originalAmount, currencyCode)}</del>
                  )}
                </div>
              }
              link={link}
              src={imageUrl}
              alt={imageCaption}
              width={96}
              height={72}
              aspectRatio={{width: 4, height: 3}}
              priority={true}
              style={style}
            />
          )}
        </Products>
      </HStack>
    </section>
  )
}

export default FeaturedProducts
