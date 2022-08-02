import client from '@api/clientShopify'
import type {Handler} from '@netlify/functions'

const handler: Handler = async event => {
  const {cartId} = event.queryStringParameters ?? {}

  if (!cartId) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        status: 'missing cart query parameter',
      }),
    }
  }

  const data = await client.GetCart({cartID: cartId})

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
