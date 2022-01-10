import client from './clientShopify'
import {API_RESPONSE_ERROR} from '@constants/errors.constants'
import * as logger from '@helpers/logger'
import type {
  Collection,
  CollectionQueryVariables,
} from '@generated/storefront.types'

export async function fetchCollection(
  args: CollectionQueryVariables,
): Promise<Collection> {
  try {
    const response = await fetchCollectionQuery(args)
    return response
  } catch (error) {
    logger.error(error)
    throw error
  }
}

function fetchCollectionQuery({
  handle,
  numberOfProducts,
  numberOfImages,
  cursor,
}: CollectionQueryVariables): Promise<Collection> {
  return client
    .Collection({
      handle,
      numberOfProducts,
      numberOfImages,
      cursor,
    })
    .then(collectionQuery => {
      const collection = collectionQuery.collection
      if (collection) {
        return collection as Collection
      }

      throw new Error(
        `${API_RESPONSE_ERROR}. request at client.Collection for variable ID:${handle}, numberOfProducts:${numberOfProducts}, numberOfImages:${numberOfImages}, cursor:${cursor}`,
      )
    })
}
