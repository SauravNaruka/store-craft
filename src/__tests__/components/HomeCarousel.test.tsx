import {render, screen} from '@testing-library/react'
import faker from 'faker'
import {HomeCarousel} from '@components/carousel/HomeCarousel'
import {
  buildAndGetFirstNaigation,
  NUMBER_OF_NAVIGATIONITEMS,
} from 'src/__mocks__/fetchNavigations.mock'
import type {Navigation, NavigationItem} from '@generated/cms.types'

describe('the working of Home carousel', () => {
  test('home carousel', () => {
    const navigation: Navigation = buildAndGetFirstNaigation()

    render(<HomeCarousel navigation={navigation} />)
    expect(screen.getAllByRole('link', {hidden: true}).length).toBe(
      NUMBER_OF_NAVIGATIONITEMS,
    )
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

    render(<HomeCarousel navigation={{items: navigationItems}} />)
    expect(screen.queryAllByRole('link', {hidden: true}).length).toBe(0)
  })
})
