/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import {render, screen} from '@testing-library/react'
import Home, {getStaticProps, PropType} from '../pages/index'

describe('Home / index page', () => {
  test('render of the header', async () => {
    const data: {props: PropType} = await getStaticProps()
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
