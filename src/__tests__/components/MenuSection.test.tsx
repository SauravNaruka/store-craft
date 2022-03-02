import {render, screen} from '@testing-library/react'
import MenuSection from '@components/header/MenuSection'
import {buildNavigationGroupWithShopifyCollection} from '../../__mocks__/NavigationGroup.mock'
import {
  LinkInternal,
  NavigationGroup,
  ShopifyCollection,
} from '@generated/cms.types'

describe('MenuSection functionality ', () => {
  test('menu section has links to collection', () => {
    const navigationGroup = buildNavigationGroupWithShopifyCollection()
    const mockCB = jest.fn()
    render(<MenuSection menuVisiblity={true} onMenuToggleClick={mockCB} />)

    const shopifyCollection =
      getFirstShopifyCollectionFromNavigationGroup(navigationGroup)

    expect(
      screen.getByRole('link', {
        name: shopifyCollection.title ?? 'Non-matching title',
      }),
    ).toBeInTheDocument()
  })
})

function getFirstShopifyCollectionFromNavigationGroup(
  navigationGroup: NavigationGroup,
): ShopifyCollection {
  const linkInternal = navigationGroup.navigation?.items?.[0] as LinkInternal
  const shopifyCollection = linkInternal.reference as ShopifyCollection

  return shopifyCollection
}
