import * as React from 'react'
import {Filter, FilterValue} from '@generated/storefront.types'
import Checkbox from '@components/microUI/Checkbox'

type PropType = {
  title: string
  filter: Filter
  value: FilterValue[]
  onChange: (arg: FilterValue) => void
}

export function ListFilter({
  title,
  filter,
  value,
  onChange: onChangeHandler,
}: PropType) {
  return (
    <aside>
      <h3>{title}</h3>
      <ul>
        {filter.values.map(option => (
          <li key={option.id}>
            <Checkbox
              id={option.id}
              name={filter.id}
              value={option.input}
              label={option.label}
              checked={value.includes(option.input)}
              onChange={() => onChangeHandler(option.input)}
            />
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default ListFilter
