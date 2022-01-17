import first from 'lodash/first.js'
import client from '@api/clientSainty'
import * as logger from '@helpers/logger'
import {API_RESPONSE_ERROR} from '@constants/errors.constants'
import type {Navigation, NavigationsQueryVariables} from '@generated/cms.types'

export async function fetchNavigation(id: string): Promise<Navigation> {
  try {
    const navigation = await fetchNavigationQuery({slug: id})
    return navigation
  } catch (error) {
    logger.error(error)
    throw error
  }
}

function fetchNavigationQuery({slug}: NavigationsQueryVariables) {
  return client.Navigations({slug}).then(navigationsQuery => {
    const navigation = first(navigationsQuery.allNavigation)
    if (navigation) {
      return navigation as Navigation
    }

    throw new Error(
      `${API_RESPONSE_ERROR}. request at client.Navigations for variable ${slug}`,
    )
  })
}
