import client from './clientShopify'
import {API_RESPONSE_ERROR} from '@constants/errors.constants'
import * as logger from '@helpers/logger'
import type {
  CollectionConnection,
  CollectionsBySearchQueryQuery,
  CollectionsBySearchQueryQueryVariables,
} from '@generated/storefront.types'
import {isCollectionConnection} from '@helpers/collection.helper'

const NUMBER_OF_STATIC_COLLECTIONS = 25

export async function fetchAllCollections(): Promise<CollectionConnection> {
  try {
    const response = await client.CollectionsBySearchQuery({
      numberOfCollections: NUMBER_OF_STATIC_COLLECTIONS,
    })

    return getCollectionConnectionFromCollectionsQuery(response)
  } catch (error) {
    logger.error(error)
    throw error
  }
}

export async function fetchCollectionsBySearchQuery({
  query,
  numberOfCollections,
}: CollectionsBySearchQueryQueryVariables): Promise<CollectionConnection> {
  try {
    const response = await client.CollectionsBySearchQuery({
      query,
      numberOfCollections,
    })

    return getCollectionConnectionFromCollectionsQuery(response)
  } catch (error) {
    logger.error(error)
    throw error
  }
}

function getCollectionConnectionFromCollectionsQuery(
  collectionsQuery: CollectionsBySearchQueryQuery,
): CollectionConnection {
  const collectionConnection = collectionsQuery.collections
  if (isCollectionConnection(collectionConnection)) {
    return collectionConnection
  }

  throw new Error(
    `${API_RESPONSE_ERROR}. request at client.Collection for variable`,
  )
}
