import faker from 'faker'
import {isUrl} from 'src/helpers/url.helpers'

describe('URL helper tests', () => {
  test('isUrl helpers method', () => {
    expect(isUrl(faker.internet.url())).toBeTruthy()
    expect(isUrl('/something')).toBeFalsy()
  })
})
