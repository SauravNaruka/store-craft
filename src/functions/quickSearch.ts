import {Handler} from '@netlify/functions'
import {fetchProductsShortInfoBySearchQuery} from '@api/fetchProducts'
import {fetchCollectionsBySearchQuery} from '@api/fetchCollections'

// TODO: Make configrable as part of CMS
const NUMBER_OF_COLLECTIONS_FOR_QUICK_SEARCH = 3
const handler: Handler = async event => {
  const {query} = event.queryStringParameters ?? {}

  if (!query) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        status: 'missing search query parameter',
      }),
    }
  }

  const [products, collections] = await Promise.all([
    fetchProductsShortInfoBySearchQuery(query),
    fetchCollectionsBySearchQuery({
      query,
      numberOfCollections: NUMBER_OF_COLLECTIONS_FOR_QUICK_SEARCH,
    }),
  ])

  return {
    statusCode: 200,
    body: JSON.stringify({products: products.products, collections}),
  }
}

export {handler}
