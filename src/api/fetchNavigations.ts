import first from 'lodash/first.js'
import client from '@api/cmsClient'
import * as logger from '@helpers/logger'
import {UnknownDataError} from '@helpers/error.helper'

import type {NavigationItem, NavigationsQuery} from '@generated/cms.types'

type NavigationsQueryWithSlug = NavigationsQuery & {
  slug: string
}
export async function fetchNavigationItems(
  navigationID: string,
): Promise<NavigationItem[]> {
  try {
    const navigations = await client.Navigations({slug: navigationID})

    return getNavigationItemsFromNavigations({
      ...navigations,
      slug: navigationID,
    })
  } catch (error) {
    logger.error(error)
    throw error
  }
}

function getNavigationItemsFromNavigations({
  allNavigation,
  slug,
}: NavigationsQueryWithSlug): NavigationItem[] {
  const navigation = first(allNavigation)

  if (navigation && navigation.items) {
    const navigationItems: NavigationItem[] = navigation.items
      .filter(Boolean)
      .map(item => item as NavigationItem)
    return navigationItems
  }

  throw new UnknownDataError(
    `Uknown response from the request client.Navigations for variable ${slug}`,
  )
}
