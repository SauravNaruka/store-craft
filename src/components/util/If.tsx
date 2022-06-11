import React from 'react'

type PropType = {
  condition: boolean
  children: React.ReactNode
}

export function If({condition, children}: PropType) {
  if (condition && React.isValidElement(children)) return children
  else return null
}
