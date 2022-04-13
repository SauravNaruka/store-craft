import React from 'react'
import {render, screen} from '@testing-library/react'
import faker from 'faker'
import CollectionPage, {getStaticProps, PropType} from '../pages/[collection]'

describe('the collection page functionality', () => {
  test('the collection page render the product links', async () => {
    const data: {props: PropType} = await getStaticProps({
      params: {collection: faker.random.word()},
    })

    render(<CollectionPage {...data.props} />)
    screen.getByRole('link', {name: new RegExp(data.props.products[0].title)})
  })
})
