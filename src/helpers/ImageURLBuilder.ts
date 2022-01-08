import {AspectRatio, BasicType} from '../types/interfaces'
import {isBasicType} from '@helpers/types.helper'

type OptionKey = keyof typeof SANITY_OPTION_NAME_TO_URL_NAME_MAP
type Option = {[key in OptionKey]?: unknown}

export const SANITY_OPTION_NAME_TO_URL_NAME_MAP = {
  width: 'w',
  height: 'h',
  format: 'fm',
  download: 'dl',
  blur: 'blur',
  sharpen: 'sharp',
  invert: 'invert',
  orientation: 'or',
  minHeight: 'min-h',
  maxHeight: 'max-h',
  minWidth: 'min-w',
  maxWidth: 'max-w',
  quality: 'q',
  fit: 'fit',
  crop: 'crop',
  saturation: 'sat',
  auto: 'auto',
  dpr: 'dpr',
  pad: 'pad',
} as const

const FIXED_SANITY_PARAM = '&fm=webp&fit=crop&crop=entropy'
export function makeImageUrl(url: string) {
  return new ImageURLBuilder(url)
}

export class ImageURLBuilder {
  private baseUrl: string
  private aspectRatio?: AspectRatio
  private options: Option = {}

  constructor(url: string) {
    this.baseUrl = url
  }

  public width(width: number, aspectRatio?: AspectRatio) {
    if (aspectRatio) {
      const height = calculateHeightByWidthAndAspectRatio(width, aspectRatio)
      this.withOption('height', height)
    }

    this.withOption('width', width)
    return this
  }

  public height(height: number, aspectRatio?: AspectRatio) {
    if (aspectRatio) {
      const width = calculateWidthByHeightAndAspectRatio(height, aspectRatio)
      this.withOption('width', width)
    }

    this.withOption('height', height)
    return this
  }

  public quality(quality: number | undefined = 50) {
    this.withOption('quality', quality)
    return this
  }

  public url() {
    const params = this.convertOptionsToUrlParams()
    return this.baseUrl + '?' + params + FIXED_SANITY_PARAM
  }

  private withOption(key: OptionKey, value: unknown) {
    this.options[key] = value
  }

  private convertOptionsToUrlParams(): string {
    const params: string[] = []
    for (const key in SANITY_OPTION_NAME_TO_URL_NAME_MAP) {
      const urlParam = this.convertOptionToUrlParam(key)
      if (urlParam) {
        params.push(urlParam)
      }
    }
    return params.length > 0 ? params.join('&') : ''
  }

  private convertOptionToUrlParam(key: string): string | null {
    if (isSanityOptionKey(key) && this.options[key]) {
      const specName = this.rewriteSpecName(key)
      const value = this.encodedValue(key)
      return this.getUrlString(specName, value)
    }
    return null
  }

  private rewriteSpecName = (key: OptionKey) => {
    return SANITY_OPTION_NAME_TO_URL_NAME_MAP[key]
  }

  private encodedValue(key: OptionKey) {
    const value = this.options[key]

    if (isBasicType(value)) {
      return encodeURIComponent(value)
    } else {
      return null
    }
  }

  private getUrlString(
    specName: string,
    value: BasicType | null,
  ): string | null {
    if (value) {
      return `${specName}=${value}`
    } else {
      return null
    }
  }
}

export function isSanityOptionKey(key: string): key is OptionKey {
  return SANITY_OPTION_NAME_TO_URL_NAME_MAP.hasOwnProperty(key)
}

export function calculateHeightByWidthAndAspectRatio(
  imageWidth: number,
  {width, height}: AspectRatio,
) {
  return Math.round((imageWidth * height) / width)
}

export function calculateWidthByHeightAndAspectRatio(
  imageHeight: number,
  {width, height}: AspectRatio,
) {
  return Math.round((imageHeight * width) / height)
}
