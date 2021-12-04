import {render, screen} from '@testing-library/react'
import {ProductNavigation} from '../../components/ProductNavigation.server'
import {buildNavigationItem} from '../../__mocks__/fetchNavigations.mock'
import type {NavigationItem} from '../../../generated/cms.types'

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
})
