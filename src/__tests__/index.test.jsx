import React from 'react'
import {render, screen} from '@testing-library/react'
import Home, {getStaticProps} from '../pages/index'

describe('Home / index page', () => {
  test('render of the header', () => {
    render(<Home collections={[]} />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  test('static props method', async () => {
    const props = await getStaticProps()
    expect(props).toHaveProperty('props.collections')
  })
})
