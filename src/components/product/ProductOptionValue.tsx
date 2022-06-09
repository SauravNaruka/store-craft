import * as React from 'react'
import {Card} from '@components/Card.server'
import {formatAmount} from '@helpers/price.helper'
import {isValidImageType} from '@helpers/image.helper'
import commonStyles from '@styles/common.module.css'
import cardStyles from '@styles/card.module.css'
import navigationStyles from '@styles/navigation.module.css'
import type {Maybe} from '@LocalTypes/interfaces'
import type {Image, MoneyV2} from '@generated/storefront.types'

export type PropType = {
  slug: string
  value: string
  isSelected: boolean
  price: MoneyV2
  image: Maybe<Image>
}

const style = {
  rootClass: `${cardStyles.glassmorphicCard} ${commonStyles.backgroundGlassmorphic} ${commonStyles.shadowSmallLightSpread}`,
  imageClass: `${cardStyles.glassmorphicImage} ${navigationStyles.productNavigationImage}`,
  linkTextClass: cardStyles.glassmorphicLink,
}

export function ProductOptionValue({
  slug,
  value,
  isSelected,
  price,
  image: featuredImage,
}: PropType) {
  const image = isValidImageType(featuredImage) ? featuredImage : null
  if (image) {
    return (
      <Card
        key={slug}
        title={value}
        subtitle={formatAmount(price.amount, price.currencyCode)}
        link={slug}
        layout="fill"
        objectFit="contain"
        objectPosition="50% 50%"
        sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, 20vw"
        image={image}
        aspectRatio={{width: 4, height: 3}}
        style={style}
        linkProps={isSelected ? {'aria-current': 'page'} : {}}
        // {...(isSelected ? {linkProps: } : {})}
      />
    )
  } else {
    return null
  }
}
