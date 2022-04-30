import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import first from 'lodash/first'
import Filter, {FilterType} from '@components/filters/Filters'
import {parseFilters} from '@helpers/scalars.helper'
import {buildFilters} from '../../__mocks__/Filter.mock'
import type {Filter as StorefrontFilter} from '@generated/storefront.types'

describe('Filter components', () => {
  test('Filter render the filter options', () => {
    const searchMock = jest.fn()
    const filterOptions = parseFilters(buildFilters())
    const filterHeadingLabel = filterOptions[0].label

    render(<Filter filters={filterOptions} search={searchMock} />)

    const filterHeading = screen.getByRole('heading', {
      name: filterHeadingLabel,
    })

    expect(filterHeading).toBeInTheDocument()
  })

  test('Filter select on click and unselect on clear filter', () => {
    const searchMock = jest.fn()
    const filterOptions = parseFilters(buildFilters())
    const optionLabel = filterOptions[0].values[0].label

    render(<Filter filters={filterOptions} search={searchMock} />)

    const filterCheckbox = screen.getByRole('checkbox', {
      name: optionLabel,
    })

    userEvent.click(filterCheckbox)
    expect(filterCheckbox).toBeChecked()
    userEvent.click(filterCheckbox)
    expect(filterCheckbox).not.toBeChecked()
  })

  test('Filter apply and clear filter actions', () => {
    const searchMock = jest.fn()
    const filterOptions = parseFilters(buildFilters())
    const optionLabel = getSizeFilterOptionLabel(filterOptions)

    render(<Filter filters={filterOptions} search={searchMock} />)

    const applyButton = screen.getByRole('button', {name: /apply/i})
    const clearButton = screen.getByRole('button', {name: /Clear Filter/i})
    const filterCheckbox = screen.getByRole('checkbox', {
      name: optionLabel,
    })

    expect(searchMock).not.toBeCalled()
    userEvent.click(applyButton)
    expect(searchMock).toBeCalledTimes(1)

    userEvent.click(filterCheckbox)
    expect(filterCheckbox).toBeChecked()

    userEvent.click(clearButton)
    expect(filterCheckbox).not.toBeChecked()
  })
})

function getSizeFilterOptionLabel(filterOptions: StorefrontFilter[]): string {
  const sizeFilters = filterOptions.filter(({id}) => id === FilterType.SIZE)
  const firstSizeFilter = first(sizeFilters)
  return firstSizeFilter?.values[0].label ?? 'Non matching label'
}
