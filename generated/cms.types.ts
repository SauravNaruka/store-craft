import {GraphQLClient} from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type AnnotationLinkEmail = {
  __typename?: 'AnnotationLinkEmail'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
}

export type AnnotationLinkEmailFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  email?: InputMaybe<StringFilter>
}

export type AnnotationLinkEmailSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  email?: InputMaybe<SortOrder>
}

export type Author = Document & {
  __typename?: 'Author'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  bioRaw?: Maybe<Scalars['JSON']>
  image?: Maybe<ImageBlock>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Slug>
}

export type AuthorFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  image?: InputMaybe<ImageBlockFilter>
  name?: InputMaybe<StringFilter>
  slug?: InputMaybe<SlugFilter>
}

export type AuthorOrPageOrPostOrShopifyCollectionOrShopifyProduct =
  | Author
  | Page
  | Post
  | ShopifyCollection
  | ShopifyProduct

export type AuthorReference = {
  __typename?: 'AuthorReference'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  author?: Maybe<Author>
}

export type AuthorReferenceFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  author?: InputMaybe<AuthorFilter>
}

export type AuthorReferenceOrSpan = AuthorReference | Span

export type AuthorReferenceSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
}

export type AuthorSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  image?: InputMaybe<ImageBlockSorting>
  name?: InputMaybe<SortOrder>
  slug?: InputMaybe<SlugSorting>
}

export type Block = {
  __typename?: 'Block'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  children?: Maybe<Array<Maybe<Span>>>
  list?: Maybe<Scalars['String']>
  style?: Maybe<Scalars['String']>
}

export type BlockOrImageBlock = Block | ImageBlock

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Boolean']>
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Boolean']>
}

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Date']>
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Date']>
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Date']>
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Date']>
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Date']>
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Date']>
}

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['DateTime']>
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['DateTime']>
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['DateTime']>
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['DateTime']>
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['DateTime']>
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['DateTime']>
}

/** A Sanity document */
export type Document = {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
}

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
}

export type DocumentSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
}

export type File = {
  __typename?: 'File'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  asset?: Maybe<SanityFileAsset>
}

export type FileFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  asset?: InputMaybe<SanityFileAssetFilter>
}

export type FileSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
}

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Float']>
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Float']>
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Float']>
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Float']>
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Float']>
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Float']>
}

export type Footer = Document & {
  __typename?: 'Footer'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Support email for the customer */
  email?: Maybe<Scalars['String']>
  handle?: Maybe<Slug>
  /** Only used internally in the CMS */
  name?: Maybe<Scalars['String']>
  navigations?: Maybe<Array<Maybe<NavigationGroup>>>
  /** Support contact number for the customer */
  phone?: Maybe<Scalars['String']>
  social?: Maybe<SocialLinks>
}

export type FooterFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  email?: InputMaybe<StringFilter>
  handle?: InputMaybe<SlugFilter>
  name?: InputMaybe<StringFilter>
  phone?: InputMaybe<StringFilter>
  social?: InputMaybe<SocialLinksFilter>
}

export type FooterSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  email?: InputMaybe<SortOrder>
  handle?: InputMaybe<SlugSorting>
  name?: InputMaybe<SortOrder>
  phone?: InputMaybe<SortOrder>
  social?: InputMaybe<SocialLinksSorting>
}

export type Geopoint = {
  __typename?: 'Geopoint'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  alt?: Maybe<Scalars['Float']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
}

export type GeopointFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  alt?: InputMaybe<FloatFilter>
  lat?: InputMaybe<FloatFilter>
  lng?: InputMaybe<FloatFilter>
}

export type GeopointSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  alt?: InputMaybe<SortOrder>
  lat?: InputMaybe<SortOrder>
  lng?: InputMaybe<SortOrder>
}

export type GlobalConfig = Document & {
  __typename?: 'GlobalConfig'
  SEO?: Maybe<Seo>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** This theme will deploy to any branch/deploy previews, easily view the whole theme while doing development */
  stagingTheme?: Maybe<Theme>
  theme?: Maybe<Theme>
}

export type GlobalConfigFilter = {
  SEO?: InputMaybe<SeoFilter>
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  stagingTheme?: InputMaybe<ThemeFilter>
  theme?: InputMaybe<ThemeFilter>
}

export type GlobalConfigSorting = {
  SEO?: InputMaybe<SeoSorting>
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
}

export type Header = Document & {
  __typename?: 'Header'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Only used internally in the CMS */
  name?: Maybe<Scalars['String']>
  navigations?: Maybe<Array<Maybe<NavigationGroup>>>
  slug?: Maybe<Slug>
}

export type HeaderFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  name?: InputMaybe<StringFilter>
  slug?: InputMaybe<SlugFilter>
}

export type HeaderSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  slug?: InputMaybe<SlugSorting>
}

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['ID']>
  in?: InputMaybe<Array<Scalars['ID']>>
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['ID']>
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['ID']>
  nin?: InputMaybe<Array<Scalars['ID']>>
}

export type Image = {
  __typename?: 'Image'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  asset?: Maybe<SanityImageAsset>
  crop?: Maybe<SanityImageCrop>
  hotspot?: Maybe<SanityImageHotspot>
}

export type ImageBlock = {
  __typename?: 'ImageBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  asset?: Maybe<SanityImageAsset>
  /** This will be used as the alt text of the image. Try to convey the feeling of the image rather than literal description */
  caption?: Maybe<Scalars['String']>
  crop?: Maybe<SanityImageCrop>
  hotspot?: Maybe<SanityImageHotspot>
}

export type ImageBlockFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  asset?: InputMaybe<SanityImageAssetFilter>
  caption?: InputMaybe<StringFilter>
  crop?: InputMaybe<SanityImageCropFilter>
  hotspot?: InputMaybe<SanityImageHotspotFilter>
}

export type ImageBlockSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  caption?: InputMaybe<SortOrder>
  crop?: InputMaybe<SanityImageCropSorting>
  hotspot?: InputMaybe<SanityImageHotspotSorting>
}

export type ImageFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  asset?: InputMaybe<SanityImageAssetFilter>
  crop?: InputMaybe<SanityImageCropFilter>
  hotspot?: InputMaybe<SanityImageHotspotFilter>
}

export type ImageSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  crop?: InputMaybe<SanityImageCropSorting>
  hotspot?: InputMaybe<SanityImageHotspotSorting>
}

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Int']>
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Int']>
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Int']>
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Int']>
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Int']>
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Int']>
}

export type LinkExternal = {
  __typename?: 'LinkExternal'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  newWindow?: Maybe<Scalars['Boolean']>
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type LinkExternalFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  newWindow?: InputMaybe<BooleanFilter>
  title?: InputMaybe<StringFilter>
  url?: InputMaybe<StringFilter>
}

export type LinkExternalOrLinkInternalOrNavigationGroup =
  | LinkExternal
  | LinkInternal
  | NavigationGroup

export type LinkExternalSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  newWindow?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
  url?: InputMaybe<SortOrder>
}

export type LinkInternal = {
  __typename?: 'LinkInternal'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  reference?: Maybe<AuthorOrPageOrPostOrShopifyCollectionOrShopifyProduct>
  title?: Maybe<Scalars['String']>
}

export type LinkInternalFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
}

export type LinkInternalSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
}

export type Navigation = Document & {
  __typename?: 'Navigation'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  items?: Maybe<Array<Maybe<LinkExternalOrLinkInternalOrNavigationGroup>>>
  link?: Maybe<LinkInternal>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Slug>
  title?: Maybe<Scalars['String']>
}

export type NavigationFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  link?: InputMaybe<LinkInternalFilter>
  name?: InputMaybe<StringFilter>
  slug?: InputMaybe<SlugFilter>
  title?: InputMaybe<StringFilter>
}

export type NavigationGroup = {
  __typename?: 'NavigationGroup'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  navigation?: Maybe<Navigation>
}

export type NavigationGroupFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  navigation?: InputMaybe<NavigationFilter>
}

export type NavigationGroupSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
}

export type NavigationSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  link?: InputMaybe<LinkInternalSorting>
  name?: InputMaybe<SortOrder>
  slug?: InputMaybe<SlugSorting>
  title?: InputMaybe<SortOrder>
}

export type Page = Document & {
  __typename?: 'Page'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  mainImage?: Maybe<Image>
  slug?: Maybe<Slug>
  title?: Maybe<Scalars['String']>
}

export type PageFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  mainImage?: InputMaybe<ImageFilter>
  slug?: InputMaybe<SlugFilter>
  title?: InputMaybe<StringFilter>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  hasNextPage?: Maybe<Scalars['Boolean']>
  hasPreviousPage?: Maybe<Scalars['Boolean']>
}

export type PageInfoFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  hasNextPage?: InputMaybe<BooleanFilter>
  hasPreviousPage?: InputMaybe<BooleanFilter>
}

export type PageInfoSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  hasNextPage?: InputMaybe<SortOrder>
  hasPreviousPage?: InputMaybe<SortOrder>
}

export type PageSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  mainImage?: InputMaybe<ImageSorting>
  slug?: InputMaybe<SlugSorting>
  title?: InputMaybe<SortOrder>
}

export type Post = Document & {
  __typename?: 'Post'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  authors?: Maybe<Array<Maybe<AuthorReference>>>
  bodyRaw?: Maybe<Scalars['JSON']>
  categories?: Maybe<Array<Maybe<PostCategory>>>
  mainImage?: Maybe<ImageBlock>
  /** This can be used to schedule post for publishing */
  publishedAt?: Maybe<Scalars['DateTime']>
  seo?: Maybe<Seo>
  slug?: Maybe<Slug>
  /** Titles should be catchy, descriptive, and not too long */
  title?: Maybe<Scalars['String']>
}

export type PostCategory = Document & {
  __typename?: 'PostCategory'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type PostCategoryFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  description?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
}

export type PostCategorySorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
}

export type PostFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  mainImage?: InputMaybe<ImageBlockFilter>
  publishedAt?: InputMaybe<DatetimeFilter>
  seo?: InputMaybe<SeoFilter>
  slug?: InputMaybe<SlugFilter>
  title?: InputMaybe<StringFilter>
}

export type PostSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  mainImage?: InputMaybe<ImageBlockSorting>
  publishedAt?: InputMaybe<SortOrder>
  seo?: InputMaybe<SeoSorting>
  slug?: InputMaybe<SlugSorting>
  title?: InputMaybe<SortOrder>
}

export type RootQuery = {
  __typename?: 'RootQuery'
  Author?: Maybe<Author>
  Document?: Maybe<Document>
  Footer?: Maybe<Footer>
  GlobalConfig?: Maybe<GlobalConfig>
  Header?: Maybe<Header>
  Navigation?: Maybe<Navigation>
  Page?: Maybe<Page>
  Post?: Maybe<Post>
  PostCategory?: Maybe<PostCategory>
  SanityFileAsset?: Maybe<SanityFileAsset>
  SanityImageAsset?: Maybe<SanityImageAsset>
  ShopifyCollection?: Maybe<ShopifyCollection>
  ShopifyProduct?: Maybe<ShopifyProduct>
  Theme?: Maybe<Theme>
  allAuthor: Array<Author>
  allDocument: Array<Document>
  allFooter: Array<Footer>
  allGlobalConfig: Array<GlobalConfig>
  allHeader: Array<Header>
  allNavigation: Array<Navigation>
  allPage: Array<Page>
  allPost: Array<Post>
  allPostCategory: Array<PostCategory>
  allSanityFileAsset: Array<SanityFileAsset>
  allSanityImageAsset: Array<SanityImageAsset>
  allShopifyCollection: Array<ShopifyCollection>
  allShopifyProduct: Array<ShopifyProduct>
  allTheme: Array<Theme>
}

export type RootQueryAuthorArgs = {
  id: Scalars['ID']
}

export type RootQueryDocumentArgs = {
  id: Scalars['ID']
}

export type RootQueryFooterArgs = {
  id: Scalars['ID']
}

export type RootQueryGlobalConfigArgs = {
  id: Scalars['ID']
}

export type RootQueryHeaderArgs = {
  id: Scalars['ID']
}

export type RootQueryNavigationArgs = {
  id: Scalars['ID']
}

export type RootQueryPageArgs = {
  id: Scalars['ID']
}

export type RootQueryPostArgs = {
  id: Scalars['ID']
}

export type RootQueryPostCategoryArgs = {
  id: Scalars['ID']
}

export type RootQuerySanityFileAssetArgs = {
  id: Scalars['ID']
}

export type RootQuerySanityImageAssetArgs = {
  id: Scalars['ID']
}

export type RootQueryShopifyCollectionArgs = {
  id: Scalars['ID']
}

export type RootQueryShopifyProductArgs = {
  id: Scalars['ID']
}

export type RootQueryThemeArgs = {
  id: Scalars['ID']
}

export type RootQueryAllAuthorArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<AuthorSorting>>
  where?: InputMaybe<AuthorFilter>
}

export type RootQueryAllDocumentArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<DocumentSorting>>
  where?: InputMaybe<DocumentFilter>
}

export type RootQueryAllFooterArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<FooterSorting>>
  where?: InputMaybe<FooterFilter>
}

export type RootQueryAllGlobalConfigArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<GlobalConfigSorting>>
  where?: InputMaybe<GlobalConfigFilter>
}

export type RootQueryAllHeaderArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<HeaderSorting>>
  where?: InputMaybe<HeaderFilter>
}

export type RootQueryAllNavigationArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<NavigationSorting>>
  where?: InputMaybe<NavigationFilter>
}

export type RootQueryAllPageArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<PageSorting>>
  where?: InputMaybe<PageFilter>
}

export type RootQueryAllPostArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<PostSorting>>
  where?: InputMaybe<PostFilter>
}

export type RootQueryAllPostCategoryArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<PostCategorySorting>>
  where?: InputMaybe<PostCategoryFilter>
}

export type RootQueryAllSanityFileAssetArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<SanityFileAssetSorting>>
  where?: InputMaybe<SanityFileAssetFilter>
}

export type RootQueryAllSanityImageAssetArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<SanityImageAssetSorting>>
  where?: InputMaybe<SanityImageAssetFilter>
}

export type RootQueryAllShopifyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<ShopifyCollectionSorting>>
  where?: InputMaybe<ShopifyCollectionFilter>
}

export type RootQueryAllShopifyProductArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<ShopifyProductSorting>>
  where?: InputMaybe<ShopifyProductFilter>
}

export type RootQueryAllThemeArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<ThemeSorting>>
  where?: InputMaybe<ThemeFilter>
}

export type SanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars['String']>
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars['String']>
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars['String']>
}

export type SanityAssetSourceDataFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  id?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  url?: InputMaybe<StringFilter>
}

export type SanityAssetSourceDataSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  url?: InputMaybe<SortOrder>
}

export type SanityFileAsset = Document & {
  __typename?: 'SanityFileAsset'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  altText?: Maybe<Scalars['String']>
  assetId?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  extension?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  mimeType?: Maybe<Scalars['String']>
  originalFilename?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  sha1hash?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  source?: Maybe<SanityAssetSourceData>
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  altText?: InputMaybe<StringFilter>
  assetId?: InputMaybe<StringFilter>
  description?: InputMaybe<StringFilter>
  extension?: InputMaybe<StringFilter>
  label?: InputMaybe<StringFilter>
  mimeType?: InputMaybe<StringFilter>
  originalFilename?: InputMaybe<StringFilter>
  path?: InputMaybe<StringFilter>
  sha1hash?: InputMaybe<StringFilter>
  size?: InputMaybe<FloatFilter>
  source?: InputMaybe<SanityAssetSourceDataFilter>
  title?: InputMaybe<StringFilter>
  url?: InputMaybe<StringFilter>
}

export type SanityFileAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  altText?: InputMaybe<SortOrder>
  assetId?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  extension?: InputMaybe<SortOrder>
  label?: InputMaybe<SortOrder>
  mimeType?: InputMaybe<SortOrder>
  originalFilename?: InputMaybe<SortOrder>
  path?: InputMaybe<SortOrder>
  sha1hash?: InputMaybe<SortOrder>
  size?: InputMaybe<SortOrder>
  source?: InputMaybe<SanityAssetSourceDataSorting>
  title?: InputMaybe<SortOrder>
  url?: InputMaybe<SortOrder>
}

export type SanityImageAsset = Document & {
  __typename?: 'SanityImageAsset'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  altText?: Maybe<Scalars['String']>
  assetId?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  extension?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  metadata?: Maybe<SanityImageMetadata>
  mimeType?: Maybe<Scalars['String']>
  originalFilename?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  sha1hash?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  source?: Maybe<SanityAssetSourceData>
  title?: Maybe<Scalars['String']>
  uploadId?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  altText?: InputMaybe<StringFilter>
  assetId?: InputMaybe<StringFilter>
  description?: InputMaybe<StringFilter>
  extension?: InputMaybe<StringFilter>
  label?: InputMaybe<StringFilter>
  metadata?: InputMaybe<SanityImageMetadataFilter>
  mimeType?: InputMaybe<StringFilter>
  originalFilename?: InputMaybe<StringFilter>
  path?: InputMaybe<StringFilter>
  sha1hash?: InputMaybe<StringFilter>
  size?: InputMaybe<FloatFilter>
  source?: InputMaybe<SanityAssetSourceDataFilter>
  title?: InputMaybe<StringFilter>
  uploadId?: InputMaybe<StringFilter>
  url?: InputMaybe<StringFilter>
}

export type SanityImageAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  altText?: InputMaybe<SortOrder>
  assetId?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  extension?: InputMaybe<SortOrder>
  label?: InputMaybe<SortOrder>
  metadata?: InputMaybe<SanityImageMetadataSorting>
  mimeType?: InputMaybe<SortOrder>
  originalFilename?: InputMaybe<SortOrder>
  path?: InputMaybe<SortOrder>
  sha1hash?: InputMaybe<SortOrder>
  size?: InputMaybe<SortOrder>
  source?: InputMaybe<SanityAssetSourceDataSorting>
  title?: InputMaybe<SortOrder>
  uploadId?: InputMaybe<SortOrder>
  url?: InputMaybe<SortOrder>
}

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  bottom?: Maybe<Scalars['Float']>
  left?: Maybe<Scalars['Float']>
  right?: Maybe<Scalars['Float']>
  top?: Maybe<Scalars['Float']>
}

export type SanityImageCropFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  bottom?: InputMaybe<FloatFilter>
  left?: InputMaybe<FloatFilter>
  right?: InputMaybe<FloatFilter>
  top?: InputMaybe<FloatFilter>
}

export type SanityImageCropSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  bottom?: InputMaybe<SortOrder>
  left?: InputMaybe<SortOrder>
  right?: InputMaybe<SortOrder>
  top?: InputMaybe<SortOrder>
}

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type SanityImageDimensionsFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  aspectRatio?: InputMaybe<FloatFilter>
  height?: InputMaybe<FloatFilter>
  width?: InputMaybe<FloatFilter>
}

export type SanityImageDimensionsSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  aspectRatio?: InputMaybe<SortOrder>
  height?: InputMaybe<SortOrder>
  width?: InputMaybe<SortOrder>
}

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  x?: Maybe<Scalars['Float']>
  y?: Maybe<Scalars['Float']>
}

export type SanityImageHotspotFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  height?: InputMaybe<FloatFilter>
  width?: InputMaybe<FloatFilter>
  x?: InputMaybe<FloatFilter>
  y?: InputMaybe<FloatFilter>
}

export type SanityImageHotspotSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  height?: InputMaybe<SortOrder>
  width?: InputMaybe<SortOrder>
  x?: InputMaybe<SortOrder>
  y?: InputMaybe<SortOrder>
}

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  blurHash?: Maybe<Scalars['String']>
  dimensions?: Maybe<SanityImageDimensions>
  hasAlpha?: Maybe<Scalars['Boolean']>
  isOpaque?: Maybe<Scalars['Boolean']>
  location?: Maybe<Geopoint>
  lqip?: Maybe<Scalars['String']>
  palette?: Maybe<SanityImagePalette>
}

export type SanityImageMetadataFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  blurHash?: InputMaybe<StringFilter>
  dimensions?: InputMaybe<SanityImageDimensionsFilter>
  hasAlpha?: InputMaybe<BooleanFilter>
  isOpaque?: InputMaybe<BooleanFilter>
  location?: InputMaybe<GeopointFilter>
  lqip?: InputMaybe<StringFilter>
  palette?: InputMaybe<SanityImagePaletteFilter>
}

export type SanityImageMetadataSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  blurHash?: InputMaybe<SortOrder>
  dimensions?: InputMaybe<SanityImageDimensionsSorting>
  hasAlpha?: InputMaybe<SortOrder>
  isOpaque?: InputMaybe<SortOrder>
  location?: InputMaybe<GeopointSorting>
  lqip?: InputMaybe<SortOrder>
  palette?: InputMaybe<SanityImagePaletteSorting>
}

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  darkMuted?: Maybe<SanityImagePaletteSwatch>
  darkVibrant?: Maybe<SanityImagePaletteSwatch>
  dominant?: Maybe<SanityImagePaletteSwatch>
  lightMuted?: Maybe<SanityImagePaletteSwatch>
  lightVibrant?: Maybe<SanityImagePaletteSwatch>
  muted?: Maybe<SanityImagePaletteSwatch>
  vibrant?: Maybe<SanityImagePaletteSwatch>
}

export type SanityImagePaletteFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilter>
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>
  dominant?: InputMaybe<SanityImagePaletteSwatchFilter>
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilter>
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>
  muted?: InputMaybe<SanityImagePaletteSwatchFilter>
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilter>
}

export type SanityImagePaletteSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  darkMuted?: InputMaybe<SanityImagePaletteSwatchSorting>
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>
  dominant?: InputMaybe<SanityImagePaletteSwatchSorting>
  lightMuted?: InputMaybe<SanityImagePaletteSwatchSorting>
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>
  muted?: InputMaybe<SanityImagePaletteSwatchSorting>
  vibrant?: InputMaybe<SanityImagePaletteSwatchSorting>
}

export type SanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  background?: Maybe<Scalars['String']>
  foreground?: Maybe<Scalars['String']>
  population?: Maybe<Scalars['Float']>
  title?: Maybe<Scalars['String']>
}

export type SanityImagePaletteSwatchFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  background?: InputMaybe<StringFilter>
  foreground?: InputMaybe<StringFilter>
  population?: InputMaybe<FloatFilter>
  title?: InputMaybe<StringFilter>
}

export type SanityImagePaletteSwatchSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  background?: InputMaybe<SortOrder>
  foreground?: InputMaybe<SortOrder>
  population?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
}

export type Sanity_DocumentFilter = {
  /** All documents that are drafts. */
  is_draft?: InputMaybe<Scalars['Boolean']>
  /** All documents referencing the given document ID. */
  references?: InputMaybe<Scalars['ID']>
}

export type Seo = {
  __typename?: 'Seo'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  excerptRaw?: Maybe<Scalars['JSON']>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
  title?: Maybe<Scalars['String']>
}

export type SeoFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
}

export type SeoSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
}

export type ShopifyCollection = Document & {
  __typename?: 'ShopifyCollection'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  archived?: Maybe<Scalars['Boolean']>
  handle?: Maybe<Scalars['String']>
  products?: Maybe<Array<Maybe<ShopifyProduct>>>
  shopifyId?: Maybe<Scalars['String']>
  sourceData?: Maybe<ShopifySourceCollection>
  subtitle?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type ShopifyCollectionFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  archived?: InputMaybe<BooleanFilter>
  handle?: InputMaybe<StringFilter>
  shopifyId?: InputMaybe<StringFilter>
  sourceData?: InputMaybe<ShopifySourceCollectionFilter>
  subtitle?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
}

export type ShopifyCollectionSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  archived?: InputMaybe<SortOrder>
  handle?: InputMaybe<SortOrder>
  shopifyId?: InputMaybe<SortOrder>
  sourceData?: InputMaybe<ShopifySourceCollectionSorting>
  subtitle?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
}

export type ShopifyMoneyV2 = {
  __typename?: 'ShopifyMoneyV2'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['String']>
  currencyCode?: Maybe<Scalars['String']>
}

export type ShopifyMoneyV2Filter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  amount?: InputMaybe<StringFilter>
  currencyCode?: InputMaybe<StringFilter>
}

export type ShopifyMoneyV2Sorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  amount?: InputMaybe<SortOrder>
  currencyCode?: InputMaybe<SortOrder>
}

export type ShopifyProduct = Document & {
  __typename?: 'ShopifyProduct'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  archived?: Maybe<Scalars['Boolean']>
  collections?: Maybe<Array<Maybe<ShopifyCollection>>>
  handle?: Maybe<Scalars['String']>
  maxVariantPrice?: Maybe<Scalars['Float']>
  minVariantPrice?: Maybe<Scalars['Float']>
  options?: Maybe<Array<Maybe<ShopifyProductOption>>>
  shopifyId?: Maybe<Scalars['String']>
  sourceData?: Maybe<ShopifySourceProduct>
  title?: Maybe<Scalars['String']>
  variants?: Maybe<Array<Maybe<ShopifyProductVariant>>>
}

export type ShopifyProductFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  archived?: InputMaybe<BooleanFilter>
  handle?: InputMaybe<StringFilter>
  maxVariantPrice?: InputMaybe<FloatFilter>
  minVariantPrice?: InputMaybe<FloatFilter>
  shopifyId?: InputMaybe<StringFilter>
  sourceData?: InputMaybe<ShopifySourceProductFilter>
  title?: InputMaybe<StringFilter>
}

export type ShopifyProductOption = {
  __typename?: 'ShopifyProductOption'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  shopifyOptionId?: Maybe<Scalars['String']>
  values?: Maybe<Array<Maybe<ShopifyProductOptionValue>>>
}

export type ShopifyProductOptionFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  shopifyOptionId?: InputMaybe<StringFilter>
}

export type ShopifyProductOptionSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  shopifyOptionId?: InputMaybe<SortOrder>
}

export type ShopifyProductOptionValue = {
  __typename?: 'ShopifyProductOptionValue'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type ShopifyProductOptionValueFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  value?: InputMaybe<StringFilter>
}

export type ShopifyProductOptionValueSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  value?: InputMaybe<SortOrder>
}

export type ShopifyProductSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  archived?: InputMaybe<SortOrder>
  handle?: InputMaybe<SortOrder>
  maxVariantPrice?: InputMaybe<SortOrder>
  minVariantPrice?: InputMaybe<SortOrder>
  shopifyId?: InputMaybe<SortOrder>
  sourceData?: InputMaybe<ShopifySourceProductSorting>
  title?: InputMaybe<SortOrder>
}

export type ShopifyProductVariant = {
  __typename?: 'ShopifyProductVariant'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  shopifyVariantID?: Maybe<Scalars['String']>
  sourceData?: Maybe<ShopifySourceProductVariant>
  title?: Maybe<Scalars['String']>
}

export type ShopifyProductVariantFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  shopifyVariantID?: InputMaybe<StringFilter>
  sourceData?: InputMaybe<ShopifySourceProductVariantFilter>
  title?: InputMaybe<StringFilter>
}

export type ShopifyProductVariantSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  shopifyVariantID?: InputMaybe<SortOrder>
  sourceData?: InputMaybe<ShopifySourceProductVariantSorting>
  title?: InputMaybe<SortOrder>
}

export type ShopifySourceCollection = {
  __typename?: 'ShopifySourceCollection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  descriptionHtml?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  image?: Maybe<ShopifySourceImage>
  products?: Maybe<ShopifySourceProductsConnection>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['Date']>
}

export type ShopifySourceCollectionEdge = {
  __typename?: 'ShopifySourceCollectionEdge'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  cursor?: Maybe<Scalars['String']>
  node?: Maybe<ShopifySourceCollectionNode>
}

export type ShopifySourceCollectionEdgeFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  cursor?: InputMaybe<StringFilter>
  node?: InputMaybe<ShopifySourceCollectionNodeFilter>
}

export type ShopifySourceCollectionEdgeSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  cursor?: InputMaybe<SortOrder>
  node?: InputMaybe<ShopifySourceCollectionNodeSorting>
}

export type ShopifySourceCollectionFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  description?: InputMaybe<StringFilter>
  descriptionHtml?: InputMaybe<StringFilter>
  handle?: InputMaybe<StringFilter>
  id?: InputMaybe<StringFilter>
  image?: InputMaybe<ShopifySourceImageFilter>
  products?: InputMaybe<ShopifySourceProductsConnectionFilter>
  title?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateFilter>
}

export type ShopifySourceCollectionNode = {
  __typename?: 'ShopifySourceCollectionNode'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type ShopifySourceCollectionNodeFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  handle?: InputMaybe<StringFilter>
  id?: InputMaybe<StringFilter>
}

export type ShopifySourceCollectionNodeSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  handle?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
}

export type ShopifySourceCollectionSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  descriptionHtml?: InputMaybe<SortOrder>
  handle?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  image?: InputMaybe<ShopifySourceImageSorting>
  products?: InputMaybe<ShopifySourceProductsConnectionSorting>
  title?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type ShopifySourceCollectionsConnection = {
  __typename?: 'ShopifySourceCollectionsConnection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  edges?: Maybe<Array<Maybe<ShopifySourceCollectionEdge>>>
  pageInfo?: Maybe<PageInfo>
}

export type ShopifySourceCollectionsConnectionFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  pageInfo?: InputMaybe<PageInfoFilter>
}

export type ShopifySourceCollectionsConnectionSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  pageInfo?: InputMaybe<PageInfoSorting>
}

export type ShopifySourceImage = {
  __typename?: 'ShopifySourceImage'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  altText?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  originalSrc?: Maybe<Scalars['String']>
  w100?: Maybe<Scalars['String']>
  w300?: Maybe<Scalars['String']>
  w800?: Maybe<Scalars['String']>
  w1200?: Maybe<Scalars['String']>
  w1600?: Maybe<Scalars['String']>
}

export type ShopifySourceImageEdge = {
  __typename?: 'ShopifySourceImageEdge'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  cursor?: Maybe<Scalars['String']>
  key?: Maybe<Scalars['String']>
  node?: Maybe<ShopifySourceImage>
}

export type ShopifySourceImageEdgeFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  cursor?: InputMaybe<StringFilter>
  key?: InputMaybe<StringFilter>
  node?: InputMaybe<ShopifySourceImageFilter>
}

export type ShopifySourceImageEdgeSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  cursor?: InputMaybe<SortOrder>
  key?: InputMaybe<SortOrder>
  node?: InputMaybe<ShopifySourceImageSorting>
}

export type ShopifySourceImageFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  altText?: InputMaybe<StringFilter>
  id?: InputMaybe<StringFilter>
  originalSrc?: InputMaybe<StringFilter>
  w100?: InputMaybe<StringFilter>
  w300?: InputMaybe<StringFilter>
  w800?: InputMaybe<StringFilter>
  w1200?: InputMaybe<StringFilter>
  w1600?: InputMaybe<StringFilter>
}

export type ShopifySourceImageSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  altText?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  originalSrc?: InputMaybe<SortOrder>
  w100?: InputMaybe<SortOrder>
  w300?: InputMaybe<SortOrder>
  w800?: InputMaybe<SortOrder>
  w1200?: InputMaybe<SortOrder>
  w1600?: InputMaybe<SortOrder>
}

export type ShopifySourceImages = {
  __typename?: 'ShopifySourceImages'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  edges?: Maybe<Array<Maybe<ShopifySourceImageEdge>>>
}

export type ShopifySourceImagesFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
}

export type ShopifySourceImagesSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
}

export type ShopifySourceProduct = {
  __typename?: 'ShopifySourceProduct'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  availableForSale?: Maybe<Scalars['Boolean']>
  collections?: Maybe<ShopifySourceCollectionsConnection>
  compareAtPriceRange?: Maybe<ShopifySourceProductPriceRange>
  createdAt?: Maybe<Scalars['Date']>
  description?: Maybe<Scalars['String']>
  descriptionHtml?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  images?: Maybe<ShopifySourceImages>
  options?: Maybe<Array<Maybe<ShopifySourceProductOption>>>
  presentmentPriceRanges?: Maybe<ShopifySourceProductPresentmentPriceRangeConnection>
  priceRange?: Maybe<ShopifySourceProductPriceRange>
  productType?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['Date']>
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['Date']>
  variants?: Maybe<ShopifySourceProductVariantsConnection>
  vendor?: Maybe<Scalars['String']>
}

export type ShopifySourceProductEdge = {
  __typename?: 'ShopifySourceProductEdge'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  cursor?: Maybe<Scalars['String']>
  node?: Maybe<ShopifySourceProductNode>
}

export type ShopifySourceProductEdgeFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  cursor?: InputMaybe<StringFilter>
  node?: InputMaybe<ShopifySourceProductNodeFilter>
}

export type ShopifySourceProductEdgeSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  cursor?: InputMaybe<SortOrder>
  node?: InputMaybe<ShopifySourceProductNodeSorting>
}

export type ShopifySourceProductFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  availableForSale?: InputMaybe<BooleanFilter>
  collections?: InputMaybe<ShopifySourceCollectionsConnectionFilter>
  compareAtPriceRange?: InputMaybe<ShopifySourceProductPriceRangeFilter>
  createdAt?: InputMaybe<DateFilter>
  description?: InputMaybe<StringFilter>
  descriptionHtml?: InputMaybe<StringFilter>
  handle?: InputMaybe<StringFilter>
  id?: InputMaybe<StringFilter>
  images?: InputMaybe<ShopifySourceImagesFilter>
  presentmentPriceRanges?: InputMaybe<ShopifySourceProductPresentmentPriceRangeConnectionFilter>
  priceRange?: InputMaybe<ShopifySourceProductPriceRangeFilter>
  productType?: InputMaybe<StringFilter>
  publishedAt?: InputMaybe<DateFilter>
  title?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateFilter>
  variants?: InputMaybe<ShopifySourceProductVariantsConnectionFilter>
  vendor?: InputMaybe<StringFilter>
}

export type ShopifySourceProductNode = {
  __typename?: 'ShopifySourceProductNode'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type ShopifySourceProductNodeFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  handle?: InputMaybe<StringFilter>
  id?: InputMaybe<StringFilter>
}

export type ShopifySourceProductNodeSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  handle?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
}

export type ShopifySourceProductOption = {
  __typename?: 'ShopifySourceProductOption'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  values?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type ShopifySourceProductOptionFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
}

export type ShopifySourceProductOptionSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
}

export type ShopifySourceProductPresentmentPriceRangeConnection = {
  __typename?: 'ShopifySourceProductPresentmentPriceRangeConnection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  edges?: Maybe<Array<Maybe<ShopifySourceProductPriceRangeEdge>>>
}

export type ShopifySourceProductPresentmentPriceRangeConnectionFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
}

export type ShopifySourceProductPresentmentPriceRangeConnectionSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
}

export type ShopifySourceProductPricePresentmentEdge = {
  __typename?: 'ShopifySourceProductPricePresentmentEdge'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  cursor?: Maybe<Scalars['String']>
  node?: Maybe<ShopifySourceProductVariantPricePair>
}

export type ShopifySourceProductPricePresentmentEdgeFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  cursor?: InputMaybe<StringFilter>
  node?: InputMaybe<ShopifySourceProductVariantPricePairFilter>
}

export type ShopifySourceProductPricePresentmentEdgeSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  cursor?: InputMaybe<SortOrder>
  node?: InputMaybe<ShopifySourceProductVariantPricePairSorting>
}

export type ShopifySourceProductPriceRange = {
  __typename?: 'ShopifySourceProductPriceRange'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  maxVariantPrice?: Maybe<ShopifyMoneyV2>
  minVariantPrice?: Maybe<ShopifyMoneyV2>
}

export type ShopifySourceProductPriceRangeEdge = {
  __typename?: 'ShopifySourceProductPriceRangeEdge'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  cursor?: Maybe<Scalars['String']>
  node?: Maybe<ShopifySourceProductPriceRange>
}

export type ShopifySourceProductPriceRangeEdgeFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  cursor?: InputMaybe<StringFilter>
  node?: InputMaybe<ShopifySourceProductPriceRangeFilter>
}

export type ShopifySourceProductPriceRangeEdgeSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  cursor?: InputMaybe<SortOrder>
  node?: InputMaybe<ShopifySourceProductPriceRangeSorting>
}

export type ShopifySourceProductPriceRangeFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  maxVariantPrice?: InputMaybe<ShopifyMoneyV2Filter>
  minVariantPrice?: InputMaybe<ShopifyMoneyV2Filter>
}

export type ShopifySourceProductPriceRangeSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  maxVariantPrice?: InputMaybe<ShopifyMoneyV2Sorting>
  minVariantPrice?: InputMaybe<ShopifyMoneyV2Sorting>
}

export type ShopifySourceProductSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  availableForSale?: InputMaybe<SortOrder>
  collections?: InputMaybe<ShopifySourceCollectionsConnectionSorting>
  compareAtPriceRange?: InputMaybe<ShopifySourceProductPriceRangeSorting>
  createdAt?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  descriptionHtml?: InputMaybe<SortOrder>
  handle?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  images?: InputMaybe<ShopifySourceImagesSorting>
  presentmentPriceRanges?: InputMaybe<ShopifySourceProductPresentmentPriceRangeConnectionSorting>
  priceRange?: InputMaybe<ShopifySourceProductPriceRangeSorting>
  productType?: InputMaybe<SortOrder>
  publishedAt?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  variants?: InputMaybe<ShopifySourceProductVariantsConnectionSorting>
  vendor?: InputMaybe<SortOrder>
}

export type ShopifySourceProductVariant = {
  __typename?: 'ShopifySourceProductVariant'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  availableForSale?: Maybe<Scalars['Boolean']>
  compareAtPriceV2?: Maybe<ShopifyMoneyV2>
  currentlyNotInStock?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['String']>
  image?: Maybe<ShopifySourceImage>
  priceV2?: Maybe<ShopifyMoneyV2>
  requiresShipping?: Maybe<Scalars['Boolean']>
  selectedOptions?: Maybe<Array<Maybe<ShopifySourceSelectedOption>>>
  sku?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  weight?: Maybe<Scalars['Float']>
  weightUnit?: Maybe<Scalars['String']>
}

export type ShopifySourceProductVariantEdge = {
  __typename?: 'ShopifySourceProductVariantEdge'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  cursor?: Maybe<Scalars['String']>
  node?: Maybe<ShopifySourceProductVariant>
}

export type ShopifySourceProductVariantEdgeFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  cursor?: InputMaybe<StringFilter>
  node?: InputMaybe<ShopifySourceProductVariantFilter>
}

export type ShopifySourceProductVariantEdgeSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  cursor?: InputMaybe<SortOrder>
  node?: InputMaybe<ShopifySourceProductVariantSorting>
}

export type ShopifySourceProductVariantFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  availableForSale?: InputMaybe<BooleanFilter>
  compareAtPriceV2?: InputMaybe<ShopifyMoneyV2Filter>
  currentlyNotInStock?: InputMaybe<BooleanFilter>
  id?: InputMaybe<StringFilter>
  image?: InputMaybe<ShopifySourceImageFilter>
  priceV2?: InputMaybe<ShopifyMoneyV2Filter>
  requiresShipping?: InputMaybe<BooleanFilter>
  sku?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
  weight?: InputMaybe<FloatFilter>
  weightUnit?: InputMaybe<StringFilter>
}

export type ShopifySourceProductVariantPricePair = {
  __typename?: 'ShopifySourceProductVariantPricePair'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  compareAtPrice?: Maybe<ShopifyMoneyV2>
  price?: Maybe<ShopifyMoneyV2>
}

export type ShopifySourceProductVariantPricePairFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  compareAtPrice?: InputMaybe<ShopifyMoneyV2Filter>
  price?: InputMaybe<ShopifyMoneyV2Filter>
}

export type ShopifySourceProductVariantPricePairSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  compareAtPrice?: InputMaybe<ShopifyMoneyV2Sorting>
  price?: InputMaybe<ShopifyMoneyV2Sorting>
}

export type ShopifySourceProductVariantPricePresenentmentConnection = {
  __typename?: 'ShopifySourceProductVariantPricePresenentmentConnection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  edges?: Maybe<Array<Maybe<ShopifySourceProductPricePresentmentEdge>>>
}

export type ShopifySourceProductVariantPricePresenentmentConnectionFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
}

export type ShopifySourceProductVariantPricePresenentmentConnectionSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
}

export type ShopifySourceProductVariantSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  availableForSale?: InputMaybe<SortOrder>
  compareAtPriceV2?: InputMaybe<ShopifyMoneyV2Sorting>
  currentlyNotInStock?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  image?: InputMaybe<ShopifySourceImageSorting>
  priceV2?: InputMaybe<ShopifyMoneyV2Sorting>
  requiresShipping?: InputMaybe<SortOrder>
  sku?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
  weight?: InputMaybe<SortOrder>
  weightUnit?: InputMaybe<SortOrder>
}

export type ShopifySourceProductVariantsConnection = {
  __typename?: 'ShopifySourceProductVariantsConnection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  edges?: Maybe<Array<Maybe<ShopifySourceProductVariantEdge>>>
  pageInfo?: Maybe<PageInfo>
}

export type ShopifySourceProductVariantsConnectionFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  pageInfo?: InputMaybe<PageInfoFilter>
}

export type ShopifySourceProductVariantsConnectionSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  pageInfo?: InputMaybe<PageInfoSorting>
}

export type ShopifySourceProductsConnection = {
  __typename?: 'ShopifySourceProductsConnection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  edges?: Maybe<Array<Maybe<ShopifySourceProductEdge>>>
  pageInfo?: Maybe<PageInfo>
}

export type ShopifySourceProductsConnectionFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  pageInfo?: InputMaybe<PageInfoFilter>
}

export type ShopifySourceProductsConnectionSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  pageInfo?: InputMaybe<PageInfoSorting>
}

export type ShopifySourceSelectedOption = {
  __typename?: 'ShopifySourceSelectedOption'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type ShopifySourceSelectedOptionFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  value?: InputMaybe<StringFilter>
}

export type ShopifySourceSelectedOptionSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  value?: InputMaybe<SortOrder>
}

export type Slug = {
  __typename?: 'Slug'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  current?: Maybe<Scalars['String']>
}

export type SlugFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  current?: InputMaybe<StringFilter>
}

export type SlugSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  current?: InputMaybe<SortOrder>
}

export type SocialLinks = {
  __typename?: 'SocialLinks'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** Use fully qualified URLs */
  facebook?: Maybe<Scalars['String']>
  /** Use fully qualified URLs */
  instagram?: Maybe<Scalars['String']>
  /** Use fully qualified URLs */
  pinterest?: Maybe<Scalars['String']>
  /** Use fully qualified URLs */
  twitter?: Maybe<Scalars['String']>
}

export type SocialLinksFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  facebook?: InputMaybe<StringFilter>
  instagram?: InputMaybe<StringFilter>
  pinterest?: InputMaybe<StringFilter>
  twitter?: InputMaybe<StringFilter>
}

export type SocialLinksSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  facebook?: InputMaybe<SortOrder>
  instagram?: InputMaybe<SortOrder>
  pinterest?: InputMaybe<SortOrder>
  twitter?: InputMaybe<SortOrder>
}

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = 'ASC',
  /** Sorts on the value in descending order. */
  Desc = 'DESC',
}

export type Span = {
  __typename?: 'Span'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  marks?: Maybe<Array<Maybe<Scalars['String']>>>
  text?: Maybe<Scalars['String']>
}

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['String']>
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['String']>
  nin?: InputMaybe<Array<Scalars['String']>>
}

export type Theme = Document & {
  __typename?: 'Theme'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Build complex menus from the module area, assign them here to update the menu everywhere */
  footerMenu?: Maybe<Footer>
  /** Build complex menus from the menu area, assign them here to update the menu everywhere */
  headerMenu?: Maybe<Header>
  /** Select the page you want to be the homepage on the marketing site. */
  homepage?: Maybe<Page>
  themeTitle?: Maybe<Scalars['String']>
}

export type ThemeFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  footerMenu?: InputMaybe<FooterFilter>
  headerMenu?: InputMaybe<HeaderFilter>
  homepage?: InputMaybe<PageFilter>
  themeTitle?: InputMaybe<StringFilter>
}

export type ThemeSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  themeTitle?: InputMaybe<SortOrder>
}

export type LinkExternallFieldsFragment = {
  __typename: 'LinkExternal'
  title?: string | null | undefined
  url?: string | null | undefined
  newWindow?: boolean | null | undefined
}

export type LinkInternalFieldsFragment = {
  __typename: 'LinkInternal'
  reference?:
    | {__typename?: 'Author'}
    | {
        __typename: 'Page'
        title?: string | null | undefined
        slug?:
          | {__typename?: 'Slug'; current?: string | null | undefined}
          | null
          | undefined
      }
    | {__typename?: 'Post'}
    | {
        __typename: 'ShopifyCollection'
        shopifyId?: string | null | undefined
        title?: string | null | undefined
        subtitle?: string | null | undefined
        handle?: string | null | undefined
      }
    | {__typename?: 'ShopifyProduct'}
    | null
    | undefined
}

export type NavigationQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type NavigationQuery = {
  __typename?: 'RootQuery'
  Navigation?:
    | {
        __typename: 'Navigation'
        title?: string | null | undefined
        link?:
          | {
              __typename: 'LinkInternal'
              reference?:
                | {__typename?: 'Author'}
                | {
                    __typename: 'Page'
                    title?: string | null | undefined
                    slug?:
                      | {
                          __typename?: 'Slug'
                          current?: string | null | undefined
                        }
                      | null
                      | undefined
                  }
                | {__typename?: 'Post'}
                | {
                    __typename: 'ShopifyCollection'
                    shopifyId?: string | null | undefined
                    title?: string | null | undefined
                    subtitle?: string | null | undefined
                    handle?: string | null | undefined
                  }
                | {__typename?: 'ShopifyProduct'}
                | null
                | undefined
            }
          | null
          | undefined
        items?:
          | Array<
              | {
                  __typename: 'LinkExternal'
                  title?: string | null | undefined
                  url?: string | null | undefined
                  newWindow?: boolean | null | undefined
                }
              | {
                  __typename: 'LinkInternal'
                  reference?:
                    | {__typename?: 'Author'}
                    | {
                        __typename: 'Page'
                        title?: string | null | undefined
                        slug?:
                          | {
                              __typename?: 'Slug'
                              current?: string | null | undefined
                            }
                          | null
                          | undefined
                      }
                    | {__typename?: 'Post'}
                    | {
                        __typename: 'ShopifyCollection'
                        shopifyId?: string | null | undefined
                        title?: string | null | undefined
                        subtitle?: string | null | undefined
                        handle?: string | null | undefined
                      }
                    | {__typename?: 'ShopifyProduct'}
                    | null
                    | undefined
                }
              | {
                  __typename?: 'NavigationGroup'
                  navigation?:
                    | {
                        __typename: 'Navigation'
                        title?: string | null | undefined
                        link?:
                          | {
                              __typename: 'LinkInternal'
                              reference?:
                                | {__typename?: 'Author'}
                                | {
                                    __typename: 'Page'
                                    title?: string | null | undefined
                                    slug?:
                                      | {
                                          __typename?: 'Slug'
                                          current?: string | null | undefined
                                        }
                                      | null
                                      | undefined
                                  }
                                | {__typename?: 'Post'}
                                | {
                                    __typename: 'ShopifyCollection'
                                    shopifyId?: string | null | undefined
                                    title?: string | null | undefined
                                    subtitle?: string | null | undefined
                                    handle?: string | null | undefined
                                  }
                                | {__typename?: 'ShopifyProduct'}
                                | null
                                | undefined
                            }
                          | null
                          | undefined
                      }
                    | null
                    | undefined
                }
              | null
              | undefined
            >
          | null
          | undefined
      }
    | null
    | undefined
}

export type NavigationFieldsFragment = {
  __typename: 'Navigation'
  title?: string | null | undefined
  link?:
    | {
        __typename: 'LinkInternal'
        reference?:
          | {__typename?: 'Author'}
          | {
              __typename: 'Page'
              title?: string | null | undefined
              slug?:
                | {__typename?: 'Slug'; current?: string | null | undefined}
                | null
                | undefined
            }
          | {__typename?: 'Post'}
          | {
              __typename: 'ShopifyCollection'
              shopifyId?: string | null | undefined
              title?: string | null | undefined
              subtitle?: string | null | undefined
              handle?: string | null | undefined
            }
          | {__typename?: 'ShopifyProduct'}
          | null
          | undefined
      }
    | null
    | undefined
  items?:
    | Array<
        | {
            __typename: 'LinkExternal'
            title?: string | null | undefined
            url?: string | null | undefined
            newWindow?: boolean | null | undefined
          }
        | {
            __typename: 'LinkInternal'
            reference?:
              | {__typename?: 'Author'}
              | {
                  __typename: 'Page'
                  title?: string | null | undefined
                  slug?:
                    | {__typename?: 'Slug'; current?: string | null | undefined}
                    | null
                    | undefined
                }
              | {__typename?: 'Post'}
              | {
                  __typename: 'ShopifyCollection'
                  shopifyId?: string | null | undefined
                  title?: string | null | undefined
                  subtitle?: string | null | undefined
                  handle?: string | null | undefined
                }
              | {__typename?: 'ShopifyProduct'}
              | null
              | undefined
          }
        | {
            __typename?: 'NavigationGroup'
            navigation?:
              | {
                  __typename: 'Navigation'
                  title?: string | null | undefined
                  link?:
                    | {
                        __typename: 'LinkInternal'
                        reference?:
                          | {__typename?: 'Author'}
                          | {
                              __typename: 'Page'
                              title?: string | null | undefined
                              slug?:
                                | {
                                    __typename?: 'Slug'
                                    current?: string | null | undefined
                                  }
                                | null
                                | undefined
                            }
                          | {__typename?: 'Post'}
                          | {
                              __typename: 'ShopifyCollection'
                              shopifyId?: string | null | undefined
                              title?: string | null | undefined
                              subtitle?: string | null | undefined
                              handle?: string | null | undefined
                            }
                          | {__typename?: 'ShopifyProduct'}
                          | null
                          | undefined
                      }
                    | null
                    | undefined
                }
              | null
              | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export type ThemeFieldsFragment = {
  __typename?: 'Theme'
  headerMenu?:
    | {__typename?: 'Header'; _id?: string | null | undefined}
    | null
    | undefined
  footerMenu?:
    | {__typename?: 'Footer'; _id?: string | null | undefined}
    | null
    | undefined
}

export type FooterQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type FooterQuery = {
  __typename?: 'RootQuery'
  Footer?:
    | {
        __typename?: 'Footer'
        phone?: string | null | undefined
        email?: string | null | undefined
        social?:
          | {
              __typename?: 'SocialLinks'
              instagram?: string | null | undefined
              facebook?: string | null | undefined
              pinterest?: string | null | undefined
              twitter?: string | null | undefined
            }
          | null
          | undefined
        navigations?:
          | Array<
              | {
                  __typename?: 'NavigationGroup'
                  navigation?:
                    | {
                        __typename: 'Navigation'
                        title?: string | null | undefined
                        link?:
                          | {
                              __typename: 'LinkInternal'
                              reference?:
                                | {__typename?: 'Author'}
                                | {
                                    __typename: 'Page'
                                    title?: string | null | undefined
                                    slug?:
                                      | {
                                          __typename?: 'Slug'
                                          current?: string | null | undefined
                                        }
                                      | null
                                      | undefined
                                  }
                                | {__typename?: 'Post'}
                                | {
                                    __typename: 'ShopifyCollection'
                                    shopifyId?: string | null | undefined
                                    title?: string | null | undefined
                                    subtitle?: string | null | undefined
                                    handle?: string | null | undefined
                                  }
                                | {__typename?: 'ShopifyProduct'}
                                | null
                                | undefined
                            }
                          | null
                          | undefined
                        items?:
                          | Array<
                              | {
                                  __typename: 'LinkExternal'
                                  title?: string | null | undefined
                                  url?: string | null | undefined
                                  newWindow?: boolean | null | undefined
                                }
                              | {
                                  __typename: 'LinkInternal'
                                  reference?:
                                    | {__typename?: 'Author'}
                                    | {
                                        __typename: 'Page'
                                        title?: string | null | undefined
                                        slug?:
                                          | {
                                              __typename?: 'Slug'
                                              current?:
                                                | string
                                                | null
                                                | undefined
                                            }
                                          | null
                                          | undefined
                                      }
                                    | {__typename?: 'Post'}
                                    | {
                                        __typename: 'ShopifyCollection'
                                        shopifyId?: string | null | undefined
                                        title?: string | null | undefined
                                        subtitle?: string | null | undefined
                                        handle?: string | null | undefined
                                      }
                                    | {__typename?: 'ShopifyProduct'}
                                    | null
                                    | undefined
                                }
                              | {
                                  __typename?: 'NavigationGroup'
                                  navigation?:
                                    | {
                                        __typename: 'Navigation'
                                        title?: string | null | undefined
                                        link?:
                                          | {
                                              __typename: 'LinkInternal'
                                              reference?:
                                                | {__typename?: 'Author'}
                                                | {
                                                    __typename: 'Page'
                                                    title?:
                                                      | string
                                                      | null
                                                      | undefined
                                                    slug?:
                                                      | {
                                                          __typename?: 'Slug'
                                                          current?:
                                                            | string
                                                            | null
                                                            | undefined
                                                        }
                                                      | null
                                                      | undefined
                                                  }
                                                | {__typename?: 'Post'}
                                                | {
                                                    __typename: 'ShopifyCollection'
                                                    shopifyId?:
                                                      | string
                                                      | null
                                                      | undefined
                                                    title?:
                                                      | string
                                                      | null
                                                      | undefined
                                                    subtitle?:
                                                      | string
                                                      | null
                                                      | undefined
                                                    handle?:
                                                      | string
                                                      | null
                                                      | undefined
                                                  }
                                                | {
                                                    __typename?: 'ShopifyProduct'
                                                  }
                                                | null
                                                | undefined
                                            }
                                          | null
                                          | undefined
                                      }
                                    | null
                                    | undefined
                                }
                              | null
                              | undefined
                            >
                          | null
                          | undefined
                      }
                    | null
                    | undefined
                }
              | null
              | undefined
            >
          | null
          | undefined
      }
    | null
    | undefined
}

export type GlobalConfigQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type GlobalConfigQuery = {
  __typename?: 'RootQuery'
  GlobalConfig?:
    | {
        __typename?: 'GlobalConfig'
        _id?: string | null | undefined
        theme?:
          | {
              __typename?: 'Theme'
              headerMenu?:
                | {__typename?: 'Header'; _id?: string | null | undefined}
                | null
                | undefined
              footerMenu?:
                | {__typename?: 'Footer'; _id?: string | null | undefined}
                | null
                | undefined
            }
          | null
          | undefined
        stagingTheme?:
          | {
              __typename?: 'Theme'
              headerMenu?:
                | {__typename?: 'Header'; _id?: string | null | undefined}
                | null
                | undefined
              footerMenu?:
                | {__typename?: 'Footer'; _id?: string | null | undefined}
                | null
                | undefined
            }
          | null
          | undefined
      }
    | null
    | undefined
}

export type HeaderQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type HeaderQuery = {
  __typename?: 'RootQuery'
  Header?:
    | {
        __typename?: 'Header'
        name?: string | null | undefined
        navigations?:
          | Array<
              | {
                  __typename?: 'NavigationGroup'
                  navigation?:
                    | {
                        __typename: 'Navigation'
                        title?: string | null | undefined
                        link?:
                          | {
                              __typename: 'LinkInternal'
                              reference?:
                                | {__typename?: 'Author'}
                                | {
                                    __typename: 'Page'
                                    title?: string | null | undefined
                                    slug?:
                                      | {
                                          __typename?: 'Slug'
                                          current?: string | null | undefined
                                        }
                                      | null
                                      | undefined
                                  }
                                | {__typename?: 'Post'}
                                | {
                                    __typename: 'ShopifyCollection'
                                    shopifyId?: string | null | undefined
                                    title?: string | null | undefined
                                    subtitle?: string | null | undefined
                                    handle?: string | null | undefined
                                  }
                                | {__typename?: 'ShopifyProduct'}
                                | null
                                | undefined
                            }
                          | null
                          | undefined
                        items?:
                          | Array<
                              | {
                                  __typename: 'LinkExternal'
                                  title?: string | null | undefined
                                  url?: string | null | undefined
                                  newWindow?: boolean | null | undefined
                                }
                              | {
                                  __typename: 'LinkInternal'
                                  reference?:
                                    | {__typename?: 'Author'}
                                    | {
                                        __typename: 'Page'
                                        title?: string | null | undefined
                                        slug?:
                                          | {
                                              __typename?: 'Slug'
                                              current?:
                                                | string
                                                | null
                                                | undefined
                                            }
                                          | null
                                          | undefined
                                      }
                                    | {__typename?: 'Post'}
                                    | {
                                        __typename: 'ShopifyCollection'
                                        shopifyId?: string | null | undefined
                                        title?: string | null | undefined
                                        subtitle?: string | null | undefined
                                        handle?: string | null | undefined
                                      }
                                    | {__typename?: 'ShopifyProduct'}
                                    | null
                                    | undefined
                                }
                              | {
                                  __typename?: 'NavigationGroup'
                                  navigation?:
                                    | {
                                        __typename: 'Navigation'
                                        title?: string | null | undefined
                                        link?:
                                          | {
                                              __typename: 'LinkInternal'
                                              reference?:
                                                | {__typename?: 'Author'}
                                                | {
                                                    __typename: 'Page'
                                                    title?:
                                                      | string
                                                      | null
                                                      | undefined
                                                    slug?:
                                                      | {
                                                          __typename?: 'Slug'
                                                          current?:
                                                            | string
                                                            | null
                                                            | undefined
                                                        }
                                                      | null
                                                      | undefined
                                                  }
                                                | {__typename?: 'Post'}
                                                | {
                                                    __typename: 'ShopifyCollection'
                                                    shopifyId?:
                                                      | string
                                                      | null
                                                      | undefined
                                                    title?:
                                                      | string
                                                      | null
                                                      | undefined
                                                    subtitle?:
                                                      | string
                                                      | null
                                                      | undefined
                                                    handle?:
                                                      | string
                                                      | null
                                                      | undefined
                                                  }
                                                | {
                                                    __typename?: 'ShopifyProduct'
                                                  }
                                                | null
                                                | undefined
                                            }
                                          | null
                                          | undefined
                                      }
                                    | null
                                    | undefined
                                }
                              | null
                              | undefined
                            >
                          | null
                          | undefined
                      }
                    | null
                    | undefined
                }
              | null
              | undefined
            >
          | null
          | undefined
      }
    | null
    | undefined
}

export type NavigationsQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>
}>

export type NavigationsQuery = {
  __typename?: 'RootQuery'
  allNavigation: Array<{
    __typename: 'Navigation'
    title?: string | null | undefined
    link?:
      | {
          __typename: 'LinkInternal'
          reference?:
            | {__typename?: 'Author'}
            | {
                __typename: 'Page'
                title?: string | null | undefined
                slug?:
                  | {__typename?: 'Slug'; current?: string | null | undefined}
                  | null
                  | undefined
              }
            | {__typename?: 'Post'}
            | {
                __typename: 'ShopifyCollection'
                shopifyId?: string | null | undefined
                title?: string | null | undefined
                subtitle?: string | null | undefined
                handle?: string | null | undefined
              }
            | {__typename?: 'ShopifyProduct'}
            | null
            | undefined
        }
      | null
      | undefined
    items?:
      | Array<
          | {
              __typename: 'LinkExternal'
              title?: string | null | undefined
              url?: string | null | undefined
              newWindow?: boolean | null | undefined
            }
          | {
              __typename: 'LinkInternal'
              reference?:
                | {__typename?: 'Author'}
                | {
                    __typename: 'Page'
                    title?: string | null | undefined
                    slug?:
                      | {
                          __typename?: 'Slug'
                          current?: string | null | undefined
                        }
                      | null
                      | undefined
                  }
                | {__typename?: 'Post'}
                | {
                    __typename: 'ShopifyCollection'
                    shopifyId?: string | null | undefined
                    title?: string | null | undefined
                    subtitle?: string | null | undefined
                    handle?: string | null | undefined
                  }
                | {__typename?: 'ShopifyProduct'}
                | null
                | undefined
            }
          | {
              __typename?: 'NavigationGroup'
              navigation?:
                | {
                    __typename: 'Navigation'
                    title?: string | null | undefined
                    link?:
                      | {
                          __typename: 'LinkInternal'
                          reference?:
                            | {__typename?: 'Author'}
                            | {
                                __typename: 'Page'
                                title?: string | null | undefined
                                slug?:
                                  | {
                                      __typename?: 'Slug'
                                      current?: string | null | undefined
                                    }
                                  | null
                                  | undefined
                              }
                            | {__typename?: 'Post'}
                            | {
                                __typename: 'ShopifyCollection'
                                shopifyId?: string | null | undefined
                                title?: string | null | undefined
                                subtitle?: string | null | undefined
                                handle?: string | null | undefined
                              }
                            | {__typename?: 'ShopifyProduct'}
                            | null
                            | undefined
                        }
                      | null
                      | undefined
                  }
                | null
                | undefined
            }
          | null
          | undefined
        >
      | null
      | undefined
  }>
}

export const LinkInternalFieldsFragmentDoc = gql`
  fragment LinkInternalFields on LinkInternal {
    __typename
    reference {
      ... on ShopifyCollection {
        __typename
        shopifyId
        title
        subtitle
        handle
      }
      ... on Page {
        __typename
        title
        slug {
          current
        }
      }
    }
  }
`
export const LinkExternallFieldsFragmentDoc = gql`
  fragment LinkExternallFields on LinkExternal {
    __typename
    title
    url
    newWindow
  }
`
export const NavigationFieldsFragmentDoc = gql`
  fragment NavigationFields on Navigation {
    __typename
    title
    link {
      ...LinkInternalFields
    }
    items {
      ...LinkInternalFields
      ...LinkExternallFields
      ... on NavigationGroup {
        navigation {
          __typename
          title
          link {
            ...LinkInternalFields
          }
        }
      }
    }
  }
  ${LinkInternalFieldsFragmentDoc}
  ${LinkExternallFieldsFragmentDoc}
`
export const ThemeFieldsFragmentDoc = gql`
  fragment ThemeFields on Theme {
    headerMenu {
      _id
    }
    footerMenu {
      _id
    }
  }
`
export const NavigationDocument = gql`
  query Navigation($id: ID!) {
    Navigation(id: $id) {
      ...NavigationFields
    }
  }
  ${NavigationFieldsFragmentDoc}
`
export const FooterDocument = gql`
  query Footer($id: ID!) {
    Footer(id: $id) {
      phone
      email
      social {
        instagram
        facebook
        pinterest
        twitter
      }
      navigations {
        navigation {
          ...NavigationFields
        }
      }
    }
  }
  ${NavigationFieldsFragmentDoc}
`
export const GlobalConfigDocument = gql`
  query GlobalConfig($id: ID!) {
    GlobalConfig(id: $id) {
      _id
      theme {
        ...ThemeFields
      }
      stagingTheme {
        ...ThemeFields
      }
    }
  }
  ${ThemeFieldsFragmentDoc}
`
export const HeaderDocument = gql`
  query Header($id: ID!) {
    Header(id: $id) {
      name
      navigations {
        navigation {
          ...NavigationFields
        }
      }
    }
  }
  ${NavigationFieldsFragmentDoc}
`
export const NavigationsDocument = gql`
  query Navigations($slug: String) {
    allNavigation(where: {slug: {current: {eq: $slug}}}) {
      ...NavigationFields
    }
  }
  ${NavigationFieldsFragmentDoc}
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action()

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    Navigation(
      variables: NavigationQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<NavigationQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<NavigationQuery>(NavigationDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Navigation',
      )
    },
    Footer(
      variables: FooterQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<FooterQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<FooterQuery>(FooterDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Footer',
      )
    },
    GlobalConfig(
      variables: GlobalConfigQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GlobalConfigQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<GlobalConfigQuery>(GlobalConfigDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'GlobalConfig',
      )
    },
    Header(
      variables: HeaderQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<HeaderQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<HeaderQuery>(HeaderDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Header',
      )
    },
    Navigations(
      variables?: NavigationsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<NavigationsQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<NavigationsQuery>(NavigationsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Navigations',
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
