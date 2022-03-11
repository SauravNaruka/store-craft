import * as React from 'react'
import cx from 'classnames'
import ChevronLeftIcon from '@components/icons/ChevronLeftIcon'
import ChevronRightIcon from '@components/icons/ChevronRightIcon'
import {isShopifyCollection} from '@helpers/collection.helper'
import {isInternalLink} from '@helpers/LinkInternal.helper'
import {isNavigation} from '@helpers/navigation.helper'
import type {Maybe, Valueof} from '@LocalTypes/interfaces'
import type {
  LinkExternalOrLinkInternalOrNavigation,
  Navigation,
} from '@generated/cms.types'
import menuStyles from '@styles/menu.module.css'

export const PANE_PLACEMENT_OPTION = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
} as const

export type PanePlacement = Valueof<typeof PANE_PLACEMENT_OPTION>

type PropType = {
  navigation: Navigation | null
  links: Maybe<LinkExternalOrLinkInternalOrNavigation>[]
  parentID: Maybe<string>
  activePaneID: string | null
  setActivePaneID: (arg0: string | null) => void
}

export function NavigationDrawerPane({
  navigation,
  links,
  parentID,
  activePaneID,
  setActivePaneID,
}: PropType) {
  const [isChildPaneActive, setChildPaneActiveStatus] = React.useState(false)
  const panePlacement = getPanePlacement(
    navigation?._id ?? null,
    activePaneID,
    isChildPaneActive,
  )

  React.useEffect(() => {
    if (!activePaneID || activePaneID === navigation?._id) {
      setChildPaneActiveStatus(false)
    }
  }, [activePaneID, navigation])

  return (
    <ul
      className={cx({
        [menuStyles.mobileMenuPane]: true,
        [menuStyles.mobileMenuPaneLeft]:
          panePlacement === PANE_PLACEMENT_OPTION.LEFT,

        [menuStyles.mobileMenuPaneCenter]:
          panePlacement === PANE_PLACEMENT_OPTION.CENTER,

        [menuStyles.mobileMenuPaneRight]:
          panePlacement === PANE_PLACEMENT_OPTION.RIGHT,
      })}
    >
      {navigation && (
        <li>
          <button
            className={menuStyles.mobileMenuBackButton}
            onClick={() => setActivePaneID(parentID ?? null)}
          >
            <ChevronLeftIcon className={menuStyles.mobileMenuBackButtonIcon} />
            <span>{navigation.title}</span>
          </button>
        </li>
      )}
      {links?.map((link, index) => {
        if (isNavigation(link)) {
          const buttonKey = link?._id ?? `${index}`
          return (
            <li key={buttonKey}>
              <button
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
                className="block py-2 px-4 text-sm hover:bg-grey-200"
              >
                {link.reference.title}
              </a>
            </li>
          )
        }
      })}
    </ul>
  )
}

export default NavigationDrawerPane

function getPanePlacement(
  paneID: Maybe<string>,
  activePaneID: Maybe<string>,
  isChildPaneActive: boolean,
): PanePlacement {
  if (isChildPaneActive) {
    return PANE_PLACEMENT_OPTION.LEFT
  } else if (paneID === activePaneID) {
    return PANE_PLACEMENT_OPTION.CENTER
  } else {
    return PANE_PLACEMENT_OPTION.RIGHT
  }
}
