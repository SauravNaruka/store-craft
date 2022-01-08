import {render, screen} from '@testing-library/react'
import faker from 'faker'
import {Card} from '@components/Card.server'

const style = {
  rootClass: '',
  imageClass: '',
  linkTextClass: '',
}

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
        src={imageSrc}
        alt={imageCaption}
        aspectRatio={{width: 4, height: 3}}
        style={style}
      />,
    )

    expect(screen.getByRole('link', {name: randomTitle})).toBeInTheDocument()
    expect(screen.getByText(randomTitle)).toBeInTheDocument()
  })

  test('subtitle is in the document', () => {
    const randomTitle = faker.random.words()
    const randomSubTitle = faker.random.words()
    const randomURL = faker.internet.url()
    const imageSrc = faker.random.word()
    const imageCaption = faker.random.words()

    render(
      <Card
        title={randomTitle}
        subtitle={randomSubTitle}
        link={randomURL}
        src={imageSrc}
        alt={imageCaption}
        aspectRatio={{width: 4, height: 3}}
        style={style}
      />,
    )

    expect(
      screen.getByRole('link', {name: new RegExp(randomSubTitle)}),
    ).toBeInTheDocument()
    expect(screen.getByText(new RegExp(randomSubTitle))).toBeInTheDocument()
  })
})
