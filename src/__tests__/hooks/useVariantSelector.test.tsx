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
    const baseUrl = faker.random.word()
    const variantEdge = faker.random.arrayElement(
      productVariantConnectionMockData.edges,
    )
    const url = getProductVariantURL(variantEdge.node, baseUrl)

    const variantQuery = url.substring(url.indexOf('?') + 1)
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
  const urlParams = new URLSearchParams(query)
  const result: Record<string, string> = {}
  urlParams.forEach((value, key) => {
    result[key] = value
  })

  return result
}
