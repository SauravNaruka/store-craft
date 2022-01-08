import {render, screen} from '@testing-library/react'
import faker from 'faker'
import Header from 'src/components/header/Header'

describe('Header', () => {
  test('render of the header tag', () => {
    const randomText = faker.random.words()
    const TestComponent = ({text}: {text: string}) => {
      return <div>{text}</div>
    }

    render(
      <Header>
        <TestComponent text={randomText} />
      </Header>,
    )

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByText(randomText)).toBeInTheDocument()
  })
})
