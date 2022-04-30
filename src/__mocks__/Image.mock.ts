import faker from 'faker'
import {Image, ImageConnection, ImageEdge} from '@generated/storefront.types'

export const NUMBER_OF_IMAGES = 3
export function buildImagesSmallConnection(
  overrides?: Partial<ImageConnection>,
): Partial<ImageConnection> {
  return {
    edges: Array(NUMBER_OF_IMAGES)
      .fill(undefined)
      .map(() => {
        return {
          node: buildImageSmall(),
        }
      }) as ImageEdge[],
    ...(overrides?.edges ? {edges: overrides.edges} : {}),
  }
}

export function buildImage(): Partial<Image> {
  return {
    __typename: 'Image',
    altText: faker.random.words(),
    url: faker.internet.url(),
    w96: faker.internet.url(),
    w128: faker.internet.url(),
    w256: faker.internet.url(),
    w384: faker.internet.url(),
    w640: faker.internet.url(),
    w750: faker.internet.url(),
    w828: faker.internet.url(),
    w1080: faker.internet.url(),
    w1200: faker.internet.url(),
    w1920: faker.internet.url(),
    w2048: faker.internet.url(),
    w3840: faker.internet.url(),
  } as unknown as Image
}

export function buildImageSmall(): Partial<Image> {
  return {
    __typename: 'Image',
    altText: faker.random.words(),
    url: faker.internet.url(),
    w96: faker.internet.url(),
    w128: faker.internet.url(),
    w256: faker.internet.url(),
  } as unknown as Image
}
