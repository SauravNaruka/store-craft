import client from './clientShopify'
import * as logger from '@helpers/logger'
import {NUMBER_OF_PRODUCTS} from '@constants/products.constants'

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

export async function fetchProductsBySearchQuery(
  query: string,
  numberOfProducts: number,
) {
  try {
    const products = await client.ProductsBySearchQuery({
      query,
      numberOfProducts,
    })

    return products
  } catch (error) {
    logger.error(error)
    throw error
  }
}

export async function fetchAllProducts() {
  try {
    const products = await client.ProductsBySearchQuery({
      numberOfProducts: NUMBER_OF_PRODUCTS,
    })

    return products.products
  } catch (error) {
    logger.error(error)
    throw error
  }
}
