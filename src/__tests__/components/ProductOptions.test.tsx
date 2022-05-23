import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from 'faker'
import {ProductOptions, getSelectedOptions} from '@components/ProductOptions'
import {
  buildProductOptions,
  NUMBER_OF_PRODUCT_OPTION,
} from 'src/__mocks__/ProductOptions.mock'
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
      />,
    )
    const allOptionsHeading = screen.getAllByRole('heading')
    expect(allOptionsHeading).toHaveLength(propductOptionsMockData.length)

    const allOptions = screen.getAllByRole('radio')
    expect(allOptions).toHaveLength(optionValues.length)

    const randomValue = faker.random.arrayElement(optionValues)
    const randomLabel = screen.getByLabelText(randomValue)
    expect(randomLabel).toBeInTheDocument()
  })
  test('product option select the default option', () => {
    const selectedVariant = faker.random.arrayElement(
      productVariantConnectionMockData.edges,
    ).node
    const optionValues = getAllOptionValues(propductOptionsMockData)

    render(
      <ProductOptions
        options={propductOptionsMockData}
        variants={productVariantConnectionMockData}
        selectedVariant={selectedVariant}
      />,
    )
    // const defaultSelectedOption = screen.getByRole('radio', {
    //   name: selectedVariant.selectedOptions[0].value,
    // })
    // expect(defaultSelectedOption).toBeChecked()

    const randomValue = faker.random.arrayElement(optionValues)
    const randomOption = screen.getByRole('radio', {
      name: randomValue,
    })
    userEvent.click(randomOption)

    expect(randomOption).toBeChecked()
  })
  test.skip('getSelectedOptions returns option', () => {
    const options = buildProductOptions()

    expect(getSelectedOptions(options, {})).toMatchObject({
      [options[0].name]: options[0].values[0],
      [options[options.length - 1].name]: options[options.length - 1].values[0],
    })

    expect(Object.keys(getSelectedOptions([], {})).length).toBe(0)

    const selectedOption = getSelectedOptions(options, {
      [options[0].name.toLowerCase()]: options[0].values[0].toUpperCase(),
      [options[1].name.toUpperCase()]: options[1].values[1].toLowerCase(),
      unKnownKey: 'thisKeyShouldNotBeInFinalResilt',
    })
    expect(Object.keys(selectedOption).length).toBe(NUMBER_OF_PRODUCT_OPTION)
    expect(selectedOption).toHaveProperty(options[0].name, options[0].values[0])
    expect(selectedOption).toHaveProperty(options[1].name, options[1].values[1])
    expect(selectedOption).not.toHaveProperty('unKnownKey')
  })
})

function getAllOptionValues(options: ProductOption[]) {
  let allOptionValue: string[] = []
  options.forEach(option => {
    allOptionValue = allOptionValue.concat(option.values)
  })

  return allOptionValue
}
