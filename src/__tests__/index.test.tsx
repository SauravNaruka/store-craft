import React from 'react'
import {render, screen} from '@testing-library/react'
import Home, {getStaticProps} from '../pages/index'
import {collection} from '../__mocks__/fetchCollection.mock'
import {buildFooterResponse} from '../__mocks__/Footer.mock'
import type {Navigation, Footer as FooterType} from '@generated/cms.types'

describe('Home / index page', () => {
  test('render of the header', () => {
    const footer = buildFooterResponse().Footer as FooterType
    render(
      <Home
        productNavigation={[] as Navigation}
        heroNavigation={[] as Navigation}
        roomNavigation={[] as Navigation}
        footer={footer}
        featuredCollection={collection}
      />,
    )
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  test('static props method', async () => {
    const props = await getStaticProps({})
    expect(props).toHaveProperty('props.productNavigation')
    expect(props).toHaveProperty('props.heroNavigation')
    expect(props).toHaveProperty('props.roomNavigation')
    expect(props).toHaveProperty('props.featuredCollection')
  })
})
