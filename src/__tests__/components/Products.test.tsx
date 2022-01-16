import {render, screen} from '@testing-library/react'
import Products from '@components/Products'
import {product} from '../../__mocks__/fetchCollection.mock'
import {
  anImageConnection,
  anImageEdge,
  anImage,
} from 'generated/storefront.types'

describe('Products', () => {
  test('Products call child function zero times when emty array', () => {
    const productCallback = jest.fn()
    render(<Products products={[]}>{productCallback}</Products>)

    expect(productCallback).toBeCalledTimes(0)
  })
  test('Products call child function', () => {
    const productCallback = jest.fn()
    const products = [product, product]
    render(<Products products={products}>{productCallback}</Products>)

    expect(productCallback).toBeCalledTimes(2)
    expect(productCallback).nthCalledWith(1, {
      id: product.id,
      link: product.handle,
      title: product.title,
      subtitle: product.description,
      imageUrl: product.images.edges[0].node.url,
      imageCaption: product.images.edges[0].node.altText,
      originalAmount: product.compareAtPriceRange.maxVariantPrice.amount,
      amount: product.priceRange.maxVariantPrice.amount,
      currencyCode: product.priceRange.maxVariantPrice.currencyCode,
      seo: product.seo,
      index: 0,
    })
  })

  test('incomplete data for product', () => {
    const productCallback = jest.fn()
    const inCompleteProduct = {
      ...product,
      images: anImageConnection({edges: []}),
    }
    render(
      <Products products={[inCompleteProduct]}>{productCallback}</Products>,
    )

    expect(productCallback).toBeCalledTimes(0)
  })
})
