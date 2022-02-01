import type {ImageBlock} from '@generated/cms.types'

export function isValidImageBlock(image?: ImageBlock | null) {
  const hasImageUrl = image?.asset?.url ? true : false
  const hasImageCaption = image?.caption ? true : false
  return hasImageUrl && hasImageCaption
}
