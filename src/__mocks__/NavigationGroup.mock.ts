import {build} from '@jackfranklin/test-data-bot'
import {buildNavigation} from './Navigations.mock'
import type {NavigationGroup} from '@generated/cms.types'

export const buildNavigationGroup = build<NavigationGroup>({
  fields: {
    __typename: 'NavigationGroup',
    navigation: buildNavigation(),
  },
})
