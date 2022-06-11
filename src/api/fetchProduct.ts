import client from './clientShopify'
import * as logger from '@helpers/logger'
import {ProductByHandleQueryVariables} from '@generated/storefront.types'

export async function fetchProductBySlug(props: ProductByHandleQueryVariables) {
  try {
    return await client.ProductByHandle(props)
  } catch (error) {
    logger.error(error)
    throw error
  }
}
