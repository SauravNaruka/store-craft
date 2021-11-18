const {GraphQLClient} = require('graphql-request')

const client = new GraphQLClient(process.env.SHOPIFY_STORE_DOMAIN!, {
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token':
      process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
  },
})

const postToShopify = async (query: string, variables?: unknown) => {
  return client.request(query, variables)
}

export {postToShopify}
