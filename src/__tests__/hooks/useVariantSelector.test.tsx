import {renderHook} from '@testing-library/react-hooks'
import faker from 'faker'
import {
  useVariantSelector,
  getVariantByQueryParameter,
} from '@hooks/useVariantSelector'
import {getProductVariantURL} from '@helpers/product.helper'
import {productVariantConnectionMockData} from 'src/__mocks__/ProductVariant.mock'

describe('useVariantSelector working', () => {
  test('useVariantSelector returns default variant', async () => {
    const {result} = renderHook(() =>
      useVariantSelector(productVariantConnectionMockData),
    )
    const variant = result.current

    expect(variant).toHaveProperty('__typename', 'ProductVariant')
  })

  test('getVariantByQueryParameter function returns correct variant', () => {
    const baseUrl = faker.internet.url()
    const variantEdge = faker.random.arrayElement(
      productVariantConnectionMockData.edges,
    )
    const url = new URL(getProductVariantURL(variantEdge.node, baseUrl))
    const variantQuery = url.search
    console.log('variantQuery: ' + variantQuery)

    expect(
      getVariantByQueryParameter(
        productVariantConnectionMockData,
        queryParamsToObject(variantQuery),
      ),
    ).toHaveProperty('title', variantEdge.node.title)
  })
})

function queryParamsToObject(query: string) {
  return JSON.parse(
    '{"' +
      decodeURI(query)
        .replace(/\?/g, '')
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}',
  )
}
