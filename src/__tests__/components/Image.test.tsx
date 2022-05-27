import {ImageLoaderProps as NextImageLoaderProps} from 'next/image'
import {imageLoader, ImageLoaderProps} from '@components/microUI/Image'
import {ImageType} from '@LocalTypes/interfaces'
import {buildImage} from 'src/__mocks__/Image.mock'

function buildImageLoaderProps(
  url: string,
  image?: ImageType,
): ImageLoaderProps {
  return {
    aspectRatio: {width: 4, height: 3},
    image: image ? image : {url, altText: 'test'},
  }
}

function buildNextImageLoaderProps(
  props: Partial<NextImageLoaderProps> = {},
): NextImageLoaderProps {
  return {
    src: 'http://sanity',
    width: 200,
    ...props,
  }
}

const sizes = [96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840]

describe('Image component ', () => {
  test('imageLoader handle sanity image', () => {
    const imageProp = buildImageLoaderProps('http://sanity')

    const nextImageLoaderProps = buildNextImageLoaderProps({
      src: 'http://sanity',
    })

    const sanityImageURL = imageLoader(imageProp, nextImageLoaderProps)
    expect(sanityImageURL).toMatch(/sanity/i)
    expect(sanityImageURL).toMatch(/200/i)
  })

  test('imageLoader handle shopify image', () => {
    const imageProp = buildImageLoaderProps('http://shopify')

    const nextImageLoaderProps = buildNextImageLoaderProps({
      src: 'http://shopify',
    })

    const sanityImageURL = imageLoader(imageProp, nextImageLoaderProps)
    expect(sanityImageURL).toMatch(/shopify/i)
  })

  test('shopifyImageLoader return right url for defined sizes', () => {
    const image = buildImage() as ImageType
    const url = 'http://shopify'

    const imageProp = buildImageLoaderProps(url, image)

    const nextImageLoaderProps = buildNextImageLoaderProps({
      src: url,
    })

    sizes.forEach(width => {
      expect(
        imageLoader(imageProp, {
          ...nextImageLoaderProps,
          width,
        }),
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      ).toMatch(image[`w${width}`]! ?? 'Non-matching')
    })
  })

  test('shopifyImageLoader return right default url when missing size', () => {
    const url = 'http://shopify'
    const imageProp = buildImageLoaderProps(url, {url, altText: 'alt text'})

    const nextImageLoaderProps = buildNextImageLoaderProps({
      src: url,
    })

    sizes.forEach(width => {
      expect(
        imageLoader(imageProp, {
          ...nextImageLoaderProps,
          width,
        }),
      ).toMatch(url)
    })
  })
})
