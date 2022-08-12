import * as React from 'react'

type PropType = {
  jsonld:
    | {
        __html: string
      }
    | undefined
}

export function ScriptJSONLD({jsonld}: PropType) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={jsonld}
      key="product-jsonld"
    />
  )
}
