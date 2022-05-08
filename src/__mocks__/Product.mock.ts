import faker from 'faker'
import {
  CurrencyCode,
  ImageConnection,
  Product,
  ProductConnection,
  ProductEdge,
} from '@generated/storefront.types'
import {buildImage, buildImagesSmallConnection} from './Image.mock'
import {buildFilters} from './Filter.mock'

export const NUMBER_OF_PRODUCTS = 3
export function buildProductConnection(): Partial<ProductConnection> {
  return {
    __typename: 'ProductConnection',
    edges: Array(NUMBER_OF_PRODUCTS)
      .fill(undefined)
      .map(() => {
        return {
          __typename: 'ProductEdge',
          node: buildProductNodeWithImageSmallConnection(),
        }
      }) as unknown as ProductEdge[],
    filters: buildFilters(),
  }
}

export function buildProductNodeWithImageSmallConnection() {
  return {
    ...buildProductShortInfoFields(),
    ...buildProductPriceFields(),
    description: faker.random.words(),
    images: buildImagesSmallConnection(),
    featuredImage: buildImage(),
  }
}

export function buildProductByHandle(): Partial<Product> {
  return {
    __typename: 'Product',
    ...buildProductShortInfoFields(),
    descriptionHtml: faker.random.words(),
    productType: faker.random.words(),
    images: buildImagesSmallConnection() as ImageConnection,
  }
}

export function buildProductShortInfoFields(): Partial<Product> {
  return {
    __typename: 'Product',
    id: faker.datatype.uuid(),
    title: faker.random.words(),
    handle: faker.internet.url(),
  }
}

export function buildProductPriceFields(): Partial<Product> {
  return {
    compareAtPriceRange: {
      maxVariantPrice: {
        amount: faker.commerce.price(),
        currencyCode: faker.finance.currencyCode() as CurrencyCode,
      },
      minVariantPrice: {
        amount: faker.commerce.price(),
        currencyCode: faker.finance.currencyCode() as CurrencyCode,
      },
    },
    priceRange: {
      maxVariantPrice: {
        amount: faker.commerce.price(),
        currencyCode: faker.finance.currencyCode() as CurrencyCode,
      },
      minVariantPrice: {
        amount: faker.commerce.price(),
        currencyCode: faker.finance.currencyCode() as CurrencyCode,
      },
    },
  }
}
