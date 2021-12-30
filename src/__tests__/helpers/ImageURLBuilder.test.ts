import faker from 'faker'
import {makeImageUrl, ImageURLBuilder} from '@helpers/ImageURLBuilder'
import {sanityImageLoader} from '@components/Image'
import type {AspectRatio} from '../../types/interfaces'

describe('Tests for image url builder', () => {
  test('factory method return the instance of the image url builder class', () => {
    expect(makeImageUrl(faker.internet.url())).toBeInstanceOf(ImageURLBuilder)
  })

  test('image url builder return a url string', () => {
    const imageUrl = faker.internet.url()
    expect(makeImageUrl(imageUrl).url()).toMatch(new RegExp(imageUrl))
  })

  test('image url builder return a url string with width and quality parameters', () => {
    const imageUrl = faker.internet.url()
    const imageQuality = faker.datatype.number(100)
    const imageWidth = faker.datatype.number(2000)
    const imageHeight = faker.datatype.number(2000)

    const finalImageUrl = makeImageUrl(imageUrl)
      .width(imageWidth)
      .height(imageHeight)
      .quality(imageQuality)
      .url()

    expect(finalImageUrl).toMatch(new RegExp(`w=${imageWidth}`))
    expect(finalImageUrl).toMatch(new RegExp(`h=${imageHeight}`))
    expect(finalImageUrl).toMatch(new RegExp(`q=${imageQuality}`))
  })

  test('aspect ratio calculation', () => {
    const imageUrl = faker.internet.url()
    const aspectRatio: AspectRatio = {width: 16, height: 9}
    const baseSize = faker.datatype.number(2000)
    const expectedWidth = baseSize * aspectRatio.width
    const expectedHeight = baseSize * aspectRatio.height

    expect(
      makeImageUrl(imageUrl).width(expectedWidth, aspectRatio).url(),
    ).toMatch(new RegExp(`h=${expectedHeight}`))

    expect(
      makeImageUrl(imageUrl).height(expectedHeight, aspectRatio).url(),
    ).toMatch(new RegExp(`w=${expectedWidth}`))
  })

  test('wrong values for image builder', () => {
    const imageUrl = faker.internet.url()
    expect(
      makeImageUrl(imageUrl)
        .width({} as number)
        .url(),
    ).not.toMatch(/w=/i)

    expect(makeImageUrl(imageUrl).quality(undefined).url()).not.toMatch(/q=/i)
  })

  test('sanityImageLoader function', () => {
    const imageUrl = faker.internet.url()
    const imageWidth = faker.datatype.number(2000)
    expect(
      sanityImageLoader(
        {width: 16, height: 9},
        {src: imageUrl, width: imageWidth},
      ),
    ).toMatch(new RegExp(`w=${imageWidth}`))
  })
})
