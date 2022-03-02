/* eslint-disable @typescript-eslint/no-non-null-assertion */
import faker from 'faker'
import {buildNavigationWithPageLinks} from './Navigations.mock'
import {buildSocialLinks} from './SocialLinks.mock'
import type {FooterQuery, Navigation} from '@generated/cms.types'

export const NUMBER_OF_NAVIGATIONI_GROUP = 2

export function buildFooterResponse(): FooterQuery {
  return {
    Footer: {
      phone: faker.random.word(),
      email: faker.internet.email(),
      social: buildSocialLinks(),
      navigations: Array(NUMBER_OF_NAVIGATIONI_GROUP)
        .fill(undefined)
        .map(() => buildNavigationWithPageLinks())!,
    },
  }
}
