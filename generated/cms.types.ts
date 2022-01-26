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
  handle?: Maybe<Slug>
  /** Only used internally in the CMS */
  name?: Maybe<Scalars['String']>
  navigations?: Maybe<Array<Maybe<Navigation>>>
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
  handle?: InputMaybe<SlugFilter>
  name?: InputMaybe<StringFilter>
}

export type FooterSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  handle?: InputMaybe<SlugSorting>
  name?: InputMaybe<SortOrder>
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

export type Link = {
  __typename?: 'Link'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** Optional internal reference to the page */
  internalReference?: Maybe<Page>
  /** Use fully qualified URLs for external link & relative URLs for internal links */
  url?: Maybe<Scalars['String']>
}

export type LinkFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  internalReference?: InputMaybe<PageFilter>
  url?: InputMaybe<StringFilter>
}

export type LinkSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  url?: InputMaybe<SortOrder>
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
  description?: Maybe<Scalars['String']>
  image?: Maybe<ImageBlock>
  items?: Maybe<Array<Maybe<NavigationItem>>>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Slug>
  subtitle?: Maybe<Scalars['String']>
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
  description?: InputMaybe<StringFilter>
  image?: InputMaybe<ImageBlockFilter>
  name?: InputMaybe<StringFilter>
  slug?: InputMaybe<SlugFilter>
  subtitle?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
}

export type NavigationItem = {
  __typename?: 'NavigationItem'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  image?: Maybe<ImageBlock>
  link?: Maybe<Link>
  subtitle?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type NavigationItemFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  image?: InputMaybe<ImageBlockFilter>
  link?: InputMaybe<LinkFilter>
  subtitle?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
}

export type NavigationItemSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  image?: InputMaybe<ImageBlockSorting>
  link?: InputMaybe<LinkSorting>
  subtitle?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
}

export type NavigationSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  image?: InputMaybe<ImageBlockSorting>
  name?: InputMaybe<SortOrder>
  slug?: InputMaybe<SlugSorting>
  subtitle?: InputMaybe<SortOrder>
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
  Navigation?: Maybe<Navigation>
  Page?: Maybe<Page>
  Post?: Maybe<Post>
  PostCategory?: Maybe<PostCategory>
  SanityFileAsset?: Maybe<SanityFileAsset>
  SanityImageAsset?: Maybe<SanityImageAsset>
  Theme?: Maybe<Theme>
  allAuthor: Array<Author>
  allDocument: Array<Document>
  allFooter: Array<Footer>
  allGlobalConfig: Array<GlobalConfig>
  allNavigation: Array<Navigation>
  allPage: Array<Page>
  allPost: Array<Post>
  allPostCategory: Array<PostCategory>
  allSanityFileAsset: Array<SanityFileAsset>
  allSanityImageAsset: Array<SanityImageAsset>
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

export type FooterQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type FooterQuery = {
  __typename?: 'RootQuery'
  Footer?:
    | {
        __typename?: 'Footer'
        navigations?:
          | Array<
              | {
                  __typename?: 'Navigation'
                  name?: string | null | undefined
                  title?: string | null | undefined
                  subtitle?: string | null | undefined
                  description?: string | null | undefined
                  items?:
                    | Array<
                        | {
                            __typename?: 'NavigationItem'
                            title?: string | null | undefined
                            subtitle?: string | null | undefined
                            link?:
                              | {
                                  __typename?: 'Link'
                                  url?: string | null | undefined
                                }
                              | null
                              | undefined
                            image?:
                              | {
                                  __typename?: 'ImageBlock'
                                  caption?: string | null | undefined
                                  asset?:
                                    | {
                                        __typename?: 'SanityImageAsset'
                                        url?: string | null | undefined
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
            >
          | null
          | undefined
      }
    | null
    | undefined
}

export type GlobalConfigsQueryVariables = Exact<{[key: string]: never}>

export type GlobalConfigsQuery = {
  __typename?: 'RootQuery'
  allGlobalConfig: Array<{
    __typename?: 'GlobalConfig'
    theme?:
      | {
          __typename?: 'Theme'
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
          footerMenu?:
            | {__typename?: 'Footer'; _id?: string | null | undefined}
            | null
            | undefined
        }
      | null
      | undefined
  }>
}

export type NavigationsQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>
}>

export type NavigationsQuery = {
  __typename?: 'RootQuery'
  allNavigation: Array<{
    __typename?: 'Navigation'
    name?: string | null | undefined
    title?: string | null | undefined
    subtitle?: string | null | undefined
    image?:
      | {
          __typename?: 'ImageBlock'
          caption?: string | null | undefined
          asset?:
            | {__typename?: 'SanityImageAsset'; url?: string | null | undefined}
            | null
            | undefined
        }
      | null
      | undefined
    items?:
      | Array<
          | {
              __typename?: 'NavigationItem'
              title?: string | null | undefined
              subtitle?: string | null | undefined
              link?:
                | {__typename?: 'Link'; url?: string | null | undefined}
                | null
                | undefined
              image?:
                | {
                    __typename?: 'ImageBlock'
                    caption?: string | null | undefined
                    asset?:
                      | {
                          __typename?: 'SanityImageAsset'
                          url?: string | null | undefined
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

export const FooterDocument = gql`
  query Footer($id: ID!) {
    Footer(id: $id) {
      navigations {
        name
        title
        subtitle
        description
        items {
          title
          subtitle
          link {
            url
          }
          image {
            caption
            asset {
              url
            }
          }
        }
      }
    }
  }
`
export const GlobalConfigsDocument = gql`
  query GlobalConfigs {
    allGlobalConfig {
      theme {
        footerMenu {
          _id
        }
      }
      stagingTheme {
        footerMenu {
          _id
        }
      }
    }
  }
`
export const NavigationsDocument = gql`
  query Navigations($slug: String) {
    allNavigation(where: {slug: {current: {eq: $slug}}}) {
      name
      title
      subtitle
      image {
        caption
        asset {
          url
        }
      }
      items {
        title
        subtitle
        link {
          url
        }
        image {
          caption
          asset {
            url
          }
        }
      }
    }
  }
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
    GlobalConfigs(
      variables?: GlobalConfigsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GlobalConfigsQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<GlobalConfigsQuery>(GlobalConfigsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'GlobalConfigs',
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
