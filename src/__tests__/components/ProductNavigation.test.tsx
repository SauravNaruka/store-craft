import {render, screen} from '@testing-library/react'
import {ProductNavigation} from '../../components/ProductNavigation.server'
import {buildNavigationItem} from '../../__mocks__/fetchNavigations.mock'
import type {NavigationItem} from '../../../generated/cms.types'
import faker from 'faker'

describe('product navigations tests', () => {
  test('navigation to have links', () => {
    const navigationItems: NavigationItem[] = Array(3)
      .fill(undefined)
      .map(() => buildNavigationItem())

    render(<ProductNavigation navigationItems={navigationItems} />)

    expect(
      screen.getByRole('link', {name: navigationItems[0].title!}),
    ).toBeInTheDocument()
  })

  test('navigation item dont render without a valid link', () => {
    render(
      <ProductNavigation
        navigationItems={[
          {
            title: 'Some Title',
            link: undefined,
            image: undefined,
          },
        ]}
      />,
    )

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  test('navigation item render with a valid link but partial data', async () => {
    render(
      <ProductNavigation
        navigationItems={[
          {
            title: 'Some Title',
            link: {url: '/some-url'},
            image: undefined,
          },
          {
            title: undefined,
            link: {url: '/some-url2'},
            image: {asset: {url: faker.internet.url()}, caption: 'some text'},
          },
        ]}
      />,
    )

    expect(screen.queryByRole('link', {name: 'Some Title'})).toBeInTheDocument()
    const links = await screen.findAllByRole('link')
    expect(links).toHaveLength(2)
  })
})
