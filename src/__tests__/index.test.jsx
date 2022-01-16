import React from 'react'
import {render, screen} from '@testing-library/react'
import Home, {getStaticProps} from '../pages/index'
import {collection} from '../__mocks__/fetchCollection.mock'

describe('Home / index page', () => {
  test('render of the header', () => {
    render(
      <Home
        productNavigation={[]}
        heroNavigation={[]}
        roomNavigation={[]}
        featuredCollection={collection}
      />,
    )
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  test('static props method', async () => {
    const props = await getStaticProps()
    expect(props).toHaveProperty('props.productNavigation')
    expect(props).toHaveProperty('props.heroNavigation')
    expect(props).toHaveProperty('props.roomNavigation')
    expect(props).toHaveProperty('props.featuredCollection')
  })
})
