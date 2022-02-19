import {getFooterID, getTheme} from '@helpers/globalConfig.helper'
import {buildGlobalConfigsResponse} from '../../__mocks__/GlobalConfig.mock'
import type {Theme} from '@generated/cms.types'

describe('Global Config helper method', () => {
  test('helper to get footer ID from global config or throw new Error', () => {
    const config = buildGlobalConfigsResponse()
    const theme = config.GlobalConfig?.theme as Theme
    expect(getFooterID(theme)).toBe(theme.footerMenu?._id)
  })

  test('error is thrown if footer id is missing', () => {
    expect(() => getFooterID({})).toThrow('Missing footer id')
  })

  test('error is thrown if theme object is missing from global config', () => {
    expect(() => getTheme({})).toThrow('Global theme missing from the config')
  })
})
