import * as React from 'react'
import cx from 'classnames'
import ChevronLeftIcon from '@components/icons/ChevronLeftIcon'
import ChevronRightIcon from '@components/icons/ChevronRightIcon'
import {isNavigation} from '@helpers/navigation.helper'
import type {
  LinkExternalOrLinkInternalOrNavigation,
  Navigation,
} from '@generated/cms.types'
import type {Maybe, Valueof} from '@LocalTypes/interfaces'
import menuStyles from '@styles/menu.module.css'
import {isInternalLink} from '@helpers/LinkInternal.helper'
import {isShopifyCollection} from '@helpers/collection.helper'

const PANE_PLACEMENT_OPTION = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
} as const

type PanePlacement = Valueof<typeof PANE_PLACEMENT_OPTION>

type CallbackProp = {
  links: Maybe<LinkExternalOrLinkInternalOrNavigation>[]
  parentNavigation: Navigation | null
  activePaneID: string | null
  setActivePaneID: (arg0: string | null) => void
}
type PropType = CallbackProp & {
  children?: (props: CallbackProp) => React.ReactNode
}

export function NavigationDrawerPane({
  links,
  parentNavigation,
  activePaneID,
  setActivePaneID,
  children: render,
}: PropType) {
  const [isChildPaneActive, setChildPaneActiveStatus] = React.useState(false)
  const panePlacement = getPanePlacement(
    parentNavigation,
    activePaneID,
    isChildPaneActive,
  )

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
      {parentNavigation && (
        <li>
          <button
            className={menuStyles.mobileMenuBackButton}
            onClick={() => setActivePaneID(parentNavigation?._id ?? null)}
          >
            <ChevronLeftIcon className={menuStyles.mobileMenuBackButtonIcon} />
            <span>{parentNavigation.title}</span>
          </button>
        </li>
      )}
      {links.map((link, index) => {
        if (isNavigation(link)) {
          const buttonKey = link?._id ?? `${index}`
          return (
            <li key={buttonKey}>
              <button onClick={() => setActivePaneID(buttonKey)}>
                Bedroom
                <ChevronRightIcon />
              </button>
              {render &&
                render({
                  links: link.items ?? [],
                  parentNavigation: link,
                  activePaneID,
                  setActivePaneID,
                })}
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
  navigation: Navigation | null,
  activePaneID: string | null,
  isChildPaneActive: boolean,
): PanePlacement {
  if (isChildPaneActive) {
    return PANE_PLACEMENT_OPTION.LEFT
  } else if (
    (!activePaneID && !navigation) ||
    navigation?._id === activePaneID
  ) {
    return PANE_PLACEMENT_OPTION.CENTER
  } else {
    return PANE_PLACEMENT_OPTION.RIGHT
  }
}
