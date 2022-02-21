import client from '@api/clientSainty'
import * as logger from '@helpers/logger'
import {API_RESPONSE_ERROR} from '@constants/errors.constants'
import type {GlobalConfig} from '@generated/cms.types'

const configID = process?.env?.SANITY_STUDIO_GLOBAL_CONFIG_ID ?? ''

export async function fetchGlobalConfig(): Promise<GlobalConfig> {
  try {
    console.log('-----------Starting fetchGlobalConfigQuery-----------')
    const navigation = await fetchGlobalConfigQuery()
    return navigation
  } catch (error) {
    logger.error(error)
    throw error
  }
}

function fetchGlobalConfigQuery() {
  return client.GlobalConfig({id: configID}).then(globalConfigsQuery => {
    console.log('----------- fetchGlobalConfigQuery sucess-----------')
    console.log(`----------- configID = ${configID}-----------`)
    const value = JSON.stringify(globalConfigsQuery)
    console.log(` - values ${value}`)
    Object.keys(globalConfigsQuery).forEach((key: string, index) => {
      console.log(` -- keys ${index}: key=${key}`)
    })
    console.log('----------- fetchGlobalConfigQuery value ends-----------')
    const globalConfig = globalConfigsQuery.GlobalConfig
    console.log(`-----------globalConfig: ${globalConfig}-----------`)
    if (globalConfig) {
      return globalConfig as GlobalConfig
    }
    console.log(`-----------Not a globalConfig-----------`)

    throw new Error(
      `${API_RESPONSE_ERROR}. request at client.GlobalConfigs failed`,
    )
  })
}
