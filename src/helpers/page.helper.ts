import {Page} from '@generated/cms.types'
import {NavigationalData} from '@LocalTypes/interfaces'

export function isPage(object?: unknown): object is Page {
  return (object as Page)?.__typename === 'Page'
}

export function getPageNavigationalData(page: Page): NavigationalData | null {
  if (page.title && page.slug?.current) {
    return {
      title: page.title,
      subtitle: undefined,
      slug: page.slug.current,
      image: undefined,
    }
  }

  return null
}
