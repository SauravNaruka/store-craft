import {render, screen} from '@testing-library/react'
import MenuSection from '@components/header/MenuSection'
import {
  buildNavigationWithThreeLevelOfNavigation,
  buildNavigationWithTwoLevelOfNavigation,
} from '../../__mocks__/Navigations.mock'
import type {
  LinkInternal,
  Navigation,
  ShopifyCollection,
} from '@generated/cms.types'
import {isInternalLink} from '@helpers/LinkInternal.helper'
import {isShopifyCollection} from '@helpers/collection.helper'

describe('MenuSection functionality ', () => {
  test('menu section has links to collection', () => {
    const navigations = Array(2)
      .fill(undefined)
      .map(() => buildNavigationWithTwoLevelOfNavigation())

    const mockCB = jest.fn()
    render(
      <MenuSection
        menuVisiblity={true}
        onMenuToggleClick={mockCB}
        navigations={navigations}
      />,
    )

    const shopifyCollection =
      getFirstShopifyCollectionFromNavigations(navigations)

    expect(
      screen.getByRole('link', {
        name: shopifyCollection?.title ?? 'Non-matching title',
      }),
    ).toBeInTheDocument()
  })
})

function getFirstShopifyCollectionFromNavigations(
  navigations: Navigation[],
): ShopifyCollection | undefined {
  let shopifyCollection: ShopifyCollection | undefined = undefined
  navigations.forEach(navigation => {
    navigation?.items?.forEach(item => {
      if (item && isInternalLink(item) && isShopifyCollection(item.reference)) {
        shopifyCollection = item.reference
      }
    })
  })

  return shopifyCollection
}
