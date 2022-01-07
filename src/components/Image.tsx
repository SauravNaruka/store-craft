import * as React from 'react'
import NextjsImage, {ImageLoaderProps, ImageProps} from 'next/image'
import {AspectRatio} from '../types/interfaces'
import {makeImageUrl} from '@helpers/ImageURLBuilder'

export type ImageComponentProps = ImageProps & {
  aspectRatio: AspectRatio
}

export function sanityImageLoader(
  aspectRatio: AspectRatio,
  {src, width, quality}: ImageLoaderProps,
): string {
  return makeImageUrl(src).width(width, aspectRatio).quality(quality).url()
}

export default function Image({aspectRatio, ...rest}: ImageComponentProps) {
  return (
    <NextjsImage
      {...rest}
      loader={props => sanityImageLoader(aspectRatio, {...props})}
    />
  )
}
