import first from 'lodash/first.js'
import client from '@api/clientSainty'
import * as logger from '@helpers/logger'
import {API_RESPONSE_ERROR} from '@constants/errors.constants'
import type {GlobalConfig} from '@generated/cms.types'

export async function fetchGlobalConfig(): Promise<GlobalConfig> {
  try {
    const navigation = await fetchGlobalConfigQuery()
    return navigation
  } catch (error) {
    logger.error(error)
    throw error
  }
}

function fetchGlobalConfigQuery() {
  return client.GlobalConfigs().then(globalConfigsQuery => {
    const globalConfig = first(globalConfigsQuery.allGlobalConfig)
    if (globalConfig) {
      return globalConfig as GlobalConfig
    }

    throw new Error(
      `${API_RESPONSE_ERROR}. request at client.GlobalConfigs failed`,
    )
  })
}
