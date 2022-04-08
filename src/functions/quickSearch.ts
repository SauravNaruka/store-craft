import {Handler} from '@netlify/functions'
import {fetchQuickSearch} from '@api/fetchQuickSearch'

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

  const results = await fetchQuickSearch(query)
  return {
    statusCode: 200,
    body: JSON.stringify(results),
  }
}

export {handler}
