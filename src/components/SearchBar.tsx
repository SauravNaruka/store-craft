import * as React from 'react'
import {useRouter} from 'next/router'
import cx from 'classnames'
import {BackButton} from '@components/BackButton'
import {SearchQuickResults} from '@components/SearchQuickResults'
import {SearchInput} from '@components/SearchInput'
import {useDebounce} from '@hooks/useDebounce'
import {isProductConnection} from '@helpers/product.helper'
import * as logger from '@helpers/logger'
import {restClient} from '@api/clientRest'
import {
  ProductConnection,
  CollectionConnection,
} from '@generated/storefront.types'
import headerStyles from '@styles/header.module.css'
import {Maybe} from '@LocalTypes/interfaces'
import {isCollectionConnection} from '@helpers/collection.helper'

type PropType = {
  isActive: boolean
  onBackClick: React.MouseEventHandler<HTMLButtonElement> | undefined
  onFocus: React.FocusEventHandler<HTMLInputElement> | undefined
}

export function SearchBar({
  isActive,
  onFocus: onFocusHandler,
  onBackClick: onBackClickHandler,
}: PropType) {
  const router = useRouter()

  const [searchedProductConnections, setSearchedProductConnections] =
    React.useState<Maybe<ProductConnection>>()
  const [searchedCollectionConnections, setSearchedCollectionsConnections] =
    React.useState<Maybe<CollectionConnection>>()

  const [searchQuery, setSearchQuery] = React.useState('')
  const debouncedSearchQuery = useDebounce<typeof searchQuery>(searchQuery, 250)

  React.useEffect(() => {
    router.prefetch('/search')
  }, [isActive, router])

  React.useEffect(() => {
    if (debouncedSearchQuery.length > 2) {
      search(debouncedSearchQuery).then(
        ({productConnection, collectionConnection}) => {
          setSearchedProductConnections(productConnection)
          setSearchedCollectionsConnections(collectionConnection)
        },
      )
    }
  }, [debouncedSearchQuery])

  return (
    <>
      <div
        className={cx({
          [headerStyles.search]: true,
          [headerStyles.activeSearch]: isActive,
        })}
      >
        <BackButton
          className={cx({
            hidden: !isActive,
          })}
          onClick={onBackClickHandler}
        />

        <SearchInput
          isActive={isActive}
          onFocus={onFocusHandler}
          onChange={event => {
            setSearchQuery(event.target.value)
          }}
          onSubmit={() => {
            router.push({
              pathname: '/search',
              query: {q: searchQuery},
            })
          }}
        />
      </div>
      <SearchQuickResults
        isActive={isActive}
        productConnections={searchedProductConnections}
        collectionConnections={searchedCollectionConnections}
      />
    </>
  )
}

async function search(query: string): Promise<{
  productConnection: Maybe<ProductConnection>
  collectionConnection: Maybe<CollectionConnection>
}> {
  try {
    const {products, collections} = await restClient(
      `/.netlify/functions/quickSearch?query=${encodeURIComponent(query)}`,
    )
    if (
      isProductConnection(products?.products) &&
      isCollectionConnection(collections?.collections)
    ) {
      return {
        productConnection: products.products,
        collectionConnection: collections.collections,
      }
    } else {
      throw new Error(`Unknown result from quick search for query ${query}`)
    }
  } catch (error) {
    logger.error(error)
    return {
      productConnection: undefined,
      collectionConnection: undefined,
    }
  }
}
