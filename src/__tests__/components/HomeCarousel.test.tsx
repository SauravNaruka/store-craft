import {render, screen} from '@testing-library/react'
import faker from 'faker'
import {HomeCarousel} from '@components/carousel/HomeCarousel'
import {buildNavigationItem} from 'src/__mocks__/fetchNavigations.mock'
import type {NavigationItem} from '@generated/cms.types'

describe('the working of Home carousel', () => {
  test('home carousel', () => {
    const navigationItems: NavigationItem[] = Array(3)
      .fill(undefined)
      .map(() => buildNavigationItem())

    render(<HomeCarousel navigationItems={navigationItems} />)
    expect(screen.getAllByRole('link', {hidden: true}).length).toBe(3)
  })

  test('home carousel with empty value', () => {
    const navigationItems: NavigationItem[] = [
      {
        title: faker.random.words(),
        link: {url: faker.random.word()},
        image: {
          caption: faker.random.word(),
          asset: {
            url: null,
          },
        },
      },
    ]

    render(<HomeCarousel navigationItems={navigationItems} />)
    expect(screen.queryAllByRole('link', {hidden: true}).length).toBe(0)
  })
})
