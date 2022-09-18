import client from './clientShopify'
import {API_RESPONSE_ERROR} from '@constants/errors.constants'
import * as logger from '@helpers/logger'
import type {
  Collection,
  CollectionProductsByHandleQuery,
  CollectionProductsByHandleQueryVariables,
  CollectionWithImageByIdQuery,
} from '@generated/storefront.types'

export async function fetchCollectionWithProductsBySlug({
  handle,
  numberOfProducts,
  cursor,
  filters,
}: CollectionProductsByHandleQueryVariables): Promise<Collection> {
  try {
    const response = await client
      .CollectionProductsByHandle({
        handle,
        numberOfProducts,
        cursor,
        filters,
      })
      .then(getCollectionFromCollectionQuery)
    return response
  } catch (error) {
    logger.error(error)
    throw error
  }
}

export async function fetchCollectionWithProductFiltersBySlug({
  handle,
  numberOfProducts,
  cursor,
  filters,
}: CollectionProductsByHandleQueryVariables): Promise<Collection> {
  try {
    const response = await client
      .CollectionProductsWithFiltersByHandle({
        handle,
        numberOfProducts,
        cursor,
        filters,
      })
      .then(getCollectionFromCollectionQuery)
    return response
  } catch (error) {
    logger.error(error)
    throw error
  }
}

export async function fetchCollectionWithImageByID(
  id: string,
): Promise<Collection> {
  try {
    const response = await client
      .CollectionWithImageByID({id})
      .then(getCollectionFromCollectionQuery)
    return response
  } catch (error) {
    logger.error(error)
    throw error
  }
}

function getCollectionFromCollectionQuery(
  collectionQuery:
    | CollectionProductsByHandleQuery
    | CollectionWithImageByIdQuery,
) {
  const collection = collectionQuery.collection
  if (collection) {
    console.log(JSON.stringify(collection))
    return collection as Collection
  }

  throw new Error(
    `${API_RESPONSE_ERROR}. request at client.Collection for variable`,
  )
}
