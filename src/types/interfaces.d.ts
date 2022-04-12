export type BasicType = boolean | string | number

export type IconPropType = React.SVGProps<SVGSVGElement>

export type Valueof<T> = T[keyof T]

export type Maybe<T> = T | null | undefined

export type NullablePartial<T> = {
  [P in keyof T]?: T[P] | null
}

export interface ImageSource {
  w96: string
  w100: string
  w128: string
  w256: string
  w300: string
  w384: string
  w640: string
  w750: string
  w800: string
  w828: string
  w1080: string
  w1200: string
  w1600: string
  w1920: string
  w2048: string
  w3840: string
}

export interface ImageType extends NullablePartial<ImageSource> {
  url: string | StaticImageData
  altText: string
}

export type AspectRatio =
  | {width: 1; height: 1}
  | {width: 4; height: 3}
  | {width: 16; height: 9}
  | {width: 3; height: 4}

export type Connection<Node> = {
  edges: Edge<Node>[]
}

export type Edge<Node> = {
  cursor: string
  node: Node
}

export type Price = {
  amount: number
  currencyCode: CurrencyCode
}

export type CollectionsByID = {[key: string]: Collection}

export type NavigationAndCollectionsByID = {
  navigation: Navigation
  collectionsByID: CollectionsByID
}

export type NavigationalData = {
  title: string
  subtitle?: string
  slug: string
  image?: Maybe<ImageType>
}
