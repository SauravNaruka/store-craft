import React from 'react'
import {render, screen} from '@testing-library/react'
import faker from 'faker'
import CollectionPage, {getStaticProps, PropType} from '../pages/[collection]'
import userEvent from '@testing-library/user-event'

describe('the collection page functionality', () => {
  test('the collection page render the product links', async () => {
    const data: {props: PropType} = await getStaticProps({
      params: {collection: faker.random.word()},
    })

    render(<CollectionPage {...data.props} />)
    const link = screen.getByRole('link', {
      name: new RegExp(data.props.products[0].title),
    })
    expect(link).toBeTruthy()
  })

  test('the collection has filters ', async () => {
    const data: {props: PropType} = await getStaticProps({
      params: {collection: faker.random.word()},
    })
    const optionLabel = data.props.filters[0].values[0].label

    render(<CollectionPage {...data.props} />)

    const filterCheckbox = screen.getByRole('checkbox', {
      name: optionLabel,
    })

    userEvent.click(filterCheckbox)
    expect(screen.getAllByRole('link')).toBeTruthy()
  })
})
