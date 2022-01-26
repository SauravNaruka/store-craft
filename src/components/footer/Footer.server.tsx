import * as React from 'react'
import {NavigationalItems} from '../NavigationalItems'
import {Navigation} from '@generated/cms.types'
import footerStyles from '@styles/footer.module.css'

type PropType = {
  navigations: Navigation[]
}

export function Footer({navigations}: PropType) {
  return (
    <footer className={footerStyles.footerRoot}>
      <div className={footerStyles.footerGrid}>
        {navigations.map((navigation, index) => (
          <div key={index} className={footerStyles.footerColumn}>
            <h3>{navigation.title}</h3>
            <ul>
              <NavigationalItems navigation={navigation}>
                {({title, link}) => (
                  <li>
                    <a href={link}>{title}</a>
                  </li>
                )}
              </NavigationalItems>
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
