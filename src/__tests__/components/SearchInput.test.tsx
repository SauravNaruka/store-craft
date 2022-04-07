import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {SearchBar} from '@components/SearchBar'

describe('IconButton', () => {
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

  test.skip('search suggestion displayed when typing ', async () => {
    render(
      <SearchBar isActive={true} onBackClick={undefined} onFocus={undefined} />,
    )

    userEvent.type(
      screen.getByRole('searchbox', {
        name: /search for products/i,
      }),
      'Hello',
    )

    await waitFor(() => {
      expect(screen.getAllByRole('list')).toBeInTheDocument()
    })
  })
})
