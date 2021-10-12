import React from 'react'
import {render, screen} from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  test('renders home page with heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Coming Soon/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
