import * as React from 'react'
import cx from 'classnames'
import isArray from 'lodash/isArray'
import NavigationDrawerPane from './NavigationDrawerPane'
import {isNavigation} from '@helpers/navigation.helper'
import type {Maybe} from '@LocalTypes/interfaces'
import type {
  Navigation,
  LinkExternalOrLinkInternalOrNavigation,
} from '@generated/cms.types'
import menuStyles from '@styles/menu.module.css'

type LinkedNavigation = {
  link: Navigation | Maybe<LinkExternalOrLinkInternalOrNavigation>[]
  parentID: Maybe<string>
}

type PropType = {
  navigations: Maybe<Navigation>[]
  id: string
  visible: boolean
}

export function NavigationDrawer({navigations, id, visible}: PropType) {
  const [activePaneID, setActivePaneID] = React.useState<string | null>(null)
  const linkedNavigation = React.useMemo(
    () => convertLinksToLinkedNavigations(navigations),
    [navigations],
  )
  return (
    <div
      id={id}
      className={cx({
        'md:hidden': true,
        [menuStyles.mobileMenu]: true,
        [menuStyles.mobileMenuOpen]: visible,
      })}
    >
      <div className={menuStyles.mobileMenuPaneWraper}>
        {linkedNavigation.map(({link, parentID}, index) => {
          const [navigation, items] = getNavigationAndItemsFromLink(link)

          return (
            <NavigationDrawerPane
              key={navigation?._id ?? index}
              links={items ?? []}
              navigation={navigation}
              parentID={parentID}
              activePaneID={activePaneID}
              setActivePaneID={setActivePaneID}
            />
          )
        })}
      </div>
    </div>
  )
}

export default NavigationDrawer

function convertLinksToLinkedNavigations(
  navigations: Maybe<LinkExternalOrLinkInternalOrNavigation>[],
): LinkedNavigation[] {
  let results: LinkedNavigation[] = []

  if (navigations || isArray(navigations)) {
    navigations.forEach(link => {
      if (isNavigation(link)) {
        const navigationList = getLinkedNavigationsFromNavigation({
          link,
          parentID: null,
        })
        results = [...results, ...navigationList]
      }
    })
  }

  return [{parentID: null, link: navigations}, ...results]
}

function getLinkedNavigationsFromNavigation({
  link,
  parentID,
}: LinkedNavigation): LinkedNavigation[] {
  let results: LinkedNavigation[] = []

  if (isNavigation(link)) {
    link.items?.forEach(item => {
      if (isNavigation(item)) {
        const navigationList = getLinkedNavigationsFromNavigation({
          link: item,
          parentID: link?._id ?? null,
        })
        results = [...results, ...navigationList]
      }
    })
  }

  return [{parentID, link}, ...results]
}

function getNavigationAndItemsFromLink(
  link: Navigation | Maybe<LinkExternalOrLinkInternalOrNavigation>[],
): [
  link: Navigation | null,
  items: Maybe<Maybe<LinkExternalOrLinkInternalOrNavigation>[]>,
] {
  if (isNavigation(link)) {
    return [link, link.items]
  } else {
    return [null, link]
  }
}
