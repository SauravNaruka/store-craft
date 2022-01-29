import {graphql} from 'msw'
import {build} from '@jackfranklin/test-data-bot'
import type {FooterQuery, Navigation} from '@generated/cms.types'
import {buildNavigationResponse} from './fetchNavigations.mock'

const NUMBER_OF_FOOTER_NAVIGATIONITEMS = 3

export const getFooter = graphql.query('Footer', (req, res, ctx) => {
  return res(ctx.data(buildFooterResponse()))
})

export const buildFooterResponse = build<FooterQuery>({
  fields: {
    Footer: {navigations: []},
  },
  postBuild: footerQuery => {
    if (footerQuery?.Footer?.navigations) {
      footerQuery.Footer.navigations = Array(NUMBER_OF_FOOTER_NAVIGATIONITEMS)
        .fill(undefined)
        .map(() => buildNavigationResponse().allNavigation[0] as Navigation)
    }
    return footerQuery
  },
})
