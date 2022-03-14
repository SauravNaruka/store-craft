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
  if (width >= 3840 && image.w3840) {
    return image.w3840
  } else if (width >= 2048 && image.w2048) {
    return image.w2048
  } else if (width >= 1920 && image.w1920) {
    return image.w1920
  } else if (width >= 1200 && image.w1200) {
    return image.w1200
  } else if (width >= 1080 && image.w1080) {
    return image.w1080
  } else if (width >= 828 && image.w828) {
    return image.w828
  } else if (width >= 750 && image.w750) {
    return image.w750
  } else if (width >= 640 && image.w640) {
    return image.w640
  } else if (width >= 384 && image.w384) {
    return image.w384
  } else if (width >= 256 && image.w256) {
    return image.w256
  } else if (width >= 128 && image.w128) {
    return image.w128
  } else if (width < 128 && image.w96) {
    return image.w96
  } else {
    return src
  }
}
