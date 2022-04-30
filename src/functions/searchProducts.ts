import {Handler} from '@netlify/functions'
import {NUMBER_OF_PRODUCTS} from '@constants/products.constants'
import {isError} from '@helpers/error.helper'
import * as logger from '@helpers/logger'
import {fetchProductsBySearchQuery} from '@api/fetchProducts'

const handler: Handler = async event => {
  try {
    const {query} = event.queryStringParameters ?? {}

    if (query) {
      const products = await fetchProductsBySearchQuery(
        query,
        NUMBER_OF_PRODUCTS,
      )

      return {
        statusCode: 200,
        body: JSON.stringify(products),
      }
    } else {
      throw new Error('search query missing')
    }
  } catch (error) {
    logger.error(error)
    return {
      statusCode: 400,
      body: JSON.stringify({
        status: isError(error) ? error.message : 'Unknown Error',
      }),
    }
  }
}

export {handler}
