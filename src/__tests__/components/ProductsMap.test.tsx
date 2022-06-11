import {render} from '@testing-library/react'
import ProductsMap from '@components/ProductsMap'
import {buildProductNodeWithImageSmallConnection} from 'src/__mocks__/Product.mock'
import {buildImagesSmallConnection} from 'src/__mocks__/Image.mock'
import type {Product} from '@generated/storefront.types'

describe('ProductsMap', () => {
  test('ProductsMap call child function zero times when emty array', () => {
    const productCallback = jest.fn()
    render(<ProductsMap products={[]}>{productCallback}</ProductsMap>)

    expect(productCallback).toBeCalledTimes(0)
  })

  test('ProductsMap call child function', () => {
    const productCallback = jest.fn()
    const firstProduct = buildProductNodeWithImageSmallConnection() as Product
    const secondProduct = buildProductNodeWithImageSmallConnection()
    const products = [firstProduct, secondProduct] as Product[]

    render(<ProductsMap products={products}>{productCallback}</ProductsMap>)

    expect(productCallback).toBeCalledTimes(2)
    expect(productCallback).nthCalledWith(1, {
      id: firstProduct.id,
      title: firstProduct.title,
      subtitle: firstProduct.description,
      slug: `/products/${firstProduct.handle}`,
      currencyCode: firstProduct.priceRange.minVariantPrice.currencyCode,
      amount: firstProduct.priceRange.minVariantPrice.amount,
      originalAmount: firstProduct.compareAtPriceRange.maxVariantPrice.amount,
      image: firstProduct.featuredImage,
      index: 0,
    })
  })

  test('incomplete data for product', () => {
    const productCallback = jest.fn()
    const inCompleteProduct = {
      ...buildProductNodeWithImageSmallConnection(),
      title: null as unknown as string,
      images: buildImagesSmallConnection({edges: []}),
    } as Product
    render(
      <ProductsMap products={[inCompleteProduct]}>
        {productCallback}
      </ProductsMap>,
    )

    expect(productCallback).toBeCalledTimes(0)
  })
})
