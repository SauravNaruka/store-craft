import * as React from 'react'
import cx from 'classnames'
import {BackButton} from '@components/BackButton'
import {SearchQuickResults} from '@components/SearchQuickResults'
import {SearchInput} from '@components/SearchInput'
import {useDebounce} from '@hooks/useDebounce'
import {isProductConnection} from '@helpers/product.helper'
import {restClient} from '@api/clientRest'
import {ProductConnection} from '@generated/storefront.types'
import headerStyles from '@styles/header.module.css'

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
  const [searchResults, setSearchResults] = React.useState<
    ProductConnection | undefined
  >()
  const [searchQuery, setSearchQuery] = React.useState('')
  const debouncedSearchQuery = useDebounce<typeof searchQuery>(searchQuery, 250)

  React.useEffect(() => {
    async function search() {
      if (debouncedSearchQuery.length > 2) {
        const {products} = await restClient(
          `/.netlify/functions/quickSearch?query=${encodeURIComponent(
            debouncedSearchQuery,
          )}`,
        )
        if (isProductConnection(products)) {
          setSearchResults(products)
        }
      }
    }
    search()
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
        />
      </div>
      <SearchQuickResults isActive={isActive} searchResults={searchResults} />
    </>
  )
}
