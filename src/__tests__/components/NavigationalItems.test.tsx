import {render} from '@testing-library/react'
import NavigationalItems from '@components/NavigationalItems'
import type {Navigation} from '../../../generated/cms.types'
import {
  buildNavigationAndCollectionIDs,
  NUMBER_OF_NAVIGATIONITEMS,
} from '../../__mocks__/Navigations.mock'
import {
  buildLinkInternalShopifyCollection,
  buildShopifyCollection,
} from '../../__mocks__/LinkInternal.mock'

describe('Navigational Items functioning', () => {
  test('return card component when everything is right', () => {
    const card = jest.fn()
    const {navigation, collectionsByID} = buildNavigationAndCollectionIDs()

    render(
      <NavigationalItems
        navigation={navigation}
        collectionsByID={collectionsByID}
      >
        {card}
      </NavigationalItems>,
    )

    expect(card).toBeCalledTimes(NUMBER_OF_NAVIGATIONITEMS)
  })

  test('return null when title is missing', () => {
    const card = jest.fn()
    const {navigation, collectionsByID} = buildNavigationAndCollectionIDs()

    const updatedNavigation = {
      ...navigation,
      items: [
        {
          ...buildLinkInternalShopifyCollection(),
          reference: {...buildShopifyCollection({title: undefined})},
        },
      ],
    }

    render(
      <NavigationalItems
        navigation={updatedNavigation}
        collectionsByID={collectionsByID}
      >
        {card}
      </NavigationalItems>,
    )
    expect(card).toBeCalledTimes(0)
  })

  test('return card when subtitle is missing', () => {
    const card = jest.fn()
    const {navigation, collectionsByID} = buildNavigationAndCollectionIDs()

    const updatedNavigation = {
      ...navigation,
      items: [
        {
          ...buildLinkInternalShopifyCollection(),
          reference: {...buildShopifyCollection({subtitle: undefined})},
        },
      ],
    }

    render(
      <NavigationalItems
        navigation={updatedNavigation}
        collectionsByID={collectionsByID}
      >
        {card}
      </NavigationalItems>,
    )
    expect(card).toBeCalledTimes(1)
  })

  test('return card when link is missing', () => {
    const card = jest.fn()
    const {navigation, collectionsByID} = buildNavigationAndCollectionIDs()

    const updatedNavigation = {
      ...navigation,
      items: [
        {
          ...buildLinkInternalShopifyCollection(),
          reference: {...buildShopifyCollection({handle: undefined})},
        },
      ],
    }

    render(
      <NavigationalItems
        navigation={updatedNavigation}
        collectionsByID={collectionsByID}
      >
        {card}
      </NavigationalItems>,
    )
    expect(card).toBeCalledTimes(0)
  })
})
