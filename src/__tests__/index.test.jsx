import React from 'react'
import {render, screen} from '@testing-library/react'
import Home, {getStaticProps} from '../pages/index'

describe('Home / index page', () => {
  test('render of the header', () => {
    render(
      <Home
        productNavigationItems={[]}
        heroNavigationItems={[]}
        roomNavigationItems={[]}
      />,
    )
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  test('static props method', async () => {
    const props = await getStaticProps()
    expect(props).toHaveProperty('props.productNavigationItems')
    expect(props).toHaveProperty('props.heroNavigationItems')
    expect(props).toHaveProperty('props.roomNavigationItems')
  })
})
