import {graphql} from 'msw'
import {buildAllNavigation} from './Navigations.mock'
import type {Navigation} from '@generated/cms.types'
import first from 'lodash/first.js'

export const getNavigationsHandler = graphql.query(
  'Navigations',
  (req, res, ctx) => {
    return res(ctx.data(buildAllNavigation()))
  },
)

export function buildAndGetFirstNaigation() {
  const navigations = buildAllNavigation()
  return first(navigations.allNavigation) as Navigation
}
