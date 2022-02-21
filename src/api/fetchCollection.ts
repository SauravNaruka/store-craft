import client from './clientShopify'
import {API_RESPONSE_ERROR} from '@constants/errors.constants'
import * as logger from '@helpers/logger'
import type {
  Collection,
  CollectionQuery,
  CollectionShortInfoQuery,
  CollectionQueryVariables,
} from '@generated/storefront.types'

export async function fetchCollectionBySlug({
  handle,
  numberOfProducts,
  numberOfImages,
  cursor,
}: CollectionQueryVariables): Promise<Collection> {
  try {
    const response = await client
      .Collection({
        handle,
        numberOfProducts,
        numberOfImages,
        cursor,
      })
      .then(getCollectionFromCollectionQuery)
    return response
  } catch (error) {
    logger.error(error)
    throw error
  }
}

export async function fetchCollectionShortInfoByID(
  id: string,
): Promise<Collection> {
  try {
    const response = await client
      .CollectionShortInfo({id})
      .then(getCollectionFromCollectionQuery)
    return response
  } catch (error) {
    logger.error(error)
    throw error
  }
}

function getCollectionFromCollectionQuery(
  collectionQuery: CollectionQuery | CollectionShortInfoQuery,
) {
  const collection = collectionQuery.collection
  if (collection) {
    return collection as Collection
  }

  throw new Error(
    `${API_RESPONSE_ERROR}. request at client.Collection for variable`,
  )
}
