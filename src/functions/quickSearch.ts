import {Handler} from '@netlify/functions'
import {fetchProductQuickSearch} from '@api/fetchProductQuickSearch'

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

  const products = await fetchProductQuickSearch(query)
  return {
    statusCode: 200,
    body: JSON.stringify(products),
  }
}

export {handler}
