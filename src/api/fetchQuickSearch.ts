import client from './clientShopify'
import * as logger from '@helpers/logger'

export async function fetchQuickSearch(query: string) {
  try {
    const [products, collections] = await Promise.all([
      client.ProductQuickSearch({query}),
      client.CollectionsQuickSearch({query}),
    ])

    return {products, collections}
  } catch (error) {
    logger.error(error)
    throw error
  }
}
