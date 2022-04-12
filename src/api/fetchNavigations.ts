import first from 'lodash/first.js'
import isArray from 'lodash/isArray'
import client from '@api/clientSainty'
import * as logger from '@helpers/logger'
import {isInternalLink} from '@helpers/LinkInternal.helper'
import {isShopifyCollection} from '@helpers/collection.helper'
import {fetchCollectionWithImageByID} from './fetchCollection'
import {API_RESPONSE_ERROR} from '@constants/errors.constants'
import type {
  Navigation,
  NavigationsQuery,
  NavigationsQueryVariables,
  LinkExternalOrLinkInternalOrNavigation,
} from '@generated/cms.types'
import type {Collection} from '@generated/storefront.types'
import type {Maybe, CollectionsByID} from '@LocalTypes/interfaces'

export async function fetchNavigationAndRelatedCollectionBySlug({
  slug,
}: NavigationsQueryVariables) {
  try {
    const navigation = await fetchNavigationBySlug({slug})
    const collectionsByID = await fetchCollectionByNavigation(navigation)

    return {navigation, collectionsByID}
  } catch (error) {
    logger.error(error)
    throw error
  }
}

export async function fetchNavigationBySlug({
  slug,
}: NavigationsQueryVariables): Promise<Navigation> {
  try {
    const navigation = await client
      .Navigations({slug})
      .then(fetchNavigationQuery)

    return navigation
  } catch (error) {
    logger.error(error)
    throw error
  }
}

function fetchNavigationQuery(navigationsQuery: NavigationsQuery) {
  const navigation = first(navigationsQuery.allNavigation)
  if (navigation) {
    return navigation as Navigation
  }

  throw new Error(
    `${API_RESPONSE_ERROR}. request at client.Navigations for variable.`,
  )
}

export async function fetchCollectionByNavigation(navigation: Navigation) {
  if (!navigation?.items || !isArray(navigation.items)) {
    return {}
  }

  const collectionsPromise = navigation.items.map(
    makeCollectionPromiseFromNavigationItem,
  ) as Promise<Collection>[]

  const collections = await Promise.all(collectionsPromise)
  const collectionsByID = formatCollectionsToCollectionsByID(
    collections.filter(Boolean),
  )

  return collectionsByID
}

async function makeCollectionPromiseFromNavigationItem(
  item: Maybe<LinkExternalOrLinkInternalOrNavigation>,
) {
  if (
    isInternalLink(item) &&
    isShopifyCollection(item.reference) &&
    item.reference.shopifyId
  ) {
    return fetchCollectionWithImageByID(item.reference.shopifyId)
  }

  return null
}

function formatCollectionsToCollectionsByID(collections: Collection[]) {
  const collectionsByID: CollectionsByID = {}
  collections.forEach(item => {
    collectionsByID[item.id] = item
  })

  return collectionsByID
}
