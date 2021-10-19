import {render, screen} from '@testing-library/react'
import {SearchInput} from '@/components/SearchInput'

describe('IconButton', () => {
  test('render of the Search Input tag ', () => {
    render(<SearchInput />)
    expect(screen.getByRole('search')).toBeInTheDocument()
  })
})
