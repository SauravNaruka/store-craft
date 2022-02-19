import faker from 'faker'
import {render, screen} from '@testing-library/react'
import {HomeCarousel} from '@components/carousel/HomeCarousel'
import {
  buildNavigationAndCollectionIDs,
  NUMBER_OF_NAVIGATIONITEMS,
} from 'src/__mocks__/Navigations.mock'

describe('the working of Home carousel', () => {
  test('home carousel', () => {
    const {navigation, collectionsByID} = buildNavigationAndCollectionIDs()

    render(
      <HomeCarousel
        navigation={navigation}
        collectionsByID={collectionsByID}
      />,
    )
    expect(screen.getAllByRole('link', {hidden: true}).length).toBe(
      NUMBER_OF_NAVIGATIONITEMS,
    )
  })

  test('home carousel with empty value', () => {
    const {navigation, collectionsByID} = buildNavigationAndCollectionIDs()

    const updatedNavigation = {
      ...navigation,
      items: [
        {
          title: undefined,
          link: {url: '/some-url2'},
          image: {asset: {url: faker.internet.url()}, caption: 'some text'},
        },
      ],
    }

    render(
      <HomeCarousel
        navigation={updatedNavigation}
        collectionsByID={collectionsByID}
      />,
    )
    expect(screen.queryAllByRole('link', {hidden: true}).length).toBe(0)
  })
})
