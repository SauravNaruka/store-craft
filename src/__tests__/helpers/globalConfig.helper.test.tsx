import {getFooterID, getTheme} from '../../helpers/globalConfig.helper'

describe('tests for global config helpers', () => {
  test('error is thrown if footer id is missing', () => {
    expect(() => getFooterID({})).toThrow('Missing footer id')
  })

  test('error is thrown if theme object is missing from global config', () => {
    expect(() => getTheme({})).toThrow('Global theme missing from the config')
  })
})
