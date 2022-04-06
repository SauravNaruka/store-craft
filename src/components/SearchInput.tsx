import * as React from 'react'
import cx from 'classnames'
import {Card} from '@components/Card.server'
import ChevronLeftIcon from '@components/icons/ChevronLeftIcon'
import SearchIcon from '@components/icons/SearchIcon'
import {TextInput} from '@components/TextInput'
import {useDebounce} from '@hooks/useDebounce'
import {isProductConnection} from '@helpers/product.helper'
import {restClient} from '@api/clientRest'
import {ProductConnection} from '@generated/storefront.types'
import cardStyles from '@styles/card.module.css'
import commonStyles from '@styles/common.module.css'
import headerStyles from '@styles/header.module.css'
import inputStyles from '@styles/input.module.css'
import navigationStyles from '@styles/navigation.module.css'
import {isValidImageType} from '@helpers/image.helper'

const style = {
  rootClass: cardStyles.quickSearchCard,
  imageClass: `${cardStyles.quickSearchImage} ${navigationStyles.roomNavigationImage}`,
  linkTextClass: cardStyles.quickSearchLink,
}

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
            return <a href={product.node.handle}>{product.node.title}</a>
          }
        })}
      </ul>
    </>
  )
}
