import Client from 'shopify-buy'

export function setupAPIClient() {
  return Client.buildClient({
    storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
    domain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!,
  })
}
