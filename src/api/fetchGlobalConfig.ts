import client from '@api/clientSainty'
import * as logger from '@helpers/logger'
import {API_RESPONSE_ERROR} from '@constants/errors.constants'
import type {GlobalConfig} from '@generated/cms.types'

const configID = process?.env?.SANITY_STUDIO_GLOBAL_CONFIG_ID ?? ''

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
  return client.GlobalConfig({id: configID}).then(globalConfigsQuery => {
    const globalConfig = globalConfigsQuery.GlobalConfig

    if (globalConfig) {
      return globalConfig as GlobalConfig
    }

    throw new Error(
      `${API_RESPONSE_ERROR}. request at client.GlobalConfigs failed`,
    )
  })
}
