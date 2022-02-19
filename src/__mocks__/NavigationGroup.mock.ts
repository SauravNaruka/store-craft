import {buildNavigationWithPageLinks} from './Navigations.mock'
import type {NavigationGroup} from '@generated/cms.types'

export function buildNavigationGroup(): NavigationGroup {
  return {
    __typename: 'NavigationGroup',
    navigation: buildNavigationWithPageLinks(),
  }
}
