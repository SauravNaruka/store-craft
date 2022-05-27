import {render, screen} from '@testing-library/react'
import faker from 'faker'
import {IconButton} from '@components/microUI/IconButton'

describe('IconButton', () => {
  test('render of the button tag with accesable name and css class', () => {
    const randomText = faker.random.words()
    const randomClassName = faker.random.word()
    render(
      <IconButton name={randomText} className={randomClassName}>
        Some Icon
      </IconButton>,
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveAccessibleName(randomText)
    expect(screen.getByRole('button')).toHaveClass(randomClassName)
  })
  test('render of the button tag with no css class', () => {
    const randomText = faker.random.words()
    render(<IconButton name={randomText}>Some Icon</IconButton>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
