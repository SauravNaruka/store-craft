import React from 'react'
import {Card} from './Card.server'
import {HStack} from './HStack.server'
import type {NavigationItem} from '@generated/cms.types'

type PropType = {
  navigationItems: NavigationItem[]
}

export function ProductNavigation({navigationItems}: PropType) {
  return (
    <HStack>
      {navigationItems.map(({title, link, image}, index) => {
        if (link?.url) {
          return (
            <Card
              key={index}
              title={title ? title : ''}
              link={link.url}
              imageSrc={image?.asset?.url}
              imageCaption={image?.caption}
              priority={true}
            />
          )
        } else {
          return false
        }
      })}
    </HStack>
  )
}
