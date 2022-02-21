import * as React from 'react'
import {NavigationalItems} from '@components/NavigationalItems'
import type {NavigationGroup} from '@generated/cms.types'
import type {Maybe} from '@LocalTypes/interfaces'
import footerStyles from '@styles/footer.module.css'

type PropType = {
  navigations?: Maybe<Array<Maybe<NavigationGroup>>>
}

export function FooterNavigations({navigations}: PropType) {
  return (
    <div className={footerStyles.footerGrid}>
      {navigations?.map((navigationGroup, index) => {
        if (!navigationGroup?.navigation) {
          return null
        }

        return (
          <div key={index} className={footerStyles.footerColumn}>
            <h3>{navigationGroup.navigation.title}</h3>
            <ul>
              <NavigationalItems
                imageNavigation={false}
                navigation={navigationGroup.navigation}
              >
                {({title, slug}) => (
                  <li key={`Footer_NavigationItem_${title}`}>
                    <a href={slug}>{title}</a>
                  </li>
                )}
              </NavigationalItems>
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default FooterNavigations
