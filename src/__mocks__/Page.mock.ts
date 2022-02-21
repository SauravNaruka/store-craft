import faker from 'faker'
import type {Page} from '@generated/cms.types'

export function buildPage(): Page {
  return {
    __typename: 'Page',
    title: faker.random.words(),
    slug: {current: faker.random.word()},
  }
}
