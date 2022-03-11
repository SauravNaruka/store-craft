/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import {render, screen} from '@testing-library/react'
import Home, {getStaticProps, PropType} from '../pages/index'
import {collection} from '../__mocks__/Collection.mock'
import {buildFooterResponse} from '../__mocks__/Footer.mock'
import type {Footer as FooterType} from '@generated/cms.types'

describe('Home / index page', () => {
  test('render of the header', async () => {
    // const footer = buildFooterResponse().Footer as FooterType

    const data: {props: PropType} = await getStaticProps()
    // const props = data.props
    render(<Home {...data.props} />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  test('static props method', async () => {
    const props = await getStaticProps()
    expect(props).toHaveProperty('props.productNavigationAndCollectionsByID')
    expect(props).toHaveProperty('props.heroNavigationAndCollectionsByID')
    expect(props).toHaveProperty('props.roomNavigationAndCollectionsByID')
    expect(props).toHaveProperty('props.featuredCollection')
    // expect(props).toHaveProperty('props.footer')
  })
})
