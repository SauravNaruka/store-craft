import client from '@api/clientSainty'
import * as logger from '@helpers/logger'
import {API_RESPONSE_ERROR} from '@constants/errors.constants'
import type {
  Header,
  HeaderQuery,
  HeaderQueryVariables,
} from '@generated/cms.types'

export async function fetchHeader(args: HeaderQueryVariables): Promise<Header> {
  try {
    const header = await client.Header(args).then(getHeaderFromHeaderQuery)
    return header
  } catch (error) {
    logger.error(error)
    throw error
  }
}

function getHeaderFromHeaderQuery(headerQuery: HeaderQuery) {
  const header = headerQuery.Header
  if (header) {
    return header as Header
  }

  throw new Error(`${API_RESPONSE_ERROR}. request at client.Header failed `)
}
