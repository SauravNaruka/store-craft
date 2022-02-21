import {getShopifyCollectionImage} from '@helpers/collection.helper'

describe('Connection helper functions', () => {
  test('getNodesFromConnection return expected node', () => {
    const image = getShopifyCollectionImage(null, {})
    expect(image).toBeNull()
  })
})
