import * as React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import {Card} from '@components/Card.server'
import {isValidImageType} from '@helpers/image.helper'
import {
  CollectionConnection,
  Product,
  ProductConnection,
} from '@generated/storefront.types'
import cardStyles from '@styles/card.module.css'
import headerStyles from '@styles/header.module.css'
import navigationStyles from '@styles/navigation.module.css'
import {Maybe} from '@LocalTypes/interfaces'
import SearchIcon from '../icons/SearchIcon'
import {getRelativeProductURL} from '@helpers/url.helpers'
import {getNodesFromConnection} from '@helpers/connection.helper'
import ProductsMap from '@components/ProductsMap'

const style = {
  rootClass: cardStyles.quickSearchCard,
  imageClass: `${cardStyles.quickSearchImage} ${navigationStyles.roomNavigationImage}`,
  linkTextClass: cardStyles.quickSearchLink,
}

type PropType = {
  isActive: boolean
  productConnections: Maybe<ProductConnection>
  collectionConnections: Maybe<CollectionConnection>
}

export function SearchQuickResults({
  isActive,
  productConnections,
  collectionConnections,
}: PropType) {
  const products = productConnections
    ? getNodesFromConnection<Product>(productConnections)
    : []
  return (
    <ul
      className={cx({
        [headerStyles.searchSuggestions]: true,
        hidden: !isActive,
      })}
    >
      <ProductsMap products={products}>
        {({id, title, slug, image}) => {
          return (
            image && (
              <li key={id}>
                {
                  <Card
                    title={title}
                    link={slug}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="50% 50%"
                    sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, 20vw"
                    image={image}
                    aspectRatio={{width: 4, height: 3}}
                    style={style}
                  />
                }
              </li>
            )
          )
        }}
      </ProductsMap>
      {collectionConnections?.edges?.map((collection, index) => {
        return (
          <li key={collection?.node?.id ?? index}>
            <Link href={collection?.node?.handle}>
              <a className="flex items-center">
                <SearchIcon /> <span>{collection?.node?.title}</span>
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
