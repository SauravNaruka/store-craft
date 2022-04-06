import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {SearchInput} from 'src/components/SearchInput'

describe('IconButton', () => {
  test('render of the Search Input tag ', () => {
    render(
      <SearchInput
        isActive={false}
        onBackClick={undefined}
        onFocus={undefined}
      />,
    )
    expect(screen.getByRole('search')).toBeInTheDocument()
  })

  test('search suggestion displayed when typing ', () => {
    render(
      <SearchInput
        isActive={false}
        onBackClick={undefined}
        onFocus={undefined}
      />,
    )

    userEvent.type(screen.getByRole('search'), 'Hello,{enter}World!')

    expect(screen.getAllByRole('list')).toBeInTheDocument()
  })
})
