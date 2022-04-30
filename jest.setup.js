import '@testing-library/jest-dom/extend-expect'
// Polyfill "window.fetch" used in the React component.
import 'whatwg-fetch'
import {server} from './src/__mocks__/server'

jest.mock('next/image', () => ({
  __esModule: true,
  default: () => {
    return 'Next image stub' // whatever
  },
}))

jest.mock('next/router', () => ({
  useRouter() {
    return {
      prefetch: jest.fn(() => null),
      push: jest.fn(),
    }
  },
}))

// Establish API mocking before all tests.
beforeAll(() => server.listen())
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())
// Clean up after the tests are finished.
afterAll(() => server.close())
