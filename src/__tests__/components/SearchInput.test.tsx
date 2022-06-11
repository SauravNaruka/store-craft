import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {SearchBar} from '@components/search/SearchBar'

describe('Search Bar', () => {
  test('render of the Search Input tag ', () => {
    render(
      <SearchBar
        isActive={false}
        onBackClick={undefined}
        onFocus={undefined}
      />,
    )
    expect(screen.getByRole('search')).toBeInTheDocument()
  })

  test('search suggestion displayed when typing ', async () => {
    render(
      <SearchBar isActive={true} onBackClick={undefined} onFocus={undefined} />,
    )

    const input = screen.getByRole('searchbox', {
      name: /search for products/i,
    })

    userEvent.type(input, 'Hello')
    await waitFor(() => {
      expect(screen.getAllByRole('list')).toBeTruthy()
    })
    userEvent.type(input, '{enter}')
  })
})
