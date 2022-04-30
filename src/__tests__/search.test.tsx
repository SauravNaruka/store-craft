import React from 'react'
import {render, screen} from '@testing-library/react'
import faker from 'faker'
import SearchPage, {getStaticProps, PropType} from '../pages/search'
import userEvent from '@testing-library/user-event'

describe('the collection page functionality', () => {
  test('the collection page render the product links', async () => {
    const data: {props: PropType} = await getStaticProps()
    window.location.href = '?q=sofa'

    render(<SearchPage {...data.props} />)

    const links = screen.getAllByRole('link')
    expect(links).toBeTruthy()
  })
})
