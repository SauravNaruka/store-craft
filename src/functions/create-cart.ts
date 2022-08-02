import client from '@api/clientShopify'
import type {Handler} from '@netlify/functions'

const handler: Handler = async () => {
  const data = await client.CartCreate()

  if (!data) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        status: 'There was problem creating a cart.',
      }),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}

export {handler}
