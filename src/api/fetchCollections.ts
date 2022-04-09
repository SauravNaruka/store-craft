import client from './clientShopify'
import {API_RESPONSE_ERROR} from '@constants/errors.constants'
import * as logger from '@helpers/logger'
import type {
  CollectionsHandleQuery,
  CollectionConnection,
} from '@generated/storefront.types'
import {isCollectionConnection} from '@helpers/collection.helper'

const NUMBER_OF_STATIC_COLLECTIONS = parseInt(
  process.env.SHOPIFY_NUMBER_OF_STATIC_COLLECTIONS as string,
)
export async function fetchAllCollectionsSlug(): Promise<CollectionConnection> {
  try {
    const response = await client.CollectionsHandle({
      numberOfCollections: NUMBER_OF_STATIC_COLLECTIONS,
    })

    return getCollectionConnectionFromCollectionsQuery(response)
  } catch (error) {
    logger.error(error)
    throw error
  }
}

function getCollectionConnectionFromCollectionsQuery(
  collectionsQuery: CollectionsHandleQuery,
): CollectionConnection {
  const collectionConnection = collectionsQuery.collections
  if (isCollectionConnection(collectionConnection)) {
    return collectionConnection
  }

  throw new Error(
    `${API_RESPONSE_ERROR}. request at client.Collection for variable`,
  )
}
