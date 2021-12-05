import * as React from 'react'
import {TextInput} from './TextInput'
import {Icon} from './Icon'
import {SearchIconPath} from './IconPaths'
import commonStyles from '@styles/common.module.scss'
import inputStyles from '@styles/input.module.scss'

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
      <Icon>
        <SearchIconPath />
      </Icon>
      <input value="Submit" type="submit"></input>
    </form>
  )
}
