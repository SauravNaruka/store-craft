import {graphql} from 'msw'
import {build, fake} from '@jackfranklin/test-data-bot'
import {buildNavigationResponse} from './fetchNavigations.mock'
import {buildSocialLinks} from './SocialLinks.mock'
import type {FooterQuery, Navigation} from '@generated/cms.types'

const NUMBER_OF_FOOTER_NAVIGATIONITEMS = 3

export const getFooter = graphql.query('Footer', (req, res, ctx) => {
  return res(ctx.data(buildFooterResponse()))
})

export const buildFooterResponse = build<FooterQuery>({
  fields: {
    Footer: {
      phone: fake(f => f.random.word()),
      email: fake(f => f.internet.email()),
      social: buildSocialLinks(),
      navigations: [],
    },
  },
  postBuild: footerQuery => {
    if (footerQuery?.Footer?.navigations) {
      footerQuery.Footer.navigations = Array(NUMBER_OF_FOOTER_NAVIGATIONITEMS)
        .fill(undefined)
        .map(() => {
          return {
            ...buildNavigationResponse().allNavigation[0],
            image: null,
          } as Navigation
        })
    }
    return footerQuery
  },
})
