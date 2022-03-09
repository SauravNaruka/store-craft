import * as React from 'react'
import cx from 'classnames'
import NavLinks from './NavLinks'
import NavigationDrawerPane from './NavigationDrawerPane'
import ChevronRightIcon from '@components/icons/ChevronRightIcon'
import menuStyles from '@styles/menu.module.css'
import type {Navigation} from '@generated/cms.types'
import {Maybe} from '@LocalTypes/interfaces'

type PropType = {
  navigations: Maybe<Navigation>[]
  id: string
  visible: boolean
}

export function NavigationDrawer({navigations, id, visible}: PropType) {
  const [activePaneID, setActivePaneID] = React.useState<string | null>(null)
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
        <NavigationDrawerPane
          links={navigations}
          parentNavigation={null}
          activePaneID={activePaneID}
          setActivePaneID={setActivePaneID}
        >
          {args1 => (
            <NavigationDrawerPane {...args1}>
              {args2 => (
                <NavigationDrawerPane {...args2}></NavigationDrawerPane>
              )}
            </NavigationDrawerPane>
          )}
        </NavigationDrawerPane>
      </div>
    </div>
  )
}

export default NavigationDrawer

{
  /* <NavLinks
          title="Bedroom"
          visible={activeMenuID === 'menu1'}
          onClose={() => setActiveMenuID(null)}
        /> */
}
