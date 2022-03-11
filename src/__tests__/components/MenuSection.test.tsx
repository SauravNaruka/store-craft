import {render, screen} from '@testing-library/react'
import MenuSection from '@components/header/MenuSection'
import {isInternalLink} from '@helpers/LinkInternal.helper'
import {isShopifyCollection} from '@helpers/collection.helper'
import {buildHeaderResponse} from '../../__mocks__/header.mock'
import type {Maybe} from '@LocalTypes/interfaces'
import type {Header, Navigation, ShopifyCollection} from '@generated/cms.types'
import {isNavigation} from '@helpers/navigation.helper'

describe('MenuSection functionality ', () => {
  test('menu section has links to collection', () => {
    const header = buildHeaderResponse().Header as Header

    const mockCB = jest.fn()
    render(
      <MenuSection
        menuVisiblity={true}
        onMenuToggleClick={mockCB}
        header={header}
      />,
    )

    const shopifyCollection = getFirstShopifyCollectionFromNavigations(
      header.navigations,
    )

    expect(
      screen.getByRole('link', {
        name: shopifyCollection?.title ?? 'Non-matching title',
      }),
    ).toBeInTheDocument()
  })
})

function getFirstShopifyCollectionFromNavigations(
  navigations: Maybe<Maybe<Navigation>[]>,
): ShopifyCollection | undefined {
  let shopifyCollection: ShopifyCollection | undefined = undefined
  navigations?.forEach(navigation => {
    navigation?.items?.forEach(item => {
      if (isNavigation(item)) {
        item.items?.forEach(links => {
          if (
            links &&
            isInternalLink(links) &&
            isShopifyCollection(links.reference)
          ) {
            shopifyCollection = links.reference
          }
        })
      }
    })
  })

  return shopifyCollection
}
