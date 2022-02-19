import {render, screen} from '@testing-library/react'
import faker from 'faker'
import {ProductNavigation} from '../../components/ProductNavigation.server'
import {isInternalLink} from '@helpers/LinkInternal.helper'
import {isShopifyCollection} from '@helpers/collection.helper'
import {getFirstShopifyCollection} from '@helpers/navigation.helper'
import {buildNavigationAndCollectionIDs} from '../../__mocks__/Navigations.mock'

describe('product navigations tests', () => {
  test('navigation to have links', () => {
    const {navigation, collectionsByID} = buildNavigationAndCollectionIDs()

    render(
      <ProductNavigation
        navigation={navigation}
        collectionsByID={collectionsByID}
      />,
    )

    const firstNavigationItem = getFirstShopifyCollection(navigation)
    const title = firstNavigationItem?.title ?? 'Non-matching title'
    const links = screen.getAllByRole('link', {
      name: new RegExp(title),
    })
    expect(links.length).toBeGreaterThanOrEqual(1)
  })

  test('navigation item dont render without a valid link', () => {
    const navigation = {
      items: [
        {
          title: 'Some Title',
          link: undefined,
        },
      ],
    }
    render(<ProductNavigation navigation={navigation} collectionsByID={{}} />)

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  test('navigation item render with a valid link but partial data', async () => {
    const {navigation, collectionsByID} = buildNavigationAndCollectionIDs()

    const updatedNavigation = {
      ...navigation,
      items: [
        ...navigation.items,
        {
          title: undefined,
          link: {url: '/some-url2'},
          image: {asset: {url: faker.internet.url()}, caption: 'some text'},
        },
      ],
    }

    render(
      <ProductNavigation
        navigation={updatedNavigation}
        collectionsByID={collectionsByID}
      />,
    )

    const shopifyCollection =
      isInternalLink(navigation.items[0]) &&
      isShopifyCollection(navigation.items[0].reference)
        ? navigation.items[0].reference
        : null

    const title = isShopifyCollection(shopifyCollection)
      ? (shopifyCollection.title as string)
      : 'Non matching text'

    expect(
      screen.queryByRole('link', {name: new RegExp(title)}),
    ).toBeInTheDocument()

    const links = await screen.findAllByRole('link')
    expect(links).toHaveLength(navigation.items.length)
  })
})
