import {render, screen} from '@testing-library/react'
import Filter from '@components/filters/Filters'
import {buildFilters} from '../../__mocks__/Filter.mock'
import {parseFilters} from '@helpers/scalars.helper'
import userEvent from '@testing-library/user-event'

describe('Filter components', () => {
  test('Filter render the filter options', () => {
    const searchMock = jest.fn()
    const filters = buildFilters()
    const parsedFilters = parseFilters(filters)
    render(<Filter filters={parsedFilters} search={searchMock} />)

    expect(
      screen.getByRole('heading', {
        name: filters[0].label,
      }),
    )

    expect(
      screen.getByRole('checkbox', {
        name: filters[0].values[0].label,
      }),
    )
  })

  test('Filter select on click and unselect on clear filter', () => {
    const searchMock = jest.fn()
    const filters = buildFilters()
    const parsedFilters = parseFilters(filters)
    render(<Filter filters={parsedFilters} search={searchMock} />)

    const filterToSelect = screen.getByRole('checkbox', {
      name: filters[0].values[0].label,
    })
    userEvent.click(filterToSelect)
    expect(filterToSelect).toBeChecked()

    userEvent.click(screen.getByRole('button', {name: /Clear Filter/i}))
    expect(filterToSelect).not.toBeChecked()
  })
})
