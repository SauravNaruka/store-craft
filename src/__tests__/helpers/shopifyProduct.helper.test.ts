import {isShopifyProduct} from '@helpers/shopifyProduct.helper'
import {buildShopifyProduct} from '../../__mocks__/ShopifyProduct.mock'
import type {ShopifyProduct} from '@generated/cms.types'

describe('helpers for shopifyProduct', () => {
  test('type assertion for shopifyProduct', () => {
    const shopifyProduct = buildShopifyProduct()

    expect(isShopifyProduct(shopifyProduct)).toBeTruthy()
    expect(isShopifyProduct(null)).toBeFalsy()
  })
})
