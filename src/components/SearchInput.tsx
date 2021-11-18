import * as React from 'react'
import {TextInput} from './TextInput'
import {Icon} from './Icon'
import {SearchIconPath} from './IconPaths'
import inputStyles from '@styles/input.module.scss'
import commonStyles from '@styles/common.module.scss'

const styles = [inputStyles.searchInput, commonStyles.shadowSmallToMedium].join(
  ' ',
)
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
