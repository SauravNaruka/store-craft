import client from '@api/clientSainty'
import * as logger from '@helpers/logger'
import {getFooterID, getHeaderID, getTheme} from '@helpers/globalConfig.helper'
import {fetchFooter} from '@api/fetchFooter'
import {fetchHeader} from '@api/fetchHeader'
import {API_RESPONSE_ERROR} from '@constants/errors.constants'
import type {GlobalConfig} from '@generated/cms.types'

const configID = process?.env?.SANITY_STUDIO_GLOBAL_CONFIG_ID ?? ''

export async function fetchCommonNavigation() {
  const globalConfig = await fetchGlobalConfig()
  const theme = getTheme(globalConfig)
  const footerID = getFooterID(theme)
  const headerID = getHeaderID(theme)

  const [footer, header] = await Promise.all([
    fetchFooter({id: footerID}),
    fetchHeader({id: headerID}),
  ])

  return {
    header,
    footer,
  }
}

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
