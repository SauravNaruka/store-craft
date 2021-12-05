import {render, screen} from '@testing-library/react'
import faker from 'faker'
import {Card} from 'src/components/Card.server'

describe('Card tests', () => {
  test('accessibility of link card', () => {
    const randomTitle = faker.random.words()
    const randomURL = faker.internet.url()
    const imageSrc = faker.random.word()
    const imageCaption = faker.random.words()

    render(
      <Card
        title={randomTitle}
        link={randomURL}
        imageSrc={imageSrc}
        imageCaption={imageCaption}
      />,
    )

    expect(screen.getByRole('link', {name: randomTitle})).toBeInTheDocument()
    expect(screen.getByText(randomTitle)).toBeInTheDocument()
  })
})
