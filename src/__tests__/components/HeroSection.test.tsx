import {render, screen} from '@testing-library/react'
import HeroSection from '@components/HeroSection.server'
import {fetchNavigationAndRelatedCollectionBySlug} from '@api/fetchNavigations'

describe('the layout for hero section', () => {
  test('the component reders only one element', async () => {
    const {navigation, collectionsByID} =
      await fetchNavigationAndRelatedCollectionBySlug({slug: 'something'})

    render(
      <HeroSection navigation={navigation} collectionsByID={collectionsByID} />,
    )

    expect(screen.getAllByRole('link').length).toBe(1)
  })
})
