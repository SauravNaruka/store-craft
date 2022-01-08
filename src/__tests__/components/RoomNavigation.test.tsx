import {render, screen} from '@testing-library/react'
import {
  buildAndGetFirstNaigation,
  NUMBER_OF_NAVIGATIONITEMS,
} from 'src/__mocks__/fetchNavigations.mock'
import {RoomNavigation} from '@components/RoomNavigation'

describe('room navigation', () => {
  test('room navigation links', () => {
    const navigation = buildAndGetFirstNaigation()

    render(<RoomNavigation navigation={navigation} />)
    expect(screen.getAllByRole('link').length).toBe(NUMBER_OF_NAVIGATIONITEMS)
    expect(
      screen.getByRole('heading', {name: new RegExp(navigation.title!)}),
    ).toBeInTheDocument()
  })
})
