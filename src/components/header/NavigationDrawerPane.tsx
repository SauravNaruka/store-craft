import * as React from 'react'
import cx from 'classnames'
import {NavigationDrawerBackButton} from './NavigationDrawerBackButton'
import {NavigationDrawerFeaturedImage} from './NavigationDrawerFeaturedImage'
import {NavigationDrawerLinks} from './NavigationDrawerLinks'
import type {Maybe, Valueof} from '@LocalTypes/interfaces'
import type {
  Navigation,
  LinkExternalOrLinkInternalOrNavigation,
} from '@generated/cms.types'
import menuStyles from '@styles/menu.module.css'

export const PANE_PLACEMENT_OPTION = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
} as const

export type PanePlacement = Valueof<typeof PANE_PLACEMENT_OPTION>

type PropType = {
  navigation: Maybe<Navigation>
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
      <NavigationDrawerBackButton
        title={navigation?.title ?? null}
        onClick={() => setActivePaneID(parentID ?? null)}
      />

      <NavigationDrawerLinks
        links={links}
        setActivePaneID={setActivePaneID}
        setChildPaneActiveStatus={setChildPaneActiveStatus}
      />

      <NavigationDrawerFeaturedImage navigation={navigation} />
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
