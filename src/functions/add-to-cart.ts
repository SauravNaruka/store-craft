import client from '@api/clientShopify'
import type {Handler} from '@netlify/functions'

const handler: Handler = async event => {
  const {cartId, variantId, quantity} = JSON.parse(event?.body ?? '{}')

  if (!cartId || !variantId) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        status: 'missing cart parameters',
      }),
    }
  }
  const finalQuantity = parseInt(quantity ?? '1') ?? 1

  const data = await client.AddToCart({
    cartId,
    variantId,
    quantity: finalQuantity,
  })

  if (!data) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        status: 'There was problem adding to cart',
      }),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}

export {handler}
