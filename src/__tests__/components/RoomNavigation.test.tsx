import {render, screen} from '@testing-library/react'
import {RoomNavigation} from '@components/RoomNavigation'
import {isInternalLink} from '@helpers/LinkInternal.helper'
import {isShopifyCollection} from '@helpers/collection.helper'
import {buildNavigationAndCollectionIDs} from '../../__mocks__/Navigations.mock'

describe('room navigation', () => {
  test('room navigation links', () => {
    const {navigation, collectionsByID} = buildNavigationAndCollectionIDs()

    render(
      <RoomNavigation
        navigation={navigation}
        collectionsByID={collectionsByID}
      />,
    )

    const numberOfNavigation = navigation.items?.filter(
      (item: unknown) =>
        isInternalLink(item) && isShopifyCollection(item.reference),
    ).length

    expect(screen.getAllByRole('link').length).toBe(numberOfNavigation)
    expect(
      screen.getByRole('heading', {
        name: new RegExp(navigation.title ?? 'Non Matching string'),
      }),
    ).toBeInTheDocument()
  })
})
