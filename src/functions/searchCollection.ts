import {Handler} from '@netlify/functions'
import {fetchCollectionWithProductsBySlug} from '@api/fetchCollection'
import * as logger from '@helpers/logger'
import {ProductFilter} from '@generated/storefront.types'
import {isError} from '@helpers/error.helper'

const NUMBER_OF_PRODUCTS = 50
const handler: Handler = async event => {
  try {
    const {collection: slug, filter} = event.queryStringParameters ?? {}

    if (slug && filter) {
      const filters = JSON.parse(filter) as ProductFilter[]
      console.log(filters)
      const collection = await fetchCollectionWithProductsBySlug({
        handle: slug,
        numberOfProducts: NUMBER_OF_PRODUCTS,
        filters,
      })

      return {
        statusCode: 200,
        body: JSON.stringify({collection}),
      }
    } else {
      throw new Error("'search collection missing collection slug or filter'")
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
