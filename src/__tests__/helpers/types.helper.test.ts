import faker from 'faker'
import {
  isBasicType,
  isString,
  isNumber,
  isBoolean,
} from 'src/helpers/types.helper'

describe('type helper methods', () => {
  test('isBasicType helpers method', () => {
    expect(isBasicType(faker.random.words())).toBeTruthy()
    expect(isBasicType(faker.datatype.number())).toBeTruthy()
    expect(isBasicType(faker.datatype.boolean())).toBeTruthy()

    expect(isBasicType({})).toBeFalsy()
    expect(isBasicType(console.log)).toBeFalsy()
  })

  test('isString helpers method', () => {
    expect(isString(faker.random.words())).toBeTruthy()
    expect(isString(2)).toBeFalsy()
  })

  test('isNumber helpers method', () => {
    expect(isNumber(faker.datatype.number())).toBeTruthy()
    expect(isNumber(faker.random.words())).toBeFalsy()
  })

  test('isBoolean helpers method', () => {
    expect(isBoolean(faker.datatype.boolean())).toBeTruthy()
    expect(isBoolean(faker.random.words())).toBeFalsy()
  })
})
