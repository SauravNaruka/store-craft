import {isError} from '../../helpers/error.helper'

describe('tests for error helpers', () => {
  test('isError to check of it finds correctly the error type', () => {
    expect(isError(new Error())).toBeTruthy()
    expect(isError({})).toBeFalsy()
  })
})
