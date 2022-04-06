import client from './clientShopify'
import * as logger from '@helpers/logger'

export async function fetchProductQuickSearch(query: string) {
  try {
    const products = await client.ProductQuickSearch({query})

    return products
  } catch (error) {
    logger.error(error)
    throw error
  }
}
