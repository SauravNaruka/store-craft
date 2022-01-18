import faker from 'faker'
import * as logger from '../../helpers/logger'

describe('logger', () => {
  test('logger.error for printing error message', () => {
    const mockLogger = jest.fn()
    const errorMessage = faker.random.words()
    const error = new Error(errorMessage)
    logger.error(error, mockLogger)

    expect(mockLogger.mock.calls.length).toBe(1)
    expect(mockLogger).toBeCalledWith(expect.stringMatching(errorMessage))
  })

  test('logger.error for printing default error message when no error object is passed', () => {
    const mockLogger = jest.fn()
    logger.error('error', mockLogger)

    expect(mockLogger).toBeCalledWith(expect.stringMatching('Unknown error'))
  })

  test('getErrorLogger allways return function ', () => {
    const errorLogger = logger.forTesting.getErrorLogger()

    expect(typeof errorLogger).toBe('function')
  })
})
