import {render} from '@testing-library/react'
import Products from '@components/Products'
import {buildProductNodeWithImageSmallConnection} from 'src/__mocks__/Product.mock'
import {buildImagesSmallConnection} from 'src/__mocks__/Image.mock'
import type {Product} from '@generated/storefront.types'

describe('Products', () => {
  test('Products call child function zero times when emty array', () => {
    const productCallback = jest.fn()
    render(<Products products={[]}>{productCallback}</Products>)

    expect(productCallback).toBeCalledTimes(0)
  })

  test('Products call child function', () => {
    const productCallback = jest.fn()
    const firstProduct = buildProductNodeWithImageSmallConnection() as Product
    const secondProduct = buildProductNodeWithImageSmallConnection()
    const products = [firstProduct, secondProduct] as Product[]

    render(<Products products={products}>{productCallback}</Products>)

    expect(productCallback).toBeCalledTimes(2)
    expect(productCallback).nthCalledWith(1, {
      title: firstProduct.title,
      subtitle: firstProduct.description,
      slug: firstProduct.handle,
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
      <Products products={[inCompleteProduct]}>{productCallback}</Products>,
    )

    expect(productCallback).toBeCalledTimes(0)
  })
})
