import * as React from 'react'
import cx from 'classnames'
import {TextInput} from './TextInput'
import ChevronLeftIcon from '@components/icons/ChevronLeftIcon'
import SearchIcon from '@components/icons/SearchIcon'
import {useDebounce} from '@hooks/useDebounce'
import {restClient} from '@api/clientRest'
import {isProductConnection} from '@helpers/product.helper'
import {ProductConnection} from '@generated/storefront.types'
import commonStyles from '@styles/common.module.css'
import inputStyles from '@styles/input.module.css'
import headerStyles from '@styles/header.module.css'

type PropType = {
  isActive: boolean
  onBackClick: React.MouseEventHandler<HTMLButtonElement> | undefined
  onFocus: React.FocusEventHandler<HTMLInputElement> | undefined
}

export function SearchInput({
  isActive,
  onFocus: onFocusHandler,
  onBackClick: onBackClickHandler,
}: PropType) {
  const [searchResults, setSearchResults] = React.useState<
    ProductConnection | undefined
  >()
  const [searchQuery, setSearchQuery] = React.useState('')
  const debouncedSearchQuery = useDebounce<typeof searchQuery>(
    searchQuery,
    1000,
  )

  React.useEffect(() => {
    async function search() {
      if (debouncedSearchQuery.length > 2) {
        const {products} = await restClient(
          `/.netlify/functions/search?query=${encodeURIComponent(
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
        <button
          className={cx({
            hidden: !isActive,
          })}
          onClick={onBackClickHandler}
        >
          <ChevronLeftIcon />
        </button>
        <form
          role="search"
          className={cx({
            [commonStyles.shadowSmallX]: true,
            [inputStyles.searchInput]: true,
            [headerStyles.activeSearchInput]: isActive,
          })}
        >
          <TextInput
            type="search"
            // role="combobox"
            id="search-input"
            name="search"
            spellCheck="false"
            autoComplete="off"
            placeholder="Search"
            aria-label="Search for products"
            onFocus={onFocusHandler}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSearchQuery(event.target.value)
            }}
          />
          {!isActive && <SearchIcon />}
          <input value="Submit" type="submit"></input>
        </form>
      </div>
      <ul
        className={cx({
          [headerStyles.searchSuggestions]: true,
          hidden: !isActive,
        })}
      >
        {searchResults?.edges.map(product => (
          <li key={product.node.id}>{product.node.title}</li>
        ))}
      </ul>
    </>
  )
}
