export type BasicType = boolean | string | number

export type IconPropType = React.SVGProps<SVGSVGElement> & {
  decorativeOnly?: boolean
}

export type Valueof<T> = T[keyof T]

export interface ImageType {
  url: string | StaticImageData
  caption: string
}

export type AspectRatio = {width: 1; height: 1} | {width: 16; height: 9}
