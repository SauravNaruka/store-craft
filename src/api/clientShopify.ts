import {GraphQLClient} from 'graphql-request'
import {getSdk} from '../../generated/storefront.types'

const client = new GraphQLClient(process.env.SHOPIFY_STORE_DOMAIN!, {
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token':
      process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
  },
})

// // export const postToShopify = async (query: string, variables?: unknown) => {
// //   return client.request(query, variables)
// // }

const shopifyClient = getSdk(client)
export default shopifyClient
