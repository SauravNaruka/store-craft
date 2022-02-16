import {build, fake} from '@jackfranklin/test-data-bot'
import {buildNavigationGroup} from './NavigationGroup.mock'
import {buildSocialLinks} from './SocialLinks.mock'
import type {FooterQuery} from '@generated/cms.types'

export const buildFooterResponse = build<FooterQuery>({
  fields: {
    Footer: {
      phone: fake(f => f.random.word()),
      email: fake(f => f.internet.email()),
      social: buildSocialLinks(),
      navigations: [buildNavigationGroup()],
    },
  },
})
