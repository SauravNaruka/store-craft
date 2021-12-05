import first from 'lodash/first.js'
import client from '@api/cmsClient'
import * as logger from '@helpers/logger'
import {UnknownDataError} from '@helpers/error.helper'
import {PRODUCT_NAVIGATION} from '@constants/navigation.constants'
import type {NavigationItem, NavigationsQuery} from '@generated/cms.types'

export async function fetchNavigationItems(): Promise<NavigationItem[]> {
  try {
    const navigations = await client.Navigations({slug: PRODUCT_NAVIGATION})

    return getNavigationItemsFromNavigations(navigations)
  } catch (error) {
    logger.error(error)
    throw error
  }
}

function getNavigationItemsFromNavigations({
  allNavigation,
}: NavigationsQuery): NavigationItem[] {
  const navigation = first(allNavigation)

  if (navigation && navigation.items) {
    const navigationItems: NavigationItem[] = navigation.items
      .filter(Boolean)
      .map(item => item as NavigationItem)
    return navigationItems
  }

  throw new UnknownDataError(
    `Uknown response from the request client.Navigations for variable ${PRODUCT_NAVIGATION}`,
  )
}
