import first from 'lodash/first.js'
import client from '@api/cmsClient'
import * as logger from '@helpers/logger'
import {UnknownDataError} from '@helpers/error.helper'

import type {Navigation, NavigationsQuery} from '@generated/cms.types'

type NavigationsQueryWithSlug = NavigationsQuery & {
  slug: string
}
export async function fetchNavigationById(
  navigationID: string,
): Promise<Navigation> {
  try {
    const navigations = await client.Navigations({slug: navigationID})

    return getFirstNavigation({
      ...navigations,
      slug: navigationID,
    })
  } catch (error) {
    logger.error(error)
    throw error
  }
}

function getFirstNavigation({
  allNavigation,
  slug,
}: NavigationsQueryWithSlug): Navigation {
  const navigation = first(allNavigation)
  if (navigation) {
    return navigation as Navigation
  }

  throw new UnknownDataError(
    `Uknown response from the request client.Navigations for variable ${slug}`,
  )
}
