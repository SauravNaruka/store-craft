import {build, fake} from '@jackfranklin/test-data-bot'
import type {SocialLinks} from '@generated/cms.types'

export const buildSocialLinks = build<SocialLinks>({
  fields: {
    facebook: fake(f => f.internet.url()),
    instagram: fake(f => f.internet.url()),
    pinterest: fake(f => f.internet.url()),
    twitter: fake(f => f.internet.url()),
  },
})
