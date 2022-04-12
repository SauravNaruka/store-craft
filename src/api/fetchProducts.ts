import client from './clientShopify'
import * as logger from '@helpers/logger'

export async function fetchProductsShortInfoBySearchQuery(query: string) {
  try {
    const products = await client.ProductsShortInfoBySearchQuery({
      query,
    })

    return products
  } catch (error) {
    logger.error(error)
    throw error
  }
}
