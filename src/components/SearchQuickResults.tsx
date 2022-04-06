import * as React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import {Card} from '@components/Card.server'
import {isValidImageType} from '@helpers/image.helper'
import {ProductConnection} from '@generated/storefront.types'
import cardStyles from '@styles/card.module.css'
import headerStyles from '@styles/header.module.css'
import navigationStyles from '@styles/navigation.module.css'

const style = {
  rootClass: cardStyles.quickSearchCard,
  imageClass: `${cardStyles.quickSearchImage} ${navigationStyles.roomNavigationImage}`,
  linkTextClass: cardStyles.quickSearchLink,
}

type PropType = {
  isActive: boolean
  searchResults: ProductConnection | undefined
}

export function SearchQuickResults({isActive, searchResults}: PropType) {
  return (
    <ul
      className={cx({
        [headerStyles.searchSuggestions]: true,
        hidden: !isActive,
      })}
    >
      {searchResults?.edges.map(product => {
        if (isValidImageType(product.node.featuredImage)) {
          return (
            <li key={product.node.id}>
              {
                <Card
                  title={product.node.title}
                  link={product.node.handle}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="50% 50%"
                  sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, 20vw"
                  image={product.node.featuredImage}
                  aspectRatio={{width: 4, height: 3}}
                  style={style}
                />
              }
            </li>
          )
        } else {
          return (
            <Link href={product.node.handle}>
              <a>{product.node.title}</a>
            </Link>
          )
        }
      })}
    </ul>
  )
}
