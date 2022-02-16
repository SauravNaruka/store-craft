import {render} from '@testing-library/react'
import NavigationalItems from '@components/NavigationalItems'
import {
  buildAndGetFirstNaigation,
  buildNavigationItem,
  NUMBER_OF_NAVIGATIONITEMS,
} from '../../__mocks__/Navigations.handlers'
import type {Navigation, NavigationItem} from '../../../generated/cms.types'

describe('Navigational Items functioning', () => {
  test('return card component when everything is right', () => {
    const card = jest.fn()
    const navigation: Navigation = buildAndGetFirstNaigation()

    render(
      <NavigationalItems navigation={navigation}>{card}</NavigationalItems>,
    )

    expect(card).toBeCalledTimes(NUMBER_OF_NAVIGATIONITEMS)
  })

  test('return null when title is missing', () => {
    const card = jest.fn()
    const navigationItem: NavigationItem = buildNavigationItem()
    navigationItem.title = null

    render(
      <NavigationalItems navigation={{items: [navigationItem]}}>
        {card}
      </NavigationalItems>,
    )
    expect(card).toBeCalledTimes(0)
  })

  test('return card when subtitle is missing', () => {
    const card = jest.fn()
    const navigationItem: NavigationItem = buildNavigationItem()
    navigationItem.subtitle = null

    render(
      <NavigationalItems navigation={{items: [navigationItem]}}>
        {card}
      </NavigationalItems>,
    )
    expect(card).toBeCalledTimes(1)
  })

  test('return card when subtitle is missing', () => {
    const card = jest.fn()
    const navigationItem: NavigationItem = buildNavigationItem()
    navigationItem.link = null

    render(
      <NavigationalItems navigation={{items: [navigationItem]}}>
        {card}
      </NavigationalItems>,
    )
    expect(card).toBeCalledTimes(0)
  })
})
