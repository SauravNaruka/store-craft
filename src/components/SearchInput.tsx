import * as React from 'react'
import cx from 'classnames'
import {TextInput} from './TextInput'
import ChevronLeftIcon from '@components/icons/ChevronLeftIcon'
import SearchIcon from '@components/icons/SearchIcon'
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
  return (
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
        />
        {!isActive && <SearchIcon />}
        <input value="Submit" type="submit"></input>
      </form>
    </div>
  )
}
