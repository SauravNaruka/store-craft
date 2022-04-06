import * as React from 'react'
import Link from 'next/link'
import {NavigationalItems} from '@components/NavigationalItems'
import type {Navigation} from '@generated/cms.types'
import type {Maybe} from '@LocalTypes/interfaces'
import footerStyles from '@styles/footer.module.css'

type PropType = {
  navigations?: Maybe<Array<Maybe<Navigation>>>
}

export function FooterNavigations({navigations}: PropType) {
  return (
    <div className={footerStyles.footerGrid}>
      {navigations?.map((navigation, index) => {
        if (!navigation) {
          return null
        }

        return (
          <div key={index} className={footerStyles.footerColumn}>
            <h3>{navigation.title}</h3>
            <ul>
              <NavigationalItems
                imageNavigation={false}
                navigation={navigation}
              >
                {({title, slug}) => (
                  <li key={`Footer_NavigationItem_${title}`}>
                    <Link href={slug}>
                      <a>{title}</a>
                    </Link>
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
