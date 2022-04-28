import * as React from 'react'
import SizeFilter from './SizeFilter'
import ListFilter from './ListFilter'
import {Filter, FilterValue} from '@generated/storefront.types'
import {isSmallScreen} from '@helpers/screen.helper'

enum FilterType {
  AVAILABILITY = 'filter.v.availability',
  COLOR = 'filter.v.option.color',
  FABRIC = 'filter.v.option.fabric',
  PRICE = 'filter.v.price',
  PRODUCT_TYPE = 'filter.p.product_type',
  SIZE = 'filter.v.option.size',
}

enum FilterGlobalActionType {
  CLEAR_ALL_FILTERS = 'CLEAR_ALL_FILTERS',
}

type FilterAction = {
  type: FilterType
  payload: FilterValue
}

type FilterGlobalAction = {
  type: FilterGlobalActionType
}

type FiltersAction = FilterAction | FilterGlobalAction

type FilterState = {
  [key in FilterType]: FilterValue[]
}

type PropType = {
  filters: Filter[]
  search: (arg: string) => void
}

const initialState: FilterState = {
  [FilterType.AVAILABILITY]: [],
  [FilterType.COLOR]: [],
  [FilterType.FABRIC]: [],
  [FilterType.PRICE]: [],
  [FilterType.PRODUCT_TYPE]: [],
  [FilterType.SIZE]: [],
}

export function Filters({filters, search}: PropType) {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const didMount = React.useRef(true)
  React.useEffect(() => {
    if (!didMount.current && isSmallScreen()) {
      handleSearch(state, search)
    } else {
      didMount.current = false
    }
  }, [search, state])

  return (
    <section>
      {filters.map(filter => {
        if (filter.id === FilterType.SIZE) {
          return (
            <SizeFilter
              title={filter.label}
              key={filter.id}
              filter={filter}
              value={state[FilterType.SIZE]}
              onChange={value =>
                dispatch({type: FilterType.SIZE, payload: value})
              }
            />
          )
        } else if (filter.type === 'LIST') {
          const filterType = filter.id as FilterType
          return (
            <ListFilter
              title={filter.label}
              key={filter.id}
              filter={filter}
              value={state[filterType] ?? []}
              onChange={value => dispatch({type: filterType, payload: value})}
            />
          )
        } else {
          return null
        }
      })}
      <div>
        <button
          onClick={() =>
            dispatch({type: FilterGlobalActionType.CLEAR_ALL_FILTERS})
          }
        >
          Clear Filter
        </button>
        <button onClick={() => handleSearch(state, search)}>Apply</button>
      </div>
    </section>
  )
}

function reducer(state: FilterState, action: FiltersAction) {
  if (action.type === FilterGlobalActionType.CLEAR_ALL_FILTERS) {
    return initialState
  } else if (isFilterApplied(state, action)) {
    return removeFilter(state, action)
  } else {
    return addFilter(state, action)
  }
}

function isFilterApplied(state: FilterState, action: FilterAction) {
  return state[action.type]?.includes(action.payload)
}

function removeFilter(state: FilterState, action: FilterAction) {
  return {
    ...state,
    [action.type]: state[action.type].filter(value => value !== action.payload),
  }
}

function addFilter(state: FilterState, action: FilterAction) {
  return {
    ...state,
    [action.type]: [...(state[action.type] ?? []), action.payload],
  }
}

function handleSearch(state: FilterState, search: (arg: string) => void) {
  const filterValues = Object.values(state).flat()
  search(JSON.stringify(filterValues))
}

export default Filters
