import {render} from '@testing-library/react'
import Cards from '@components/cards/NavigationCards'
import {buildNavigationItem} from '../../__mocks__/fetchNavigations.mock'
import type {NavigationItem} from '../../../generated/cms.types'

describe('Navigation Card functioning', () => {
  test('return card component when everything is right', () => {
    const card = jest.fn()
    const navigationItems: NavigationItem[] = Array(3)
      .fill(undefined)
      .map(() => buildNavigationItem())

    render(<Cards navigationItems={navigationItems}>{card}</Cards>)

    expect(card).toBeCalledTimes(3)
  })

  test('return null when title is missing', () => {
    const card = jest.fn()
    const navigationItem: NavigationItem = buildNavigationItem()
    navigationItem.title = null

    render(<Cards navigationItems={[navigationItem]}>{card}</Cards>)
    expect(card).toBeCalledTimes(0)
  })

  test('return card when subtitle is missing', () => {
    const card = jest.fn()
    const navigationItem: NavigationItem = buildNavigationItem()
    navigationItem.subtitle = null

    render(<Cards navigationItems={[navigationItem]}>{card}</Cards>)
    expect(card).toBeCalledTimes(1)
  })

  test('return card when subtitle is missing', () => {
    const card = jest.fn()
    const navigationItem: NavigationItem = buildNavigationItem()
    navigationItem.link = null

    render(<Cards navigationItems={[navigationItem]}>{card}</Cards>)
    expect(card).toBeCalledTimes(0)
  })
})
