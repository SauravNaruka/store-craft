import * as React from 'react'
import NextjsImage, {
  ImageLoaderProps as NextImageLoaderProps,
  ImageProps,
} from 'next/image'
import {makeImageUrl} from '@helpers/ImageURLBuilder'
import type {AspectRatio, ImageType} from '@LocalTypes/interfaces'

export type ImageLoaderProps = {
  aspectRatio: AspectRatio
  image: ImageType
}
export type ImageComponentProps = Partial<ImageProps> & ImageLoaderProps

export default function Image({
  aspectRatio,
  image,
  ...rest
}: ImageComponentProps) {
  return (
    <NextjsImage
      src={image.url}
      alt={image.altText}
      {...rest}
      loader={props => imageLoader({aspectRatio, image}, {...props})}
    />
  )
}

export function imageLoader(
  imageProps: ImageLoaderProps,
  nextImageLoaderProps: NextImageLoaderProps,
): string {
  if (nextImageLoaderProps.src.includes('sanity')) {
    return sanityImageLoader(imageProps, nextImageLoaderProps)
  } else {
    return shopifyImageLoader(imageProps, nextImageLoaderProps)
  }
}

export function sanityImageLoader(
  {aspectRatio}: ImageLoaderProps,
  {src, width, quality}: NextImageLoaderProps,
): string {
  return makeImageUrl(src).width(width, aspectRatio).quality(quality).url()
}

export function shopifyImageLoader(
  {image}: ImageLoaderProps,
  {src, width}: NextImageLoaderProps,
): string {
  switch (!!width) {
    case width < 97:
      return image.w96 ?? src
    case width < 129:
      return image.w128 ?? src
    case width < 257:
      return image.w256 ?? src
    case width < 385:
      return image.w384 ?? src
    case width < 641:
      return image.w640 ?? src
    case width < 751:
      return image.w750 ?? src
    case width < 829:
      return image.w828 ?? src
    case width < 1081:
      return image.w1080 ?? src
    case width < 1921:
      return image.w1920 ?? src
    case width < 2049:
      return image.w2048 ?? src
    case width < 3841:
      return image.w3840 ?? src
    default:
      return src
  }
}
