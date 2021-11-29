import {render, screen} from '@testing-library/react'
import faker from 'faker'
import {Card} from 'src/components/Card.server'

describe('Card tests', () => {
  test('accessibility of link card', () => {
    const randomTitle = faker.random.words()
    const randomURL = faker.internet.url()
    const randomImage = {
      src: faker.internet.url(),
      title: faker.random.words(),
    }

    render(<Card title={randomTitle} link={randomURL} image={randomImage} />)

    expect(screen.getByRole('link', {name: randomTitle})).toBeInTheDocument()
    expect(screen.getByText(randomTitle)).toBeInTheDocument()
  })
})
