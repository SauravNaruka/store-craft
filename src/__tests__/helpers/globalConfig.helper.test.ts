/* eslint-disable @typescript-eslint/no-non-null-assertion */
import first from 'lodash/first'
import {getFooterID} from '@helpers/globalConfig.helper'
import {buildGlobalConfigsResponse} from '../../__mocks__/GlobalConfig.mock'

describe('Global Config helper method', () => {
  test('helper to get footer ID from global config or throw new Error', () => {
    const configs = buildGlobalConfigsResponse()
    const config = first(configs.allGlobalConfig)
    const theme = config!.theme!
    expect(getFooterID(theme)).toBe(theme.footerMenu?._id)
  })
})
