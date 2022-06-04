import {render, screen} from '@testing-library/react'
import faker from 'faker'
import {
  ProductOptions,
  getUnSelectedVariants,
} from '@components/product/ProductOptions'
import {
  propductOptionsMockData,
  productVariantConnectionMockData,
} from 'src/__mocks__/ProductVariant.mock'
import type {ProductOption} from '@generated/storefront.types'

describe('ProductOptions', () => {
  test('product option render all the options', () => {
    const selectedVariant = faker.random.arrayElement(
      productVariantConnectionMockData.edges,
    ).node
    const optionValues = getAllOptionValues(propductOptionsMockData)

    render(
      <ProductOptions
        options={propductOptionsMockData}
        variants={productVariantConnectionMockData}
        selectedVariant={selectedVariant}
        slug={'/product'}
      />,
    )
    const allOptionsHeading = screen.getAllByRole('heading')
    expect(allOptionsHeading).toHaveLength(propductOptionsMockData.length)

    const allOptions = screen.getAllByRole('link')
    expect(allOptions).toHaveLength(optionValues.length)

    const randomValue = faker.random.arrayElement(optionValues)
    const randomLink = screen.getByRole('link', {name: new RegExp(randomValue)})
    expect(randomLink).toBeInTheDocument()
  })

  test('product option render the correct url, title & currency', () => {
    const selectedVariant = productVariantConnectionMockData.edges[0].node
    const handle = '/product/bed'

    render(
      <ProductOptions
        options={propductOptionsMockData}
        variants={productVariantConnectionMockData}
        selectedVariant={selectedVariant}
        slug={handle}
      />,
    )

    const firstCurrentVariantLink = screen.getByRole('link', {
      name: new RegExp(selectedVariant.selectedOptions[0].value),
    })
    expect(firstCurrentVariantLink).toHaveAttribute('href', `/#`)

    const firstOtherVariantLink = screen.getByRole('link', {name: /Queen/i})
    expect(firstOtherVariantLink).toHaveAttribute(
      'href',
      `${handle}?Size=Queen&Storage=With%20Storage&Finish=Honey`,
    )

    expect(
      screen.getByRole('link', {name: /Walnut ₹43,680/i}),
    ).toBeInTheDocument()
  })

  test('product option select the option by selected variant', () => {
    const selectedVariant = productVariantConnectionMockData.edges[0].node

    render(
      <ProductOptions
        options={propductOptionsMockData}
        variants={productVariantConnectionMockData}
        selectedVariant={selectedVariant}
        slug={'/product'}
      />,
    )

    const selectedOption1 = screen.getByRole('link', {
      name: /King/i,
      current: 'page',
    })
    const selectedOption2 = screen.getByRole('link', {
      name: /With Storage/i,
      current: 'page',
    })
    const selectedOption3 = screen.getByRole('link', {
      name: /Honey/i,
      current: 'page',
    })

    expect(selectedOption1).toBeInTheDocument()
    expect(selectedOption2).toBeInTheDocument()
    expect(selectedOption3).toBeInTheDocument()
  })

  // test.skip('getSelectedOptions returns option', () => {
  //   const options = buildProductOptions()

  //   expect(getSelectedOptions(options, {})).toMatchObject({
  //     [options[0].name]: options[0].values[0],
  //     [options[options.length - 1].name]: options[options.length - 1].values[0],
  //   })

  //   expect(Object.keys(getSelectedOptions([], {})).length).toBe(0)

  //   const selectedOption = getSelectedOptions(options, {
  //     [options[0].name.toLowerCase()]: options[0].values[0].toUpperCase(),
  //     [options[1].name.toUpperCase()]: options[1].values[1].toLowerCase(),
  //     unKnownKey: 'thisKeyShouldNotBeInFinalResilt',
  //   })
  //   expect(Object.keys(selectedOption).length).toBe(NUMBER_OF_PRODUCT_OPTION)
  //   expect(selectedOption).toHaveProperty(options[0].name, options[0].values[0])
  //   expect(selectedOption).toHaveProperty(options[1].name, options[1].values[1])
  //   expect(selectedOption).not.toHaveProperty('unKnownKey')
  // })

  test('varaint selection option and related options', () => {
    const selectedVariant = faker.random.arrayElement(
      productVariantConnectionMockData.edges,
    ).node
    const allOptionValues = getAllOptionValues(propductOptionsMockData)

    const unselectedOptionCount =
      allOptionValues.length - propductOptionsMockData.length

    const unSelectedVariant = getUnSelectedVariants(
      selectedVariant,
      productVariantConnectionMockData,
      propductOptionsMockData,
    )

    expect(unSelectedVariant).toHaveLength(unselectedOptionCount)
  })
})

function getAllOptionValues(options: ProductOption[]) {
  let allOptionValue: string[] = []
  options.forEach(option => {
    allOptionValue = allOptionValue.concat(option.values)
  })

  return allOptionValue
}
