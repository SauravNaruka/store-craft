import {LinkInternal} from '@generated/cms.types'

export function isInternalLink(object?: unknown): object is LinkInternal {
  return (object as LinkInternal)?.__typename === 'LinkInternal'
}
