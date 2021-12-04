import faker from 'faker'
import {UnknownDataError, isError} from '../../helpers/error.helper'

describe('tests for error helpers', () => {
  test('isError to check of it finds correctly the error type', () => {
    expect(isError(new Error())).toBeTruthy()
  })

  test('custom error Unknown data error for name and message', () => {
    const errorMessage = faker.random.words()
    const error = new UnknownDataError(errorMessage)

    expect(error).toBeInstanceOf(Error)
    expect(error.message).toEqual(errorMessage)
    expect(error.name).toEqual('UnknownDataError')
  })
})
