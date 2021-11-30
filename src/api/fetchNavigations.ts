import client from '@api/cmsClient'
import {convertGraphqlConnectionTypeToArray} from '@helpers/graphqlList.helper'

export function fetchNavigations(): Promise<unknown> {
  return client.Navigations().then(data => {
    console.log('------------')
    console.log('Data from cms' + data)
  })
}
