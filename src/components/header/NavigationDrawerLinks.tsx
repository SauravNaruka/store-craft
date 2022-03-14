import * as React from 'react'
import ChevronRightIcon from '@components/icons/ChevronRightIcon'
import {isShopifyCollection} from '@helpers/collection.helper'
import {isInternalLink} from '@helpers/LinkInternal.helper'
import {isNavigation} from '@helpers/navigation.helper'
import type {Maybe} from '@LocalTypes/interfaces'
import type {LinkExternalOrLinkInternalOrNavigation} from '@generated/cms.types'
import menuStyles from '@styles/menu.module.css'

type PropType = {
  links: Maybe<LinkExternalOrLinkInternalOrNavigation>[]
  setActivePaneID: (arg0: string | null) => void
  setChildPaneActiveStatus: (arg0: boolean) => void
}

export function NavigationDrawerLinks({
  links,
  setActivePaneID,
  setChildPaneActiveStatus,
}: PropType) {
  if (!links) {
    return null
  }

  return (
    <>
      {links.map((link, index) => {
        if (isNavigation(link)) {
          const buttonKey = link?._id ?? `${index}`
          return (
            <li key={buttonKey}>
              <button
                className={menuStyles.mobileMenuButton}
                onClick={() => {
                  setActivePaneID(buttonKey)
                  setChildPaneActiveStatus(true)
                }}
              >
                {link.title}
                <ChevronRightIcon />
              </button>
            </li>
          )
        } else if (
          isInternalLink(link) &&
          isShopifyCollection(link.reference)
        ) {
          return (
            <li>
              <a
                href={link.reference.handle ?? '#'}
                className={`${menuStyles.mobileMenuLink} block py-2 px-4 text-sm hover:bg-grey-200`}
              >
                {link.reference.title}
              </a>
            </li>
          )
        }
      })}
    </>
  )
}
