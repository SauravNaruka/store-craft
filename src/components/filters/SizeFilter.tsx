import * as React from 'react'
import {Filter, FilterValue} from '@generated/storefront.types'
import Checkbox from '@components/Checkbox'

type PropType = {
  title: string
  filter: Filter
  value: FilterValue[]
  onChange: (arg: FilterValue) => void
}

export function SizeFilter({
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
              name={option.id}
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

export default SizeFilter
