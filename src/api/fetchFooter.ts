import client from '@api/clientSainty'
import * as logger from '@helpers/logger'
import {API_RESPONSE_ERROR} from '@constants/errors.constants'
import type {Footer, FooterQueryVariables} from '@generated/cms.types'

export async function fetchFooter(args: FooterQueryVariables): Promise<Footer> {
  try {
    const navigation = await fetchFooterQuery(args)
    return navigation
  } catch (error) {
    logger.error(error)
    throw error
  }
}

function fetchFooterQuery({id}: FooterQueryVariables) {
  return client.Footer({id}).then(footerQuery => {
    const footer = footerQuery.Footer
    if (footerQuery.Footer) {
      return footer as Footer
    }

    throw new Error(
      `${API_RESPONSE_ERROR}. request at client.Footer failed for variable ${id}`,
    )
  })
}
