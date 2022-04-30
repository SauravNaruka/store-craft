import faker from 'faker'
import type {
  Collection,
  CollectionConnection,
  CollectionEdge,
  Image,
  ProductConnection,
} from '@generated/storefront.types'
import {buildProductConnection} from './Product.mock'
import {buildImageSmall} from './Image.mock'

export const NUMBER_OF_COLLECTION = 3
export function buildCollectionWithProductsBySlug(): Partial<Collection> {
  return {
    ...buildCollectionFields(),
    products: buildProductConnection() as ProductConnection,
  }
}

export function buildCollectionsBySearchQuery(): Partial<CollectionConnection> {
  return {
    __typename: 'CollectionConnection',
    edges: Array(NUMBER_OF_COLLECTION)
      .fill(undefined)
      .map(() => {
        return {node: buildCollectionFields()}
      }) as CollectionEdge[],
  }
}

export function buildCollectionWithImageByID(
  overrides?: Partial<Collection>,
): Partial<Collection> {
  return {
    ...buildCollectionFields(overrides),
    image: buildImageSmall() as Image,
  }
}

export function buildCollectionFields(
  overrides?: Partial<Collection>,
): Partial<Collection> {
  return {
    __typename: 'Collection',
    id: faker.datatype.uuid(),
    title: faker.random.words(),
    handle: faker.internet.url(),
    ...(overrides ? overrides : {}),
  }
}
