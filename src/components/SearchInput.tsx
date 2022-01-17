import * as React from 'react'
import {TextInput} from './TextInput'
import SearchIcon from '@components/icons/SearchIcon'
import commonStyles from '@styles/common.module.css'
import inputStyles from '@styles/input.module.css'

const styles = [inputStyles.searchInput, commonStyles.shadowSmallX].join(' ')

export function SearchInput() {
  return (
    <form role="search" className={styles}>
      <TextInput
        type="search"
        // role="combobox"
        id="search-input"
        name="search"
        spellCheck="false"
        autoComplete="off"
        placeholder="Search"
        aria-label="Search for products"
      />
      <SearchIcon />
      <input value="Submit" type="submit"></input>
    </form>
  )
}
