import {build, fake} from '@jackfranklin/test-data-bot'
import faker from 'faker'
import {
  buildLinkInternalShopifyCollection,
  buildLinkInternalPage,
} from './LinkInternal.mock'
import type {
  CollectionsByID,
  NavigationAndCollectionsByID,
} from '@LocalTypes/interfaces'
import type {NavigationsQuery, Navigation} from '@generated/cms.types'
import {isInternalLink} from '@helpers/LinkInternal.helper'
import {isShopifyCollection} from '@helpers/collection.helper'
import {buildCollectionShortInfo} from './Collection.mock'

export const NUMBER_OF_NAVIGATIONITEMS = 3

export function buildNavigation(): Navigation {
  return {
    __typename: 'Navigation',
    name: faker.random.words(),
    title: faker.random.words(),
    link: buildLinkInternalShopifyCollection(),
    items: Array(NUMBER_OF_NAVIGATIONITEMS)
      .fill(undefined)
      .map(() => buildLinkInternalShopifyCollection()),
  }
}

export function buildNavigationWithPageLinks(): Navigation {
  return {
    __typename: 'Navigation',
    name: faker.random.words(),
    title: faker.random.words(),
    link: buildLinkInternalShopifyCollection(),
    items: Array(NUMBER_OF_NAVIGATIONITEMS)
      .fill(undefined)
      .map(() => buildLinkInternalPage()),
  }
}

export const buildAllNavigation = build<NavigationsQuery>({
  fields: {
    allNavigation: [buildNavigation()],
  },
})

export function buildNavigationAndCollectionIDs(): NavigationAndCollectionsByID {
  const navigation = buildNavigation()
  const collectionsByID: CollectionsByID = {}

  navigation?.items?.forEach((item: unknown) => {
    if (isInternalLink(item) && isShopifyCollection(item.reference)) {
      const id = item.reference.shopifyId as string
      collectionsByID[id] = buildCollectionShortInfo({overrides: {id}})
    }
  })

  return {
    navigation,
    collectionsByID,
  }
}
