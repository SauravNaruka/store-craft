import * as React from 'react'
import cx from 'classnames'
import SearchIcon from '@components/icons/SearchIcon'
import {TextInput} from '@components/microUI/TextInput'
import commonStyles from '@styles/common.module.css'
import headerStyles from '@styles/header.module.css'
import inputStyles from '@styles/input.module.css'

type PropType = {
  isActive: boolean
  onFocus: React.FocusEventHandler<HTMLInputElement> | undefined
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
  onSubmit?: (e: React.FormEvent) => void
}

export function SearchInput({
  isActive,
  onFocus: onFocusHandler,
  onChange: onChangeHandler,
  onSubmit: onSubmitHandler,
}: PropType) {
  return (
    <form
      role="search"
      className={cx({
        [commonStyles.shadowSmallX]: true,
        [inputStyles.searchInput]: true,
        [headerStyles.activeSearchInput]: isActive,
      })}
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault()
        onSubmitHandler && onSubmitHandler(e)
      }}
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
