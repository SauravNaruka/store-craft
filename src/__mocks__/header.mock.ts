import {buildNavigationWithTwoLevelOfNavigation} from './Navigations.mock'
import type {HeaderQuery} from '@generated/cms.types'

export const NUMBER_OF_NAVIGATIONI_GROUP = 2

export function buildHeaderResponse(): HeaderQuery {
  return {
    Header: {
      navigations: Array(NUMBER_OF_NAVIGATIONI_GROUP)
        .fill(undefined)
        .map(() => buildNavigationWithTwoLevelOfNavigation()),
    },
  }
}
