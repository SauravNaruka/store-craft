import client from '@api/clientSainty'
import * as logger from '@helpers/logger'
import {API_RESPONSE_ERROR} from '@constants/errors.constants'
import type {
  Footer,
  FooterQueryVariables,
  Navigation,
} from '@generated/cms.types'

export async function fetchFooterNavigation(
  args: FooterQueryVariables,
): Promise<Navigation[]> {
  try {
    const footer = await fetchFooter(args)
    const navigations = footer?.navigations ?? null
    if (navigations) {
      return navigations as Navigation[]
    }

    throw new Error('No navigation for footer')
  } catch (error) {
    logger.error(error)
    throw error
  }
}

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
