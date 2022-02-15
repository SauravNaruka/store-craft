import type {ImageType} from '@LocalTypes/interfaces'
import type {ImageBlock} from '@generated/cms.types'

export function isValidImageBlock(image?: ImageBlock | null) {
  const hasImageUrl = image?.asset?.url ? true : false
  const hasImageCaption = image?.caption ? true : false
  return hasImageUrl && hasImageCaption
}

export function isValidImageType(image?: unknown): image is ImageType {
  if (image) {
    const imageSource = image as ImageType
    return !!imageSource.altText && !!imageSource.url
  }
  return false
}
