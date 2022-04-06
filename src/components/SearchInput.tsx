import * as React from 'react'
import cx from 'classnames'
import SearchIcon from '@components/icons/SearchIcon'
import {TextInput} from '@components/TextInput'
import commonStyles from '@styles/common.module.css'
import headerStyles from '@styles/header.module.css'
import inputStyles from '@styles/input.module.css'

type PropType = {
  isActive: boolean
  onFocus: React.FocusEventHandler<HTMLInputElement> | undefined
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export function SearchInput({
  isActive,
  onFocus: onFocusHandler,
  onChange: onChangeHandler,
}: PropType) {
  return (
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
        onChange={onChangeHandler}
      />
      {!isActive && <SearchIcon />}
      <input value="Submit" type="submit"></input>
    </form>
  )
}
