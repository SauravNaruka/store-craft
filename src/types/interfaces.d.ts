import type {PageInfo} from 'generated/storefront.types'

export type BasicType = boolean | string | number

export type IconPropType = React.SVGProps<SVGSVGElement>

export type Valueof<T> = T[keyof T]

export type Maybe<T> = T | null

export interface ImageType {
  url: string | StaticImageData
  caption: string
}

export type AspectRatio =
  | {width: 1; height: 1}
  | {width: 4; height: 3}
  | {width: 16; height: 9}

export type Connection<Node> = {
  edges: Edge<Node>[]
  pageInfo: PageInfo
}

export type Edge<Node> = {
  cursor: string
  node: Node
}

export type Price = {
  amount: number
  currencyCode: CurrencyCode
}
