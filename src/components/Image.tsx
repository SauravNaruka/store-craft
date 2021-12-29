import * as React from 'react'
import NextjsImage, {ImageLoaderProps, ImageProps} from 'next/image'
import {AspectRatio} from '../types/interfaces'
import {makeImageUrl} from '@helpers/ImageURLBuilder'

type PropType = ImageProps & {
  aspectRatio: AspectRatio
}

export function sanityImageLoader(
  aspectRatio: AspectRatio,
  {src, width}: ImageLoaderProps,
): string {
  // `${src}?&fm=webp&fit=crop&crop=entropy&w=${width}&h=${height}`
  return makeImageUrl(src).width(width, aspectRatio).quality(75).url()
}

export default function Image({aspectRatio, ...rest}: PropType) {
  return (
    <NextjsImage
      {...rest}
      loader={props => sanityImageLoader(aspectRatio, {...props})}
    />
  )
}
