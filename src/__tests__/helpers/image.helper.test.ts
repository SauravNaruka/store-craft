import faker from 'faker'
import {isValidImageBlock} from '@helpers/image.helper'

describe('Tests helper functions for image', () => {
  test('isValidImageBlock returns false when caption or image url is missing', () => {
    expect(isValidImageBlock(null)).toBeFalsy()

    const ImageBlock = {
      asset: {
        url: faker.internet.url(),
      },
      caption: faker.random.words(),
    }
    expect(isValidImageBlock(ImageBlock)).toBeTruthy()

    const ImageBlock2 = {
      asset: null,
      caption: null,
    }
    expect(isValidImageBlock(ImageBlock2)).toBeFalsy()
  })
})
