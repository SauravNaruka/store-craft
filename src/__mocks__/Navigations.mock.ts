import {build} from '@jackfranklin/test-data-bot'
import faker from 'faker'
import {buildCollectionWithImageByID} from './Collection.mock'
import {buildNavigationProduct} from './NavigationProduct.mock'
import {isShopifyCollection} from '@helpers/collection.helper'
import {isInternalLink} from '@helpers/LinkInternal.helper'
import {
  buildLinkInternalShopifyCollection,
  buildLinkInternalPage,
} from './LinkInternal.mock'
import type {
  CollectionsByID,
  NavigationAndCollectionsByID,
} from '@LocalTypes/interfaces'
import type {NavigationsQuery, Navigation} from '@generated/cms.types'

export const NUMBER_OF_NAVIGATIONITEMS = 3
export const NUMBER_OF_FEATURED_PRODUCTS = 2

export function buildNavigation(): Navigation {
  return {
    __typename: 'Navigation',
    _id: faker.datatype.uuid(),
    name: faker.random.words(),
    title: faker.random.words(),
    items: Array(NUMBER_OF_NAVIGATIONITEMS)
      .fill(undefined)
      .map(() => buildLinkInternalShopifyCollection()),
    featured: Array(NUMBER_OF_FEATURED_PRODUCTS)
      .fill(undefined)
      .map(() => buildNavigationProduct()),
  }
}

export function buildNavigationWithPageLinks(): Navigation {
  return {
    __typename: 'Navigation',
    name: faker.random.words(),
    title: faker.random.words(),
    items: Array(NUMBER_OF_NAVIGATIONITEMS)
      .fill(undefined)
      .map(() => buildLinkInternalPage()),
  }
}

/**
 *
 * @example
 *  - Level 1: Bedroom, Dining
 *  - Level 2: Bed, Storage, Side table
 *  - Level 3: King Size Bed, Queen Size Bed etc
 *
 */
export function buildNavigationWithThreeLevelOfNavigation(): Navigation {
  return {
    ...buildNavigation(),
    items: Array(NUMBER_OF_NAVIGATIONITEMS) //Level 1
      .fill(undefined)
      .map(() => {
        return {
          ...buildNavigation(),
          items: Array(NUMBER_OF_NAVIGATIONITEMS) // Level 2
            .fill(undefined)
            .map(() => {
              return {
                ...buildNavigation(),
                items: Array(NUMBER_OF_NAVIGATIONITEMS) // Level 3
                  .fill(undefined)
                  .map(() => buildNavigation()),
              }
            }),
        }
      }),
  }
}

/**
 *
 * @example
 *  - Level 1: Bedroom, Dining
 *  - Level 2: Bed, Storage, Side table
 *
 */
export function buildNavigationWithTwoLevelOfNavigation(): Navigation {
  return {
    ...buildNavigation(), //Level 1
    items: Array(NUMBER_OF_NAVIGATIONITEMS) //Level 2
      .fill(undefined)
      .map(() => buildNavigation()),
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
      collectionsByID[id] = buildCollectionWithImageByID({id})
    }
  })

  return {
    navigation,
    collectionsByID,
  }
}
