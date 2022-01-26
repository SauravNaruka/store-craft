import {render, screen} from '@testing-library/react'
import faker from 'faker'
import {Footer} from '@components/footer/Footer.server'

describe('Footer navigation', () => {
  test('footer has footer tag', () => {
    render(<Footer navigations={[]} />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
