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
  /**
   * Represents an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-encoded date and time string.
   * For example, 3:30 pm on September 7, 2019 in the time zone of UTC (Coordinated Universal Time) is
   * represented as `"2019-09-07T15:50:00Z`".
   *
   */
  DateTime: any
  /**
   * A signed decimal number, which supports arbitrary precision and is serialized as a string.
   *
   * Example values: `"29.99"`, `"29.999"`.
   *
   */
  Decimal: any
  /**
   * A string containing HTML code. Refer to the [HTML spec](https://html.spec.whatwg.org/#elements-3) for a
   * complete list of HTML elements.
   *
   * Example value: `"<p>Grey cotton knit sweater.</p>"`.
   *
   */
  HTML: any
  /**
   * A [JSON](https://www.json.org/json-en.html) object.
   *
   * Example value:
   * `{
   *   "product": {
   *     "id": "gid://shopify/Product/1346443542550",
   *     "title": "White T-shirt",
   *     "options": [{
   *       "name": "Size",
   *       "values": ["M", "L"]
   *     }]
   *   }
   * }`
   *
   */
  JSON: any
  /** A monetary value string without a currency symbol or code. Example value: `"100.57"`. */
  Money: any
  /**
   * Represents an [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) and
   * [RFC 3987](https://datatracker.ietf.org/doc/html/rfc3987)-compliant URI string.
   *
   * For example, `"https://johns-apparel.myshopify.com"` is a valid URL. It includes a scheme (`https`) and a host
   * (`johns-apparel.myshopify.com`).
   *
   */
  URL: any
}

/**
 * A version of the API, as defined by [Shopify API versioning](https://shopify.dev/api/usage/versioning).
 * Versions are commonly referred to by their handle (for example, `2021-10`).
 *
 */
export type ApiVersion = {
  __typename?: 'ApiVersion'
  /** The human-readable name of the version. */
  displayName: Scalars['String']
  /** The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle. */
  handle: Scalars['String']
  /** Whether the version is actively supported by Shopify. Supported API versions are guaranteed to be stable. Unsupported API versions include unstable, release candidate, and end-of-life versions that are marked as unsupported. For more information, refer to [Versioning](https://shopify.dev/api/usage/versioning). */
  supported: Scalars['Boolean']
}

/** Details about the gift card used on the checkout. */
export type AppliedGiftCard = Node & {
  __typename?: 'AppliedGiftCard'
  /**
   * The amount that was taken from the gift card by applying it.
   * @deprecated Use `amountUsedV2` instead
   */
  amountUsed: Scalars['Money']
  /** The amount that was taken from the gift card by applying it. */
  amountUsedV2: MoneyV2
  /**
   * The amount left on the gift card.
   * @deprecated Use `balanceV2` instead
   */
  balance: Scalars['Money']
  /** The amount left on the gift card. */
  balanceV2: MoneyV2
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The last characters of the gift card. */
  lastCharacters: Scalars['String']
  /** The amount that was applied to the checkout in its currency. */
  presentmentAmountUsed: MoneyV2
}

/** An article in an online store blog. */
export type Article = HasMetafields &
  Node &
  OnlineStorePublishable & {
    __typename?: 'Article'
    /**
     * The article's author.
     * @deprecated Use `authorV2` instead
     */
    author: ArticleAuthor
    /** The article's author. */
    authorV2?: Maybe<ArticleAuthor>
    /** The blog that the article belongs to. */
    blog: Blog
    /** List of comments posted on the article. */
    comments: CommentConnection
    /** Stripped content of the article, single line with HTML tags removed. */
    content: Scalars['String']
    /** The content of the article, complete with HTML formatting. */
    contentHtml: Scalars['HTML']
    /** Stripped excerpt of the article, single line with HTML tags removed. */
    excerpt?: Maybe<Scalars['String']>
    /** The excerpt of the article, complete with HTML formatting. */
    excerptHtml?: Maybe<Scalars['HTML']>
    /**
     * A human-friendly unique string for the Article automatically generated from its title.
     *
     */
    handle: Scalars['String']
    /** A globally-unique identifier. */
    id: Scalars['ID']
    /** The image associated with the article. */
    image?: Maybe<Image>
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe<Metafield>
    /**
     * A paginated list of metafields associated with the resource.
     * @deprecated The `metafields` field will be removed in the future in favor of using [aliases](https://graphql.org/learn/queries/#aliases) with the `metafield` field.
     *
     */
    metafields: MetafieldConnection
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl?: Maybe<Scalars['URL']>
    /** The date and time when the article was published. */
    publishedAt: Scalars['DateTime']
    /** The article’s SEO information. */
    seo?: Maybe<Seo>
    /** A categorization that a article can be tagged with. */
    tags: Array<Scalars['String']>
    /** The article’s name. */
    title: Scalars['String']
  }

/** An article in an online store blog. */
export type ArticleCommentsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** An article in an online store blog. */
export type ArticleContentArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>
}

/** An article in an online store blog. */
export type ArticleExcerptArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>
}

/** An article in an online store blog. */
export type ArticleMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** An article in an online store blog. */
export type ArticleMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** The author of an article. */
export type ArticleAuthor = {
  __typename?: 'ArticleAuthor'
  /** The author's bio. */
  bio?: Maybe<Scalars['String']>
  /** The author’s email. */
  email: Scalars['String']
  /** The author's first name. */
  firstName: Scalars['String']
  /** The author's last name. */
  lastName: Scalars['String']
  /** The author's full name. */
  name: Scalars['String']
}

/**
 * An auto-generated type for paginating through multiple Articles.
 *
 */
export type ArticleConnection = {
  __typename?: 'ArticleConnection'
  /** A list of edges. */
  edges: Array<ArticleEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one Article and a cursor during pagination.
 *
 */
export type ArticleEdge = {
  __typename?: 'ArticleEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ArticleEdge. */
  node: Article
}

/** The set of valid sort keys for the Article query. */
export enum ArticleSortKeys {
  /** Sort by the `author` value. */
  Author = 'AUTHOR',
  /** Sort by the `blog_title` value. */
  BlogTitle = 'BLOG_TITLE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `published_at` value. */
  PublishedAt = 'PUBLISHED_AT',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
}

/** Represents a generic custom attribute. */
export type Attribute = {
  __typename?: 'Attribute'
  /** Key or name of the attribute. */
  key: Scalars['String']
  /** Value of the attribute. */
  value?: Maybe<Scalars['String']>
}

/** Specifies the input fields required for an attribute. */
export type AttributeInput = {
  /** Key or name of the attribute. */
  key: Scalars['String']
  /** Value of the attribute. */
  value: Scalars['String']
}

/**
 * Automatic discount applications capture the intentions of a discount that was automatically applied.
 *
 */
export type AutomaticDiscountApplication = DiscountApplication & {
  __typename?: 'AutomaticDiscountApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType
  /** The title of the application. */
  title: Scalars['String']
  /** The value of the discount application. */
  value: PricingValue
}

/** A collection of available shipping rates for a checkout. */
export type AvailableShippingRates = {
  __typename?: 'AvailableShippingRates'
  /**
   * Whether or not the shipping rates are ready.
   * The `shippingRates` field is `null` when this value is `false`.
   * This field should be polled until its value becomes `true`.
   *
   */
  ready: Scalars['Boolean']
  /** The fetched shipping rates. `null` until the `ready` field is `true`. */
  shippingRates?: Maybe<Array<ShippingRate>>
}

/** An online store blog. */
export type Blog = HasMetafields &
  Node &
  OnlineStorePublishable & {
    __typename?: 'Blog'
    /** Find an article by its handle. */
    articleByHandle?: Maybe<Article>
    /** List of the blog's articles. */
    articles: ArticleConnection
    /** The authors who have contributed to the blog. */
    authors: Array<ArticleAuthor>
    /**
     * A human-friendly unique string for the Blog automatically generated from its title.
     *
     */
    handle: Scalars['String']
    /** A globally-unique identifier. */
    id: Scalars['ID']
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe<Metafield>
    /**
     * A paginated list of metafields associated with the resource.
     * @deprecated The `metafields` field will be removed in the future in favor of using [aliases](https://graphql.org/learn/queries/#aliases) with the `metafield` field.
     *
     */
    metafields: MetafieldConnection
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl?: Maybe<Scalars['URL']>
    /** The blog's SEO information. */
    seo?: Maybe<Seo>
    /** The blogs’s title. */
    title: Scalars['String']
  }

/** An online store blog. */
export type BlogArticleByHandleArgs = {
  handle: Scalars['String']
}

/** An online store blog. */
export type BlogArticlesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<ArticleSortKeys>
}

/** An online store blog. */
export type BlogMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** An online store blog. */
export type BlogMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/**
 * An auto-generated type for paginating through multiple Blogs.
 *
 */
export type BlogConnection = {
  __typename?: 'BlogConnection'
  /** A list of edges. */
  edges: Array<BlogEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one Blog and a cursor during pagination.
 *
 */
export type BlogEdge = {
  __typename?: 'BlogEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of BlogEdge. */
  node: Blog
}

/** The set of valid sort keys for the Blog query. */
export enum BlogSortKeys {
  /** Sort by the `handle` value. */
  Handle = 'HANDLE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
}

/** Card brand, such as Visa or Mastercard, which can be used for payments. */
export enum CardBrand {
  /** American Express. */
  AmericanExpress = 'AMERICAN_EXPRESS',
  /** Diners Club. */
  DinersClub = 'DINERS_CLUB',
  /** Discover. */
  Discover = 'DISCOVER',
  /** JCB. */
  Jcb = 'JCB',
  /** Mastercard. */
  Mastercard = 'MASTERCARD',
  /** Visa. */
  Visa = 'VISA',
}

/** A cart represents the merchandise that a buyer intends to purchase, and the estimated cost associated with the cart. To learn how to interact with a cart during a customer's session, refer to [Manage a cart with the Storefront API](https://shopify.dev/custom-storefronts/cart). */
export type Cart = Node & {
  __typename?: 'Cart'
  /** The attributes associated with the cart. Attributes are represented as key-value pairs. */
  attributes: Array<Attribute>
  /** Information about the buyer that is interacting with the cart. */
  buyerIdentity: CartBuyerIdentity
  /** The URL of the checkout for the cart. */
  checkoutUrl: Scalars['URL']
  /** The date and time when the cart was created. */
  createdAt: Scalars['DateTime']
  /** The discount codes that have been applied to the cart. */
  discountCodes: Array<CartDiscountCode>
  /** The estimated costs that the buyer will pay at checkout. The estimated costs are subject to change and changes will be reflected at checkout. The `estimatedCost` field uses the `buyerIdentity` field to determine [international pricing](https://shopify.dev/custom-storefronts/products/international-pricing#create-a-cart). */
  estimatedCost: CartEstimatedCost
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** A list of lines containing information about the items the customer intends to purchase. */
  lines: CartLineConnection
  /** A note that is associated with the cart. For example, the note can be a personalized message to the buyer. */
  note?: Maybe<Scalars['String']>
  /** The date and time when the cart was updated. */
  updatedAt: Scalars['DateTime']
}

/** A cart represents the merchandise that a buyer intends to purchase, and the estimated cost associated with the cart. To learn how to interact with a cart during a customer's session, refer to [Manage a cart with the Storefront API](https://shopify.dev/custom-storefronts/cart). */
export type CartLinesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** Return type for `cartAttributesUpdate` mutation. */
export type CartAttributesUpdatePayload = {
  __typename?: 'CartAttributesUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<Cart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/** The discounts automatically applied to the cart line based on prerequisites that have been met. */
export type CartAutomaticDiscountAllocation = CartDiscountAllocation & {
  __typename?: 'CartAutomaticDiscountAllocation'
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: MoneyV2
  /** The title of the allocated discount. */
  title: Scalars['String']
}

/** Represents information about the buyer that is interacting with the cart. */
export type CartBuyerIdentity = {
  __typename?: 'CartBuyerIdentity'
  /** The country where the buyer is located. */
  countryCode?: Maybe<CountryCode>
  /** The customer account associated with the cart. */
  customer?: Maybe<Customer>
  /** The email address of the buyer that is interacting with the cart. */
  email?: Maybe<Scalars['String']>
  /** The phone number of the buyer that is interacting with the cart. */
  phone?: Maybe<Scalars['String']>
}

/**
 * Specifies the input fields to update the buyer information associated with a cart.
 * Buyer identity is used to determine
 * [international pricing](https://shopify.dev/custom-storefronts/products/international-pricing#create-a-checkout)
 * and should match the customer's shipping address.
 *
 */
export type CartBuyerIdentityInput = {
  /** The country where the buyer is located. */
  countryCode?: InputMaybe<CountryCode>
  /** The access token used to identify the customer associated with the cart. */
  customerAccessToken?: InputMaybe<Scalars['String']>
  /** The email address of the buyer that is interacting with the cart. */
  email?: InputMaybe<Scalars['String']>
  /** The phone number of the buyer that is interacting with the cart. */
  phone?: InputMaybe<Scalars['String']>
}

/** Return type for `cartBuyerIdentityUpdate` mutation. */
export type CartBuyerIdentityUpdatePayload = {
  __typename?: 'CartBuyerIdentityUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<Cart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/** The discount that has been applied to the cart line using a discount code. */
export type CartCodeDiscountAllocation = CartDiscountAllocation & {
  __typename?: 'CartCodeDiscountAllocation'
  /** The code used to apply the discount. */
  code: Scalars['String']
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: MoneyV2
}

/** Return type for `cartCreate` mutation. */
export type CartCreatePayload = {
  __typename?: 'CartCreatePayload'
  /** The new cart. */
  cart?: Maybe<Cart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/** The discounts that have been applied to the cart line. */
export type CartDiscountAllocation = {
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: MoneyV2
}

/** The discount codes applied to the cart. */
export type CartDiscountCode = {
  __typename?: 'CartDiscountCode'
  /** Whether the discount code is applicable to the cart's current contents. */
  applicable: Scalars['Boolean']
  /** The code for the discount. */
  code: Scalars['String']
}

/** Return type for `cartDiscountCodesUpdate` mutation. */
export type CartDiscountCodesUpdatePayload = {
  __typename?: 'CartDiscountCodesUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<Cart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/** Possible error codes that can be returned by `CartUserError`. */
export enum CartErrorCode {
  /** The input value is invalid. */
  Invalid = 'INVALID',
  /** Merchandise line was not found in cart. */
  InvalidMerchandiseLine = 'INVALID_MERCHANDISE_LINE',
  /** The input value should be less than the maximum value allowed. */
  LessThan = 'LESS_THAN',
  /** Missing discount code. */
  MissingDiscountCode = 'MISSING_DISCOUNT_CODE',
  /** Missing note. */
  MissingNote = 'MISSING_NOTE',
}

/**
 * The estimated costs that the buyer will pay at checkout.
 * It uses [`CartBuyerIdentity`](https://shopify.dev/api/storefront/reference/cart/cartbuyeridentity) to determine
 * [international pricing](https://shopify.dev/custom-storefronts/products/international-pricing#create-a-cart).
 *
 */
export type CartEstimatedCost = {
  __typename?: 'CartEstimatedCost'
  /** The estimated amount, before taxes and discounts, for the customer to pay at checkout. */
  subtotalAmount: MoneyV2
  /** The estimated total amount for the customer to pay at checkout. */
  totalAmount: MoneyV2
  /** The estimated duty amount for the customer to pay at checkout. */
  totalDutyAmount?: Maybe<MoneyV2>
  /** The estimated tax amount for the customer to pay at checkout. */
  totalTaxAmount?: Maybe<MoneyV2>
}

/** Specifies the input fields to create a cart. */
export type CartInput = {
  /** An array of key-value pairs that contains additional information about the cart. */
  attributes?: InputMaybe<Array<AttributeInput>>
  /** The customer associated with the cart. Used to determine [international pricing](https://shopify.dev/custom-storefronts/products/international-pricing#create-a-checkout). Buyer identity should match the customer's shipping address. */
  buyerIdentity?: InputMaybe<CartBuyerIdentityInput>
  /** The discount codes to apply to the cart. */
  discountCodes?: InputMaybe<Array<Scalars['String']>>
  /** A list of merchandise lines to add to the cart. */
  lines?: InputMaybe<Array<CartLineInput>>
  /** A note that is associated with the cart. For example, the note can be a personalized message to the buyer. */
  note?: InputMaybe<Scalars['String']>
}

/** Represents information about the merchandise in the cart. */
export type CartLine = Node & {
  __typename?: 'CartLine'
  /** The attributes associated with the cart line. Attributes are represented as key-value pairs. */
  attributes: Array<Attribute>
  /** The discounts that have been applied to the cart line. */
  discountAllocations: Array<CartDiscountAllocation>
  /** The estimated cost of the merchandise that the buyer will pay for at checkout. The estimated costs are subject to change and changes will be reflected at checkout. */
  estimatedCost: CartLineEstimatedCost
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The merchandise that the buyer intends to purchase. */
  merchandise: Merchandise
  /** The quantity of the merchandise that the customer intends to purchase. */
  quantity: Scalars['Int']
  /** The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased. */
  sellingPlanAllocation?: Maybe<SellingPlanAllocation>
}

/**
 * An auto-generated type for paginating through multiple CartLines.
 *
 */
export type CartLineConnection = {
  __typename?: 'CartLineConnection'
  /** A list of edges. */
  edges: Array<CartLineEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one CartLine and a cursor during pagination.
 *
 */
export type CartLineEdge = {
  __typename?: 'CartLineEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CartLineEdge. */
  node: CartLine
}

/** The estimated cost of the merchandise line that the buyer will pay at checkout. */
export type CartLineEstimatedCost = {
  __typename?: 'CartLineEstimatedCost'
  /** The estimated cost of the merchandise line before discounts. */
  subtotalAmount: MoneyV2
  /** The estimated total cost of the merchandise line. */
  totalAmount: MoneyV2
}

/** Specifies the input fields to create a merchandise line on a cart. */
export type CartLineInput = {
  /** An array of key-value pairs that contains additional information about the merchandise line. */
  attributes?: InputMaybe<Array<AttributeInput>>
  /** The identifier of the merchandise that the buyer intends to purchase. */
  merchandiseId: Scalars['ID']
  /** The quantity of the merchandise. */
  quantity?: InputMaybe<Scalars['Int']>
  /** The identifier of the selling plan that the merchandise is being purchased with. */
  sellingPlanId?: InputMaybe<Scalars['ID']>
}

/** Specifies the input fields to update a line item on a cart. */
export type CartLineUpdateInput = {
  /** An array of key-value pairs that contains additional information about the merchandise line. */
  attributes?: InputMaybe<Array<AttributeInput>>
  /** The identifier of the merchandise line. */
  id: Scalars['ID']
  /** The identifier of the merchandise for the line item. */
  merchandiseId?: InputMaybe<Scalars['ID']>
  /** The quantity of the line item. */
  quantity?: InputMaybe<Scalars['Int']>
  /** The identifier of the selling plan that the merchandise is being purchased with. */
  sellingPlanId?: InputMaybe<Scalars['ID']>
}

/** Return type for `cartLinesAdd` mutation. */
export type CartLinesAddPayload = {
  __typename?: 'CartLinesAddPayload'
  /** The updated cart. */
  cart?: Maybe<Cart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/** Return type for `cartLinesRemove` mutation. */
export type CartLinesRemovePayload = {
  __typename?: 'CartLinesRemovePayload'
  /** The updated cart. */
  cart?: Maybe<Cart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/** Return type for `cartLinesUpdate` mutation. */
export type CartLinesUpdatePayload = {
  __typename?: 'CartLinesUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<Cart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/** Return type for `cartNoteUpdate` mutation. */
export type CartNoteUpdatePayload = {
  __typename?: 'CartNoteUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<Cart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/** Represents an error that happens during execution of a cart mutation. */
export type CartUserError = DisplayableError & {
  __typename?: 'CartUserError'
  /** The error code. */
  code?: Maybe<CartErrorCode>
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** A container for all the information required to checkout items and pay. */
export type Checkout = Node & {
  __typename?: 'Checkout'
  /** The gift cards used on the checkout. */
  appliedGiftCards: Array<AppliedGiftCard>
  /**
   * The available shipping rates for this Checkout.
   * Should only be used when checkout `requiresShipping` is `true` and
   * the shipping address is valid.
   *
   */
  availableShippingRates?: Maybe<AvailableShippingRates>
  /** The identity of the customer associated with the checkout. */
  buyerIdentity: CheckoutBuyerIdentity
  /** The date and time when the checkout was completed. */
  completedAt?: Maybe<Scalars['DateTime']>
  /** The date and time when the checkout was created. */
  createdAt: Scalars['DateTime']
  /** The currency code for the Checkout. */
  currencyCode: CurrencyCode
  /** A list of extra information that is added to the checkout. */
  customAttributes: Array<Attribute>
  /** Discounts that have been applied on the checkout. */
  discountApplications: DiscountApplicationConnection
  /** The email attached to this checkout. */
  email?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** A list of line item objects, each one containing information about an item in the checkout. */
  lineItems: CheckoutLineItemConnection
  /** The sum of all the prices of all the items in the checkout. Duties, taxes, shipping and discounts excluded. */
  lineItemsSubtotalPrice: MoneyV2
  /** The note associated with the checkout. */
  note?: Maybe<Scalars['String']>
  /** The resulting order from a paid checkout. */
  order?: Maybe<Order>
  /** The Order Status Page for this Checkout, null when checkout is not completed. */
  orderStatusUrl?: Maybe<Scalars['URL']>
  /**
   * The amount left to be paid. This is equal to the cost of the line items, taxes and shipping minus discounts and gift cards.
   * @deprecated Use `paymentDueV2` instead
   */
  paymentDue: Scalars['Money']
  /** The amount left to be paid. This is equal to the cost of the line items, duties, taxes and shipping minus discounts and gift cards. */
  paymentDueV2: MoneyV2
  /**
   * Whether or not the Checkout is ready and can be completed. Checkouts may
   * have asynchronous operations that can take time to finish. If you want
   * to complete a checkout or ensure all the fields are populated and up to
   * date, polling is required until the value is true.
   *
   */
  ready: Scalars['Boolean']
  /** States whether or not the fulfillment requires shipping. */
  requiresShipping: Scalars['Boolean']
  /** The shipping address to where the line items will be shipped. */
  shippingAddress?: Maybe<MailingAddress>
  /**
   * The discounts that have been allocated onto the shipping line by discount applications.
   *
   */
  shippingDiscountAllocations: Array<DiscountAllocation>
  /** Once a shipping rate is selected by the customer it is transitioned to a `shipping_line` object. */
  shippingLine?: Maybe<ShippingRate>
  /**
   * Price of the checkout before shipping and taxes.
   * @deprecated Use `subtotalPriceV2` instead
   */
  subtotalPrice: Scalars['Money']
  /** Price of the checkout before duties, shipping and taxes. */
  subtotalPriceV2: MoneyV2
  /** Specifies if the Checkout is tax exempt. */
  taxExempt: Scalars['Boolean']
  /** Specifies if taxes are included in the line item and shipping line prices. */
  taxesIncluded: Scalars['Boolean']
  /** The sum of all the duties applied to the line items in the checkout. */
  totalDuties?: Maybe<MoneyV2>
  /**
   * The sum of all the prices of all the items in the checkout, taxes and discounts included.
   * @deprecated Use `totalPriceV2` instead
   */
  totalPrice: Scalars['Money']
  /** The sum of all the prices of all the items in the checkout, duties, taxes and discounts included. */
  totalPriceV2: MoneyV2
  /**
   * The sum of all the taxes applied to the line items and shipping lines in the checkout.
   * @deprecated Use `totalTaxV2` instead
   */
  totalTax: Scalars['Money']
  /** The sum of all the taxes applied to the line items and shipping lines in the checkout. */
  totalTaxV2: MoneyV2
  /** The date and time when the checkout was last updated. */
  updatedAt: Scalars['DateTime']
  /** The url pointing to the checkout accessible from the web. */
  webUrl: Scalars['URL']
}

/** A container for all the information required to checkout items and pay. */
export type CheckoutDiscountApplicationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** A container for all the information required to checkout items and pay. */
export type CheckoutLineItemsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** Specifies the fields required to update a checkout's attributes. */
export type CheckoutAttributesUpdateInput = {
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of the addresses is still done at completion time. Defaults to `false` with
   * each operation.
   *
   */
  allowPartialAddresses?: InputMaybe<Scalars['Boolean']>
  /** A list of extra information that is added to the checkout. */
  customAttributes?: InputMaybe<Array<AttributeInput>>
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: InputMaybe<Scalars['String']>
}

/** Return type for `checkoutAttributesUpdate` mutation. */
export type CheckoutAttributesUpdatePayload = {
  __typename?: 'CheckoutAttributesUpdatePayload'
  /** The updated checkout object. */
  checkout: Checkout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Specifies the fields required to update a checkout's attributes. */
export type CheckoutAttributesUpdateV2Input = {
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of the addresses is still done at completion time. Defaults to `false` with
   * each operation.
   *
   */
  allowPartialAddresses?: InputMaybe<Scalars['Boolean']>
  /** A list of extra information that is added to the checkout. */
  customAttributes?: InputMaybe<Array<AttributeInput>>
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: InputMaybe<Scalars['String']>
}

/** Return type for `checkoutAttributesUpdateV2` mutation. */
export type CheckoutAttributesUpdateV2Payload = {
  __typename?: 'CheckoutAttributesUpdateV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** The identity of the customer associated with the checkout. */
export type CheckoutBuyerIdentity = {
  __typename?: 'CheckoutBuyerIdentity'
  /** The country code for the checkout. For example, `CA`. */
  countryCode?: Maybe<CountryCode>
}

/** Specifies the identity of the customer associated with the checkout. */
export type CheckoutBuyerIdentityInput = {
  /**
   * The country code of one of the shop's
   * [enabled countries](https://help.shopify.com/en/manual/payments/shopify-payments/multi-currency/setup).
   * For example, `CA`. Including this field creates a checkout in the specified country's currency.
   *
   */
  countryCode: CountryCode
}

/** Return type for `checkoutCompleteFree` mutation. */
export type CheckoutCompleteFreePayload = {
  __typename?: 'CheckoutCompleteFreePayload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutCompleteWithCreditCard` mutation. */
export type CheckoutCompleteWithCreditCardPayload = {
  __typename?: 'CheckoutCompleteWithCreditCardPayload'
  /** The checkout on which the payment was applied. */
  checkout: Checkout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<Payment>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutCompleteWithCreditCardV2` mutation. */
export type CheckoutCompleteWithCreditCardV2Payload = {
  __typename?: 'CheckoutCompleteWithCreditCardV2Payload'
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<Payment>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutCompleteWithTokenizedPayment` mutation. */
export type CheckoutCompleteWithTokenizedPaymentPayload = {
  __typename?: 'CheckoutCompleteWithTokenizedPaymentPayload'
  /** The checkout on which the payment was applied. */
  checkout: Checkout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<Payment>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutCompleteWithTokenizedPaymentV2` mutation. */
export type CheckoutCompleteWithTokenizedPaymentV2Payload = {
  __typename?: 'CheckoutCompleteWithTokenizedPaymentV2Payload'
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<Payment>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutCompleteWithTokenizedPaymentV3` mutation. */
export type CheckoutCompleteWithTokenizedPaymentV3Payload = {
  __typename?: 'CheckoutCompleteWithTokenizedPaymentV3Payload'
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<Payment>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Specifies the fields required to create a checkout. */
export type CheckoutCreateInput = {
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of addresses is still done at completion time. Defaults to `null`.
   *
   */
  allowPartialAddresses?: InputMaybe<Scalars['Boolean']>
  /** The identity of the customer associated with the checkout. */
  buyerIdentity?: InputMaybe<CheckoutBuyerIdentityInput>
  /** A list of extra information that is added to the checkout. */
  customAttributes?: InputMaybe<Array<AttributeInput>>
  /** The email with which the customer wants to checkout. */
  email?: InputMaybe<Scalars['String']>
  /** A list of line item objects, each one containing information about an item in the checkout. */
  lineItems?: InputMaybe<Array<CheckoutLineItemInput>>
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: InputMaybe<Scalars['String']>
  /**
   * The three-letter currency code of one of the shop's enabled presentment currencies.
   * Including this field creates a checkout in the specified currency. By default, new
   * checkouts are created in the shop's primary currency.
   *  This argument is deprecated: Use `country` field instead.
   */
  presentmentCurrencyCode?: InputMaybe<CurrencyCode>
  /** The shipping address to where the line items will be shipped. */
  shippingAddress?: InputMaybe<MailingAddressInput>
}

/** Return type for `checkoutCreate` mutation. */
export type CheckoutCreatePayload = {
  __typename?: 'CheckoutCreatePayload'
  /** The new checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /** The checkout queue token. Available only to selected stores. */
  queueToken?: Maybe<Scalars['String']>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutCustomerAssociate` mutation. */
export type CheckoutCustomerAssociatePayload = {
  __typename?: 'CheckoutCustomerAssociatePayload'
  /** The updated checkout object. */
  checkout: Checkout
  /** The associated customer object. */
  customer?: Maybe<Customer>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<UserError>
}

/** Return type for `checkoutCustomerAssociateV2` mutation. */
export type CheckoutCustomerAssociateV2Payload = {
  __typename?: 'CheckoutCustomerAssociateV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /** The associated customer object. */
  customer?: Maybe<Customer>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutCustomerDisassociate` mutation. */
export type CheckoutCustomerDisassociatePayload = {
  __typename?: 'CheckoutCustomerDisassociatePayload'
  /** The updated checkout object. */
  checkout: Checkout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutCustomerDisassociateV2` mutation. */
export type CheckoutCustomerDisassociateV2Payload = {
  __typename?: 'CheckoutCustomerDisassociateV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutDiscountCodeApply` mutation. */
export type CheckoutDiscountCodeApplyPayload = {
  __typename?: 'CheckoutDiscountCodeApplyPayload'
  /** The updated checkout object. */
  checkout: Checkout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutDiscountCodeApplyV2` mutation. */
export type CheckoutDiscountCodeApplyV2Payload = {
  __typename?: 'CheckoutDiscountCodeApplyV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutDiscountCodeRemove` mutation. */
export type CheckoutDiscountCodeRemovePayload = {
  __typename?: 'CheckoutDiscountCodeRemovePayload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutEmailUpdate` mutation. */
export type CheckoutEmailUpdatePayload = {
  __typename?: 'CheckoutEmailUpdatePayload'
  /** The checkout object with the updated email. */
  checkout: Checkout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutEmailUpdateV2` mutation. */
export type CheckoutEmailUpdateV2Payload = {
  __typename?: 'CheckoutEmailUpdateV2Payload'
  /** The checkout object with the updated email. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Possible error codes that can be returned by `CheckoutUserError`. */
export enum CheckoutErrorCode {
  /** Checkout is already completed. */
  AlreadyCompleted = 'ALREADY_COMPLETED',
  /** Input email contains an invalid domain name. */
  BadDomain = 'BAD_DOMAIN',
  /** The input value is blank. */
  Blank = 'BLANK',
  /** Cart does not meet discount requirements notice. */
  CartDoesNotMeetDiscountRequirementsNotice = 'CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE',
  /** Customer already used once per customer discount notice. */
  CustomerAlreadyUsedOncePerCustomerDiscountNotice = 'CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE',
  /** Discount already applied. */
  DiscountAlreadyApplied = 'DISCOUNT_ALREADY_APPLIED',
  /** Discount disabled. */
  DiscountDisabled = 'DISCOUNT_DISABLED',
  /** Discount expired. */
  DiscountExpired = 'DISCOUNT_EXPIRED',
  /** Discount limit reached. */
  DiscountLimitReached = 'DISCOUNT_LIMIT_REACHED',
  /** Discount not found. */
  DiscountNotFound = 'DISCOUNT_NOT_FOUND',
  /** Checkout is already completed. */
  Empty = 'EMPTY',
  /** Queue token has expired. */
  ExpiredQueueToken = 'EXPIRED_QUEUE_TOKEN',
  /** Gift card has already been applied. */
  GiftCardAlreadyApplied = 'GIFT_CARD_ALREADY_APPLIED',
  /** Gift card code is invalid. */
  GiftCardCodeInvalid = 'GIFT_CARD_CODE_INVALID',
  /** Gift card currency does not match checkout currency. */
  GiftCardCurrencyMismatch = 'GIFT_CARD_CURRENCY_MISMATCH',
  /** Gift card has no funds left. */
  GiftCardDepleted = 'GIFT_CARD_DEPLETED',
  /** Gift card is disabled. */
  GiftCardDisabled = 'GIFT_CARD_DISABLED',
  /** Gift card is expired. */
  GiftCardExpired = 'GIFT_CARD_EXPIRED',
  /** Gift card was not found. */
  GiftCardNotFound = 'GIFT_CARD_NOT_FOUND',
  /** Gift card cannot be applied to a checkout that contains a gift card. */
  GiftCardUnusable = 'GIFT_CARD_UNUSABLE',
  /** The input value should be greater than or equal to the minimum value allowed. */
  GreaterThanOrEqualTo = 'GREATER_THAN_OR_EQUAL_TO',
  /** The input value is invalid. */
  Invalid = 'INVALID',
  /** Cannot specify country and presentment currency code. */
  InvalidCountryAndCurrency = 'INVALID_COUNTRY_AND_CURRENCY',
  /** Input Zip is invalid for country provided. */
  InvalidForCountry = 'INVALID_FOR_COUNTRY',
  /** Input Zip is invalid for country and province provided. */
  InvalidForCountryAndProvince = 'INVALID_FOR_COUNTRY_AND_PROVINCE',
  /** Invalid province in country. */
  InvalidProvinceInCountry = 'INVALID_PROVINCE_IN_COUNTRY',
  /** Queue token is invalid. */
  InvalidQueueToken = 'INVALID_QUEUE_TOKEN',
  /** Invalid region in country. */
  InvalidRegionInCountry = 'INVALID_REGION_IN_COUNTRY',
  /** Invalid state in country. */
  InvalidStateInCountry = 'INVALID_STATE_IN_COUNTRY',
  /** The input value should be less than the maximum value allowed. */
  LessThan = 'LESS_THAN',
  /** The input value should be less than or equal to the maximum value allowed. */
  LessThanOrEqualTo = 'LESS_THAN_OR_EQUAL_TO',
  /** Line item was not found in checkout. */
  LineItemNotFound = 'LINE_ITEM_NOT_FOUND',
  /** Checkout is locked. */
  Locked = 'LOCKED',
  /** Missing payment input. */
  MissingPaymentInput = 'MISSING_PAYMENT_INPUT',
  /** Not enough in stock. */
  NotEnoughInStock = 'NOT_ENOUGH_IN_STOCK',
  /** Input value is not supported. */
  NotSupported = 'NOT_SUPPORTED',
  /** The input value needs to be blank. */
  Present = 'PRESENT',
  /** Shipping rate expired. */
  ShippingRateExpired = 'SHIPPING_RATE_EXPIRED',
  /** Throttled during checkout. */
  ThrottledDuringCheckout = 'THROTTLED_DURING_CHECKOUT',
  /** The input value is too long. */
  TooLong = 'TOO_LONG',
  /** The amount of the payment does not match the value to be paid. */
  TotalPriceMismatch = 'TOTAL_PRICE_MISMATCH',
  /** Unable to apply discount. */
  UnableToApply = 'UNABLE_TO_APPLY',
}

/** Return type for `checkoutGiftCardApply` mutation. */
export type CheckoutGiftCardApplyPayload = {
  __typename?: 'CheckoutGiftCardApplyPayload'
  /** The updated checkout object. */
  checkout: Checkout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutGiftCardRemove` mutation. */
export type CheckoutGiftCardRemovePayload = {
  __typename?: 'CheckoutGiftCardRemovePayload'
  /** The updated checkout object. */
  checkout: Checkout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutGiftCardRemoveV2` mutation. */
export type CheckoutGiftCardRemoveV2Payload = {
  __typename?: 'CheckoutGiftCardRemoveV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutGiftCardsAppend` mutation. */
export type CheckoutGiftCardsAppendPayload = {
  __typename?: 'CheckoutGiftCardsAppendPayload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** A single line item in the checkout, grouped by variant and attributes. */
export type CheckoutLineItem = Node & {
  __typename?: 'CheckoutLineItem'
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes: Array<Attribute>
  /** The discounts that have been allocated onto the checkout line item by discount applications. */
  discountAllocations: Array<DiscountAllocation>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The quantity of the line item. */
  quantity: Scalars['Int']
  /** Title of the line item. Defaults to the product's title. */
  title: Scalars['String']
  /** Unit price of the line item. */
  unitPrice?: Maybe<MoneyV2>
  /** Product variant of the line item. */
  variant?: Maybe<ProductVariant>
}

/**
 * An auto-generated type for paginating through multiple CheckoutLineItems.
 *
 */
export type CheckoutLineItemConnection = {
  __typename?: 'CheckoutLineItemConnection'
  /** A list of edges. */
  edges: Array<CheckoutLineItemEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one CheckoutLineItem and a cursor during pagination.
 *
 */
export type CheckoutLineItemEdge = {
  __typename?: 'CheckoutLineItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CheckoutLineItemEdge. */
  node: CheckoutLineItem
}

/** Specifies the input fields to create a line item on a checkout. */
export type CheckoutLineItemInput = {
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes?: InputMaybe<Array<AttributeInput>>
  /** The quantity of the line item. */
  quantity: Scalars['Int']
  /** The identifier of the product variant for the line item. */
  variantId: Scalars['ID']
}

/** Specifies the input fields to update a line item on the checkout. */
export type CheckoutLineItemUpdateInput = {
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes?: InputMaybe<Array<AttributeInput>>
  /** The identifier of the line item. */
  id?: InputMaybe<Scalars['ID']>
  /** The quantity of the line item. */
  quantity?: InputMaybe<Scalars['Int']>
  /** The variant identifier of the line item. */
  variantId?: InputMaybe<Scalars['ID']>
}

/** Return type for `checkoutLineItemsAdd` mutation. */
export type CheckoutLineItemsAddPayload = {
  __typename?: 'CheckoutLineItemsAddPayload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutLineItemsRemove` mutation. */
export type CheckoutLineItemsRemovePayload = {
  __typename?: 'CheckoutLineItemsRemovePayload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutLineItemsReplace` mutation. */
export type CheckoutLineItemsReplacePayload = {
  __typename?: 'CheckoutLineItemsReplacePayload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CheckoutUserError>
}

/** Return type for `checkoutLineItemsUpdate` mutation. */
export type CheckoutLineItemsUpdatePayload = {
  __typename?: 'CheckoutLineItemsUpdatePayload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutShippingAddressUpdate` mutation. */
export type CheckoutShippingAddressUpdatePayload = {
  __typename?: 'CheckoutShippingAddressUpdatePayload'
  /** The updated checkout object. */
  checkout: Checkout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutShippingAddressUpdateV2` mutation. */
export type CheckoutShippingAddressUpdateV2Payload = {
  __typename?: 'CheckoutShippingAddressUpdateV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutShippingLineUpdate` mutation. */
export type CheckoutShippingLineUpdatePayload = {
  __typename?: 'CheckoutShippingLineUpdatePayload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Represents an error that happens during execution of a checkout mutation. */
export type CheckoutUserError = DisplayableError & {
  __typename?: 'CheckoutUserError'
  /** The error code. */
  code?: Maybe<CheckoutErrorCode>
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type Collection = HasMetafields &
  Node &
  OnlineStorePublishable & {
    __typename?: 'Collection'
    /** Stripped description of the collection, single line with HTML tags removed. */
    description: Scalars['String']
    /** The description of the collection, complete with HTML formatting. */
    descriptionHtml: Scalars['HTML']
    /**
     * A human-friendly unique string for the collection automatically generated from its title.
     * Limit of 255 characters.
     *
     */
    handle: Scalars['String']
    /** A globally-unique identifier. */
    id: Scalars['ID']
    /** Image associated with the collection. */
    image?: Maybe<Image>
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe<Metafield>
    /**
     * A paginated list of metafields associated with the resource.
     * @deprecated The `metafields` field will be removed in the future in favor of using [aliases](https://graphql.org/learn/queries/#aliases) with the `metafield` field.
     *
     */
    metafields: MetafieldConnection
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl?: Maybe<Scalars['URL']>
    /** List of products in the collection. */
    products: ProductConnection
    /** The collection’s name. Limit of 255 characters. */
    title: Scalars['String']
    /** The date and time when the collection was last modified. */
    updatedAt: Scalars['DateTime']
  }

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type CollectionDescriptionArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>
}

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type CollectionMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type CollectionMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type CollectionProductsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  filters?: InputMaybe<Array<ProductFilter>>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<ProductCollectionSortKeys>
}

/**
 * An auto-generated type for paginating through multiple Collections.
 *
 */
export type CollectionConnection = {
  __typename?: 'CollectionConnection'
  /** A list of edges. */
  edges: Array<CollectionEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one Collection and a cursor during pagination.
 *
 */
export type CollectionEdge = {
  __typename?: 'CollectionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CollectionEdge. */
  node: Collection
}

/** The set of valid sort keys for the Collection query. */
export enum CollectionSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
}

/** A comment on an article. */
export type Comment = Node & {
  __typename?: 'Comment'
  /** The comment’s author. */
  author: CommentAuthor
  /** Stripped content of the comment, single line with HTML tags removed. */
  content: Scalars['String']
  /** The content of the comment, complete with HTML formatting. */
  contentHtml: Scalars['HTML']
  /** A globally-unique identifier. */
  id: Scalars['ID']
}

/** A comment on an article. */
export type CommentContentArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>
}

/** The author of a comment. */
export type CommentAuthor = {
  __typename?: 'CommentAuthor'
  /** The author's email. */
  email: Scalars['String']
  /** The author’s name. */
  name: Scalars['String']
}

/**
 * An auto-generated type for paginating through multiple Comments.
 *
 */
export type CommentConnection = {
  __typename?: 'CommentConnection'
  /** A list of edges. */
  edges: Array<CommentEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one Comment and a cursor during pagination.
 *
 */
export type CommentEdge = {
  __typename?: 'CommentEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CommentEdge. */
  node: Comment
}

/** A country. */
export type Country = {
  __typename?: 'Country'
  /** The currency of the country. */
  currency: Currency
  /** The ISO code of the country. */
  isoCode: CountryCode
  /** The name of the country. */
  name: Scalars['String']
  /** The unit system used in the country. */
  unitSystem: UnitSystem
}

/** ISO 3166-1 alpha-2 country codes with some differences. */
export enum CountryCode {
  /** Ascension Island. */
  Ac = 'AC',
  /** Andorra. */
  Ad = 'AD',
  /** United Arab Emirates. */
  Ae = 'AE',
  /** Afghanistan. */
  Af = 'AF',
  /** Antigua & Barbuda. */
  Ag = 'AG',
  /** Anguilla. */
  Ai = 'AI',
  /** Albania. */
  Al = 'AL',
  /** Armenia. */
  Am = 'AM',
  /** Netherlands Antilles. */
  An = 'AN',
  /** Angola. */
  Ao = 'AO',
  /** Argentina. */
  Ar = 'AR',
  /** Austria. */
  At = 'AT',
  /** Australia. */
  Au = 'AU',
  /** Aruba. */
  Aw = 'AW',
  /** Åland Islands. */
  Ax = 'AX',
  /** Azerbaijan. */
  Az = 'AZ',
  /** Bosnia & Herzegovina. */
  Ba = 'BA',
  /** Barbados. */
  Bb = 'BB',
  /** Bangladesh. */
  Bd = 'BD',
  /** Belgium. */
  Be = 'BE',
  /** Burkina Faso. */
  Bf = 'BF',
  /** Bulgaria. */
  Bg = 'BG',
  /** Bahrain. */
  Bh = 'BH',
  /** Burundi. */
  Bi = 'BI',
  /** Benin. */
  Bj = 'BJ',
  /** St. Barthélemy. */
  Bl = 'BL',
  /** Bermuda. */
  Bm = 'BM',
  /** Brunei. */
  Bn = 'BN',
  /** Bolivia. */
  Bo = 'BO',
  /** Caribbean Netherlands. */
  Bq = 'BQ',
  /** Brazil. */
  Br = 'BR',
  /** Bahamas. */
  Bs = 'BS',
  /** Bhutan. */
  Bt = 'BT',
  /** Bouvet Island. */
  Bv = 'BV',
  /** Botswana. */
  Bw = 'BW',
  /** Belarus. */
  By = 'BY',
  /** Belize. */
  Bz = 'BZ',
  /** Canada. */
  Ca = 'CA',
  /** Cocos (Keeling) Islands. */
  Cc = 'CC',
  /** Congo - Kinshasa. */
  Cd = 'CD',
  /** Central African Republic. */
  Cf = 'CF',
  /** Congo - Brazzaville. */
  Cg = 'CG',
  /** Switzerland. */
  Ch = 'CH',
  /** Côte d’Ivoire. */
  Ci = 'CI',
  /** Cook Islands. */
  Ck = 'CK',
  /** Chile. */
  Cl = 'CL',
  /** Cameroon. */
  Cm = 'CM',
  /** China. */
  Cn = 'CN',
  /** Colombia. */
  Co = 'CO',
  /** Costa Rica. */
  Cr = 'CR',
  /** Cuba. */
  Cu = 'CU',
  /** Cape Verde. */
  Cv = 'CV',
  /** Curaçao. */
  Cw = 'CW',
  /** Christmas Island. */
  Cx = 'CX',
  /** Cyprus. */
  Cy = 'CY',
  /** Czechia. */
  Cz = 'CZ',
  /** Germany. */
  De = 'DE',
  /** Djibouti. */
  Dj = 'DJ',
  /** Denmark. */
  Dk = 'DK',
  /** Dominica. */
  Dm = 'DM',
  /** Dominican Republic. */
  Do = 'DO',
  /** Algeria. */
  Dz = 'DZ',
  /** Ecuador. */
  Ec = 'EC',
  /** Estonia. */
  Ee = 'EE',
  /** Egypt. */
  Eg = 'EG',
  /** Western Sahara. */
  Eh = 'EH',
  /** Eritrea. */
  Er = 'ER',
  /** Spain. */
  Es = 'ES',
  /** Ethiopia. */
  Et = 'ET',
  /** Finland. */
  Fi = 'FI',
  /** Fiji. */
  Fj = 'FJ',
  /** Falkland Islands. */
  Fk = 'FK',
  /** Faroe Islands. */
  Fo = 'FO',
  /** France. */
  Fr = 'FR',
  /** Gabon. */
  Ga = 'GA',
  /** United Kingdom. */
  Gb = 'GB',
  /** Grenada. */
  Gd = 'GD',
  /** Georgia. */
  Ge = 'GE',
  /** French Guiana. */
  Gf = 'GF',
  /** Guernsey. */
  Gg = 'GG',
  /** Ghana. */
  Gh = 'GH',
  /** Gibraltar. */
  Gi = 'GI',
  /** Greenland. */
  Gl = 'GL',
  /** Gambia. */
  Gm = 'GM',
  /** Guinea. */
  Gn = 'GN',
  /** Guadeloupe. */
  Gp = 'GP',
  /** Equatorial Guinea. */
  Gq = 'GQ',
  /** Greece. */
  Gr = 'GR',
  /** South Georgia & South Sandwich Islands. */
  Gs = 'GS',
  /** Guatemala. */
  Gt = 'GT',
  /** Guinea-Bissau. */
  Gw = 'GW',
  /** Guyana. */
  Gy = 'GY',
  /** Hong Kong SAR. */
  Hk = 'HK',
  /** Heard & McDonald Islands. */
  Hm = 'HM',
  /** Honduras. */
  Hn = 'HN',
  /** Croatia. */
  Hr = 'HR',
  /** Haiti. */
  Ht = 'HT',
  /** Hungary. */
  Hu = 'HU',
  /** Indonesia. */
  Id = 'ID',
  /** Ireland. */
  Ie = 'IE',
  /** Israel. */
  Il = 'IL',
  /** Isle of Man. */
  Im = 'IM',
  /** India. */
  In = 'IN',
  /** British Indian Ocean Territory. */
  Io = 'IO',
  /** Iraq. */
  Iq = 'IQ',
  /** Iran. */
  Ir = 'IR',
  /** Iceland. */
  Is = 'IS',
  /** Italy. */
  It = 'IT',
  /** Jersey. */
  Je = 'JE',
  /** Jamaica. */
  Jm = 'JM',
  /** Jordan. */
  Jo = 'JO',
  /** Japan. */
  Jp = 'JP',
  /** Kenya. */
  Ke = 'KE',
  /** Kyrgyzstan. */
  Kg = 'KG',
  /** Cambodia. */
  Kh = 'KH',
  /** Kiribati. */
  Ki = 'KI',
  /** Comoros. */
  Km = 'KM',
  /** St. Kitts & Nevis. */
  Kn = 'KN',
  /** North Korea. */
  Kp = 'KP',
  /** South Korea. */
  Kr = 'KR',
  /** Kuwait. */
  Kw = 'KW',
  /** Cayman Islands. */
  Ky = 'KY',
  /** Kazakhstan. */
  Kz = 'KZ',
  /** Laos. */
  La = 'LA',
  /** Lebanon. */
  Lb = 'LB',
  /** St. Lucia. */
  Lc = 'LC',
  /** Liechtenstein. */
  Li = 'LI',
  /** Sri Lanka. */
  Lk = 'LK',
  /** Liberia. */
  Lr = 'LR',
  /** Lesotho. */
  Ls = 'LS',
  /** Lithuania. */
  Lt = 'LT',
  /** Luxembourg. */
  Lu = 'LU',
  /** Latvia. */
  Lv = 'LV',
  /** Libya. */
  Ly = 'LY',
  /** Morocco. */
  Ma = 'MA',
  /** Monaco. */
  Mc = 'MC',
  /** Moldova. */
  Md = 'MD',
  /** Montenegro. */
  Me = 'ME',
  /** St. Martin. */
  Mf = 'MF',
  /** Madagascar. */
  Mg = 'MG',
  /** North Macedonia. */
  Mk = 'MK',
  /** Mali. */
  Ml = 'ML',
  /** Myanmar (Burma). */
  Mm = 'MM',
  /** Mongolia. */
  Mn = 'MN',
  /** Macao SAR. */
  Mo = 'MO',
  /** Martinique. */
  Mq = 'MQ',
  /** Mauritania. */
  Mr = 'MR',
  /** Montserrat. */
  Ms = 'MS',
  /** Malta. */
  Mt = 'MT',
  /** Mauritius. */
  Mu = 'MU',
  /** Maldives. */
  Mv = 'MV',
  /** Malawi. */
  Mw = 'MW',
  /** Mexico. */
  Mx = 'MX',
  /** Malaysia. */
  My = 'MY',
  /** Mozambique. */
  Mz = 'MZ',
  /** Namibia. */
  Na = 'NA',
  /** New Caledonia. */
  Nc = 'NC',
  /** Niger. */
  Ne = 'NE',
  /** Norfolk Island. */
  Nf = 'NF',
  /** Nigeria. */
  Ng = 'NG',
  /** Nicaragua. */
  Ni = 'NI',
  /** Netherlands. */
  Nl = 'NL',
  /** Norway. */
  No = 'NO',
  /** Nepal. */
  Np = 'NP',
  /** Nauru. */
  Nr = 'NR',
  /** Niue. */
  Nu = 'NU',
  /** New Zealand. */
  Nz = 'NZ',
  /** Oman. */
  Om = 'OM',
  /** Panama. */
  Pa = 'PA',
  /** Peru. */
  Pe = 'PE',
  /** French Polynesia. */
  Pf = 'PF',
  /** Papua New Guinea. */
  Pg = 'PG',
  /** Philippines. */
  Ph = 'PH',
  /** Pakistan. */
  Pk = 'PK',
  /** Poland. */
  Pl = 'PL',
  /** St. Pierre & Miquelon. */
  Pm = 'PM',
  /** Pitcairn Islands. */
  Pn = 'PN',
  /** Palestinian Territories. */
  Ps = 'PS',
  /** Portugal. */
  Pt = 'PT',
  /** Paraguay. */
  Py = 'PY',
  /** Qatar. */
  Qa = 'QA',
  /** Réunion. */
  Re = 'RE',
  /** Romania. */
  Ro = 'RO',
  /** Serbia. */
  Rs = 'RS',
  /** Russia. */
  Ru = 'RU',
  /** Rwanda. */
  Rw = 'RW',
  /** Saudi Arabia. */
  Sa = 'SA',
  /** Solomon Islands. */
  Sb = 'SB',
  /** Seychelles. */
  Sc = 'SC',
  /** Sudan. */
  Sd = 'SD',
  /** Sweden. */
  Se = 'SE',
  /** Singapore. */
  Sg = 'SG',
  /** St. Helena. */
  Sh = 'SH',
  /** Slovenia. */
  Si = 'SI',
  /** Svalbard & Jan Mayen. */
  Sj = 'SJ',
  /** Slovakia. */
  Sk = 'SK',
  /** Sierra Leone. */
  Sl = 'SL',
  /** San Marino. */
  Sm = 'SM',
  /** Senegal. */
  Sn = 'SN',
  /** Somalia. */
  So = 'SO',
  /** Suriname. */
  Sr = 'SR',
  /** South Sudan. */
  Ss = 'SS',
  /** São Tomé & Príncipe. */
  St = 'ST',
  /** El Salvador. */
  Sv = 'SV',
  /** Sint Maarten. */
  Sx = 'SX',
  /** Syria. */
  Sy = 'SY',
  /** Eswatini. */
  Sz = 'SZ',
  /** Tristan da Cunha. */
  Ta = 'TA',
  /** Turks & Caicos Islands. */
  Tc = 'TC',
  /** Chad. */
  Td = 'TD',
  /** French Southern Territories. */
  Tf = 'TF',
  /** Togo. */
  Tg = 'TG',
  /** Thailand. */
  Th = 'TH',
  /** Tajikistan. */
  Tj = 'TJ',
  /** Tokelau. */
  Tk = 'TK',
  /** Timor-Leste. */
  Tl = 'TL',
  /** Turkmenistan. */
  Tm = 'TM',
  /** Tunisia. */
  Tn = 'TN',
  /** Tonga. */
  To = 'TO',
  /** Turkey. */
  Tr = 'TR',
  /** Trinidad & Tobago. */
  Tt = 'TT',
  /** Tuvalu. */
  Tv = 'TV',
  /** Taiwan. */
  Tw = 'TW',
  /** Tanzania. */
  Tz = 'TZ',
  /** Ukraine. */
  Ua = 'UA',
  /** Uganda. */
  Ug = 'UG',
  /** U.S. Outlying Islands. */
  Um = 'UM',
  /** United States. */
  Us = 'US',
  /** Uruguay. */
  Uy = 'UY',
  /** Uzbekistan. */
  Uz = 'UZ',
  /** Vatican City. */
  Va = 'VA',
  /** St. Vincent & Grenadines. */
  Vc = 'VC',
  /** Venezuela. */
  Ve = 'VE',
  /** British Virgin Islands. */
  Vg = 'VG',
  /** Vietnam. */
  Vn = 'VN',
  /** Vanuatu. */
  Vu = 'VU',
  /** Wallis & Futuna. */
  Wf = 'WF',
  /** Samoa. */
  Ws = 'WS',
  /** Kosovo. */
  Xk = 'XK',
  /** Yemen. */
  Ye = 'YE',
  /** Mayotte. */
  Yt = 'YT',
  /** South Africa. */
  Za = 'ZA',
  /** Zambia. */
  Zm = 'ZM',
  /** Zimbabwe. */
  Zw = 'ZW',
  /** Unknown Region. */
  Zz = 'ZZ',
}

/** Credit card information used for a payment. */
export type CreditCard = {
  __typename?: 'CreditCard'
  /** The brand of the credit card. */
  brand?: Maybe<Scalars['String']>
  /** The expiry month of the credit card. */
  expiryMonth?: Maybe<Scalars['Int']>
  /** The expiry year of the credit card. */
  expiryYear?: Maybe<Scalars['Int']>
  /** The credit card's BIN number. */
  firstDigits?: Maybe<Scalars['String']>
  /** The first name of the card holder. */
  firstName?: Maybe<Scalars['String']>
  /** The last 4 digits of the credit card. */
  lastDigits?: Maybe<Scalars['String']>
  /** The last name of the card holder. */
  lastName?: Maybe<Scalars['String']>
  /** The masked credit card number with only the last 4 digits displayed. */
  maskedNumber?: Maybe<Scalars['String']>
}

/**
 * Specifies the fields required to complete a checkout with
 * a Shopify vaulted credit card payment.
 *
 */
export type CreditCardPaymentInput = {
  /** The amount of the payment. */
  amount: Scalars['Money']
  /** The billing address for the payment. */
  billingAddress: MailingAddressInput
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String']
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>
  /** The ID returned by Shopify's Card Vault. */
  vaultId: Scalars['String']
}

/**
 * Specifies the fields required to complete a checkout with
 * a Shopify vaulted credit card payment.
 *
 */
export type CreditCardPaymentInputV2 = {
  /** The billing address for the payment. */
  billingAddress: MailingAddressInput
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String']
  /** The amount and currency of the payment. */
  paymentAmount: MoneyInput
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>
  /** The ID returned by Shopify's Card Vault. */
  vaultId: Scalars['String']
}

/** The part of the image that should remain after cropping. */
export enum CropRegion {
  /** Keep the bottom of the image. */
  Bottom = 'BOTTOM',
  /** Keep the center of the image. */
  Center = 'CENTER',
  /** Keep the left of the image. */
  Left = 'LEFT',
  /** Keep the right of the image. */
  Right = 'RIGHT',
  /** Keep the top of the image. */
  Top = 'TOP',
}

/** A currency. */
export type Currency = {
  __typename?: 'Currency'
  /** The ISO code of the currency. */
  isoCode: CurrencyCode
  /** The name of the currency. */
  name: Scalars['String']
  /** The symbol of the currency. */
  symbol: Scalars['String']
}

/**
 * The three-letter currency codes that represent the world currencies used in stores. These include standard ISO 4217 codes, legacy codes,
 * and non-standard codes.
 *
 */
export enum CurrencyCode {
  /** United Arab Emirates Dirham (AED). */
  Aed = 'AED',
  /** Afghan Afghani (AFN). */
  Afn = 'AFN',
  /** Albanian Lek (ALL). */
  All = 'ALL',
  /** Armenian Dram (AMD). */
  Amd = 'AMD',
  /** Netherlands Antillean Guilder. */
  Ang = 'ANG',
  /** Angolan Kwanza (AOA). */
  Aoa = 'AOA',
  /** Argentine Pesos (ARS). */
  Ars = 'ARS',
  /** Australian Dollars (AUD). */
  Aud = 'AUD',
  /** Aruban Florin (AWG). */
  Awg = 'AWG',
  /** Azerbaijani Manat (AZN). */
  Azn = 'AZN',
  /** Bosnia and Herzegovina Convertible Mark (BAM). */
  Bam = 'BAM',
  /** Barbadian Dollar (BBD). */
  Bbd = 'BBD',
  /** Bangladesh Taka (BDT). */
  Bdt = 'BDT',
  /** Bulgarian Lev (BGN). */
  Bgn = 'BGN',
  /** Bahraini Dinar (BHD). */
  Bhd = 'BHD',
  /** Burundian Franc (BIF). */
  Bif = 'BIF',
  /** Bermudian Dollar (BMD). */
  Bmd = 'BMD',
  /** Brunei Dollar (BND). */
  Bnd = 'BND',
  /** Bolivian Boliviano (BOB). */
  Bob = 'BOB',
  /** Brazilian Real (BRL). */
  Brl = 'BRL',
  /** Bahamian Dollar (BSD). */
  Bsd = 'BSD',
  /** Bhutanese Ngultrum (BTN). */
  Btn = 'BTN',
  /** Botswana Pula (BWP). */
  Bwp = 'BWP',
  /** Belarusian Ruble (BYN). */
  Byn = 'BYN',
  /** Belarusian Ruble (BYR). */
  Byr = 'BYR',
  /** Belize Dollar (BZD). */
  Bzd = 'BZD',
  /** Canadian Dollars (CAD). */
  Cad = 'CAD',
  /** Congolese franc (CDF). */
  Cdf = 'CDF',
  /** Swiss Francs (CHF). */
  Chf = 'CHF',
  /** Chilean Peso (CLP). */
  Clp = 'CLP',
  /** Chinese Yuan Renminbi (CNY). */
  Cny = 'CNY',
  /** Colombian Peso (COP). */
  Cop = 'COP',
  /** Costa Rican Colones (CRC). */
  Crc = 'CRC',
  /** Cape Verdean escudo (CVE). */
  Cve = 'CVE',
  /** Czech Koruny (CZK). */
  Czk = 'CZK',
  /** Djiboutian Franc (DJF). */
  Djf = 'DJF',
  /** Danish Kroner (DKK). */
  Dkk = 'DKK',
  /** Dominican Peso (DOP). */
  Dop = 'DOP',
  /** Algerian Dinar (DZD). */
  Dzd = 'DZD',
  /** Egyptian Pound (EGP). */
  Egp = 'EGP',
  /** Eritrean Nakfa (ERN). */
  Ern = 'ERN',
  /** Ethiopian Birr (ETB). */
  Etb = 'ETB',
  /** Euro (EUR). */
  Eur = 'EUR',
  /** Fijian Dollars (FJD). */
  Fjd = 'FJD',
  /** Falkland Islands Pounds (FKP). */
  Fkp = 'FKP',
  /** United Kingdom Pounds (GBP). */
  Gbp = 'GBP',
  /** Georgian Lari (GEL). */
  Gel = 'GEL',
  /** Ghanaian Cedi (GHS). */
  Ghs = 'GHS',
  /** Gibraltar Pounds (GIP). */
  Gip = 'GIP',
  /** Gambian Dalasi (GMD). */
  Gmd = 'GMD',
  /** Guinean Franc (GNF). */
  Gnf = 'GNF',
  /** Guatemalan Quetzal (GTQ). */
  Gtq = 'GTQ',
  /** Guyanese Dollar (GYD). */
  Gyd = 'GYD',
  /** Hong Kong Dollars (HKD). */
  Hkd = 'HKD',
  /** Honduran Lempira (HNL). */
  Hnl = 'HNL',
  /** Croatian Kuna (HRK). */
  Hrk = 'HRK',
  /** Haitian Gourde (HTG). */
  Htg = 'HTG',
  /** Hungarian Forint (HUF). */
  Huf = 'HUF',
  /** Indonesian Rupiah (IDR). */
  Idr = 'IDR',
  /** Israeli New Shekel (NIS). */
  Ils = 'ILS',
  /** Indian Rupees (INR). */
  Inr = 'INR',
  /** Iraqi Dinar (IQD). */
  Iqd = 'IQD',
  /** Iranian Rial (IRR). */
  Irr = 'IRR',
  /** Icelandic Kronur (ISK). */
  Isk = 'ISK',
  /** Jersey Pound. */
  Jep = 'JEP',
  /** Jamaican Dollars (JMD). */
  Jmd = 'JMD',
  /** Jordanian Dinar (JOD). */
  Jod = 'JOD',
  /** Japanese Yen (JPY). */
  Jpy = 'JPY',
  /** Kenyan Shilling (KES). */
  Kes = 'KES',
  /** Kyrgyzstani Som (KGS). */
  Kgs = 'KGS',
  /** Cambodian Riel. */
  Khr = 'KHR',
  /** Kiribati Dollar (KID). */
  Kid = 'KID',
  /** Comorian Franc (KMF). */
  Kmf = 'KMF',
  /** South Korean Won (KRW). */
  Krw = 'KRW',
  /** Kuwaiti Dinar (KWD). */
  Kwd = 'KWD',
  /** Cayman Dollars (KYD). */
  Kyd = 'KYD',
  /** Kazakhstani Tenge (KZT). */
  Kzt = 'KZT',
  /** Laotian Kip (LAK). */
  Lak = 'LAK',
  /** Lebanese Pounds (LBP). */
  Lbp = 'LBP',
  /** Sri Lankan Rupees (LKR). */
  Lkr = 'LKR',
  /** Liberian Dollar (LRD). */
  Lrd = 'LRD',
  /** Lesotho Loti (LSL). */
  Lsl = 'LSL',
  /** Lithuanian Litai (LTL). */
  Ltl = 'LTL',
  /** Latvian Lati (LVL). */
  Lvl = 'LVL',
  /** Libyan Dinar (LYD). */
  Lyd = 'LYD',
  /** Moroccan Dirham. */
  Mad = 'MAD',
  /** Moldovan Leu (MDL). */
  Mdl = 'MDL',
  /** Malagasy Ariary (MGA). */
  Mga = 'MGA',
  /** Macedonia Denar (MKD). */
  Mkd = 'MKD',
  /** Burmese Kyat (MMK). */
  Mmk = 'MMK',
  /** Mongolian Tugrik. */
  Mnt = 'MNT',
  /** Macanese Pataca (MOP). */
  Mop = 'MOP',
  /** Mauritanian Ouguiya (MRU). */
  Mru = 'MRU',
  /** Mauritian Rupee (MUR). */
  Mur = 'MUR',
  /** Maldivian Rufiyaa (MVR). */
  Mvr = 'MVR',
  /** Malawian Kwacha (MWK). */
  Mwk = 'MWK',
  /** Mexican Pesos (MXN). */
  Mxn = 'MXN',
  /** Malaysian Ringgits (MYR). */
  Myr = 'MYR',
  /** Mozambican Metical. */
  Mzn = 'MZN',
  /** Namibian Dollar. */
  Nad = 'NAD',
  /** Nigerian Naira (NGN). */
  Ngn = 'NGN',
  /** Nicaraguan Córdoba (NIO). */
  Nio = 'NIO',
  /** Norwegian Kroner (NOK). */
  Nok = 'NOK',
  /** Nepalese Rupee (NPR). */
  Npr = 'NPR',
  /** New Zealand Dollars (NZD). */
  Nzd = 'NZD',
  /** Omani Rial (OMR). */
  Omr = 'OMR',
  /** Panamian Balboa (PAB). */
  Pab = 'PAB',
  /** Peruvian Nuevo Sol (PEN). */
  Pen = 'PEN',
  /** Papua New Guinean Kina (PGK). */
  Pgk = 'PGK',
  /** Philippine Peso (PHP). */
  Php = 'PHP',
  /** Pakistani Rupee (PKR). */
  Pkr = 'PKR',
  /** Polish Zlotych (PLN). */
  Pln = 'PLN',
  /** Paraguayan Guarani (PYG). */
  Pyg = 'PYG',
  /** Qatari Rial (QAR). */
  Qar = 'QAR',
  /** Romanian Lei (RON). */
  Ron = 'RON',
  /** Serbian dinar (RSD). */
  Rsd = 'RSD',
  /** Russian Rubles (RUB). */
  Rub = 'RUB',
  /** Rwandan Franc (RWF). */
  Rwf = 'RWF',
  /** Saudi Riyal (SAR). */
  Sar = 'SAR',
  /** Solomon Islands Dollar (SBD). */
  Sbd = 'SBD',
  /** Seychellois Rupee (SCR). */
  Scr = 'SCR',
  /** Sudanese Pound (SDG). */
  Sdg = 'SDG',
  /** Swedish Kronor (SEK). */
  Sek = 'SEK',
  /** Singapore Dollars (SGD). */
  Sgd = 'SGD',
  /** Saint Helena Pounds (SHP). */
  Shp = 'SHP',
  /** Sierra Leonean Leone (SLL). */
  Sll = 'SLL',
  /** Somali Shilling (SOS). */
  Sos = 'SOS',
  /** Surinamese Dollar (SRD). */
  Srd = 'SRD',
  /** South Sudanese Pound (SSP). */
  Ssp = 'SSP',
  /** Sao Tome And Principe Dobra (STD). */
  Std = 'STD',
  /** Syrian Pound (SYP). */
  Syp = 'SYP',
  /** Swazi Lilangeni (SZL). */
  Szl = 'SZL',
  /** Thai baht (THB). */
  Thb = 'THB',
  /** Tajikistani Somoni (TJS). */
  Tjs = 'TJS',
  /** Turkmenistani Manat (TMT). */
  Tmt = 'TMT',
  /** Tunisian Dinar (TND). */
  Tnd = 'TND',
  /** Tongan Pa'anga (TOP). */
  Top = 'TOP',
  /** Turkish Lira (TRY). */
  Try = 'TRY',
  /** Trinidad and Tobago Dollars (TTD). */
  Ttd = 'TTD',
  /** Taiwan Dollars (TWD). */
  Twd = 'TWD',
  /** Tanzanian Shilling (TZS). */
  Tzs = 'TZS',
  /** Ukrainian Hryvnia (UAH). */
  Uah = 'UAH',
  /** Ugandan Shilling (UGX). */
  Ugx = 'UGX',
  /** United States Dollars (USD). */
  Usd = 'USD',
  /** Uruguayan Pesos (UYU). */
  Uyu = 'UYU',
  /** Uzbekistan som (UZS). */
  Uzs = 'UZS',
  /** Venezuelan Bolivares (VEF). */
  Vef = 'VEF',
  /** Venezuelan Bolivares (VES). */
  Ves = 'VES',
  /** Vietnamese đồng (VND). */
  Vnd = 'VND',
  /** Vanuatu Vatu (VUV). */
  Vuv = 'VUV',
  /** Samoan Tala (WST). */
  Wst = 'WST',
  /** Central African CFA Franc (XAF). */
  Xaf = 'XAF',
  /** East Caribbean Dollar (XCD). */
  Xcd = 'XCD',
  /** West African CFA franc (XOF). */
  Xof = 'XOF',
  /** CFP Franc (XPF). */
  Xpf = 'XPF',
  /** Unrecognized currency. */
  Xxx = 'XXX',
  /** Yemeni Rial (YER). */
  Yer = 'YER',
  /** South African Rand (ZAR). */
  Zar = 'ZAR',
  /** Zambian Kwacha (ZMW). */
  Zmw = 'ZMW',
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type Customer = HasMetafields & {
  __typename?: 'Customer'
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing: Scalars['Boolean']
  /** A list of addresses for the customer. */
  addresses: MailingAddressConnection
  /** The date and time when the customer was created. */
  createdAt: Scalars['DateTime']
  /** The customer’s default address. */
  defaultAddress?: Maybe<MailingAddress>
  /** The customer’s name, email or phone number. */
  displayName: Scalars['String']
  /** The customer’s email address. */
  email?: Maybe<Scalars['String']>
  /** The customer’s first name. */
  firstName?: Maybe<Scalars['String']>
  /** A unique identifier for the customer. */
  id: Scalars['ID']
  /** The customer's most recently updated, incomplete checkout. */
  lastIncompleteCheckout?: Maybe<Checkout>
  /** The customer’s last name. */
  lastName?: Maybe<Scalars['String']>
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated The `metafields` field will be removed in the future in favor of using [aliases](https://graphql.org/learn/queries/#aliases) with the `metafield` field.
   *
   */
  metafields: MetafieldConnection
  /** The orders associated with the customer. */
  orders: OrderConnection
  /** The customer’s phone number. */
  phone?: Maybe<Scalars['String']>
  /**
   * A comma separated list of tags that have been added to the customer.
   * Additional access scope required: unauthenticated_read_customer_tags.
   *
   */
  tags: Array<Scalars['String']>
  /** The date and time when the customer information was updated. */
  updatedAt: Scalars['DateTime']
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type CustomerAddressesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type CustomerMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type CustomerMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type CustomerOrdersArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<OrderSortKeys>
}

/** A CustomerAccessToken represents the unique token required to make modifications to the customer object. */
export type CustomerAccessToken = {
  __typename?: 'CustomerAccessToken'
  /** The customer’s access token. */
  accessToken: Scalars['String']
  /** The date and time when the customer access token expires. */
  expiresAt: Scalars['DateTime']
}

/** Specifies the input fields required to create a customer access token. */
export type CustomerAccessTokenCreateInput = {
  /** The email associated to the customer. */
  email: Scalars['String']
  /** The login password to be used by the customer. */
  password: Scalars['String']
}

/** Return type for `customerAccessTokenCreate` mutation. */
export type CustomerAccessTokenCreatePayload = {
  __typename?: 'CustomerAccessTokenCreatePayload'
  /** The newly created customer access token object. */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `customerAccessTokenCreateWithMultipass` mutation. */
export type CustomerAccessTokenCreateWithMultipassPayload = {
  __typename?: 'CustomerAccessTokenCreateWithMultipassPayload'
  /** An access token object associated with the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
}

/** Return type for `customerAccessTokenDelete` mutation. */
export type CustomerAccessTokenDeletePayload = {
  __typename?: 'CustomerAccessTokenDeletePayload'
  /** The destroyed access token. */
  deletedAccessToken?: Maybe<Scalars['String']>
  /** ID of the destroyed customer access token. */
  deletedCustomerAccessTokenId?: Maybe<Scalars['String']>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<UserError>
}

/** Return type for `customerAccessTokenRenew` mutation. */
export type CustomerAccessTokenRenewPayload = {
  __typename?: 'CustomerAccessTokenRenewPayload'
  /** The renewed customer access token object. */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<UserError>
}

/** Return type for `customerActivateByUrl` mutation. */
export type CustomerActivateByUrlPayload = {
  __typename?: 'CustomerActivateByUrlPayload'
  /** The customer that was activated. */
  customer?: Maybe<Customer>
  /** A new customer access token for the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
}

/** Specifies the input fields required to activate a customer. */
export type CustomerActivateInput = {
  /** The activation token required to activate the customer. */
  activationToken: Scalars['String']
  /** New password that will be set during activation. */
  password: Scalars['String']
}

/** Return type for `customerActivate` mutation. */
export type CustomerActivatePayload = {
  __typename?: 'CustomerActivatePayload'
  /** The customer object. */
  customer?: Maybe<Customer>
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `customerAddressCreate` mutation. */
export type CustomerAddressCreatePayload = {
  __typename?: 'CustomerAddressCreatePayload'
  /** The new customer address object. */
  customerAddress?: Maybe<MailingAddress>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `customerAddressDelete` mutation. */
export type CustomerAddressDeletePayload = {
  __typename?: 'CustomerAddressDeletePayload'
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /** ID of the deleted customer address. */
  deletedCustomerAddressId?: Maybe<Scalars['String']>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `customerAddressUpdate` mutation. */
export type CustomerAddressUpdatePayload = {
  __typename?: 'CustomerAddressUpdatePayload'
  /** The customer’s updated mailing address. */
  customerAddress?: Maybe<MailingAddress>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** The fields required to create a new customer. */
export type CustomerCreateInput = {
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: InputMaybe<Scalars['Boolean']>
  /** The customer’s email. */
  email: Scalars['String']
  /** The customer’s first name. */
  firstName?: InputMaybe<Scalars['String']>
  /** The customer’s last name. */
  lastName?: InputMaybe<Scalars['String']>
  /** The login password used by the customer. */
  password: Scalars['String']
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: InputMaybe<Scalars['String']>
}

/** Return type for `customerCreate` mutation. */
export type CustomerCreatePayload = {
  __typename?: 'CustomerCreatePayload'
  /** The created customer object. */
  customer?: Maybe<Customer>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `customerDefaultAddressUpdate` mutation. */
export type CustomerDefaultAddressUpdatePayload = {
  __typename?: 'CustomerDefaultAddressUpdatePayload'
  /** The updated customer object. */
  customer?: Maybe<Customer>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Possible error codes that can be returned by `CustomerUserError`. */
export enum CustomerErrorCode {
  /** Customer already enabled. */
  AlreadyEnabled = 'ALREADY_ENABLED',
  /** Input email contains an invalid domain name. */
  BadDomain = 'BAD_DOMAIN',
  /** The input value is blank. */
  Blank = 'BLANK',
  /** Input contains HTML tags. */
  ContainsHtmlTags = 'CONTAINS_HTML_TAGS',
  /** Input contains URL. */
  ContainsUrl = 'CONTAINS_URL',
  /** Customer is disabled. */
  CustomerDisabled = 'CUSTOMER_DISABLED',
  /** The input value is invalid. */
  Invalid = 'INVALID',
  /** Multipass token is not valid. */
  InvalidMultipassRequest = 'INVALID_MULTIPASS_REQUEST',
  /** Address does not exist. */
  NotFound = 'NOT_FOUND',
  /** Input password starts or ends with whitespace. */
  PasswordStartsOrEndsWithWhitespace = 'PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE',
  /** The input value is already taken. */
  Taken = 'TAKEN',
  /** Invalid activation token. */
  TokenInvalid = 'TOKEN_INVALID',
  /** The input value is too long. */
  TooLong = 'TOO_LONG',
  /** The input value is too short. */
  TooShort = 'TOO_SHORT',
  /** Unidentified customer. */
  UnidentifiedCustomer = 'UNIDENTIFIED_CUSTOMER',
}

/** Return type for `customerRecover` mutation. */
export type CustomerRecoverPayload = {
  __typename?: 'CustomerRecoverPayload'
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `customerResetByUrl` mutation. */
export type CustomerResetByUrlPayload = {
  __typename?: 'CustomerResetByUrlPayload'
  /** The customer object which was reset. */
  customer?: Maybe<Customer>
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Specifies the fields required to reset a customer’s password. */
export type CustomerResetInput = {
  /** New password that will be set as part of the reset password process. */
  password: Scalars['String']
  /** The reset token required to reset the customer’s password. */
  resetToken: Scalars['String']
}

/** Return type for `customerReset` mutation. */
export type CustomerResetPayload = {
  __typename?: 'CustomerResetPayload'
  /** The customer object which was reset. */
  customer?: Maybe<Customer>
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Specifies the fields required to update the Customer information. */
export type CustomerUpdateInput = {
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: InputMaybe<Scalars['Boolean']>
  /** The customer’s email. */
  email?: InputMaybe<Scalars['String']>
  /** The customer’s first name. */
  firstName?: InputMaybe<Scalars['String']>
  /** The customer’s last name. */
  lastName?: InputMaybe<Scalars['String']>
  /** The login password used by the customer. */
  password?: InputMaybe<Scalars['String']>
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_. To remove the phone number, specify `null`.
   *
   */
  phone?: InputMaybe<Scalars['String']>
}

/** Return type for `customerUpdate` mutation. */
export type CustomerUpdatePayload = {
  __typename?: 'CustomerUpdatePayload'
  /** The updated customer object. */
  customer?: Maybe<Customer>
  /**
   * The newly created customer access token. If the customer's password is updated, all previous access tokens
   * (including the one used to perform this mutation) become invalid, and a new token is generated.
   *
   */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Represents an error that happens during execution of a customer mutation. */
export type CustomerUserError = DisplayableError & {
  __typename?: 'CustomerUserError'
  /** The error code. */
  code?: Maybe<CustomerErrorCode>
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** Digital wallet, such as Apple Pay, which can be used for accelerated checkouts. */
export enum DigitalWallet {
  /** Android Pay. */
  AndroidPay = 'ANDROID_PAY',
  /** Apple Pay. */
  ApplePay = 'APPLE_PAY',
  /** Google Pay. */
  GooglePay = 'GOOGLE_PAY',
  /** Shopify Pay. */
  ShopifyPay = 'SHOPIFY_PAY',
}

/**
 * An amount discounting the line that has been allocated by a discount.
 *
 */
export type DiscountAllocation = {
  __typename?: 'DiscountAllocation'
  /** Amount of discount allocated. */
  allocatedAmount: MoneyV2
  /** The discount this allocated amount originated from. */
  discountApplication: DiscountApplication
}

/**
 * Discount applications capture the intentions of a discount source at
 * the time of application.
 *
 */
export type DiscountApplication = {
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType
  /** The value of the discount application. */
  value: PricingValue
}

/** The method by which the discount's value is allocated onto its entitled lines. */
export enum DiscountApplicationAllocationMethod {
  /** The value is spread across all entitled lines. */
  Across = 'ACROSS',
  /** The value is applied onto every entitled line. */
  Each = 'EACH',
  /** The value is specifically applied onto a particular line. */
  One = 'ONE',
}

/**
 * An auto-generated type for paginating through multiple DiscountApplications.
 *
 */
export type DiscountApplicationConnection = {
  __typename?: 'DiscountApplicationConnection'
  /** A list of edges. */
  edges: Array<DiscountApplicationEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one DiscountApplication and a cursor during pagination.
 *
 */
export type DiscountApplicationEdge = {
  __typename?: 'DiscountApplicationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of DiscountApplicationEdge. */
  node: DiscountApplication
}

/**
 * Which lines on the order that the discount is allocated over, of the type
 * defined by the Discount Application's target_type.
 *
 */
export enum DiscountApplicationTargetSelection {
  /** The discount is allocated onto all the lines. */
  All = 'ALL',
  /** The discount is allocated onto only the lines it is entitled for. */
  Entitled = 'ENTITLED',
  /** The discount is allocated onto explicitly chosen lines. */
  Explicit = 'EXPLICIT',
}

/**
 * The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards.
 *
 */
export enum DiscountApplicationTargetType {
  /** The discount applies onto line items. */
  LineItem = 'LINE_ITEM',
  /** The discount applies onto shipping lines. */
  ShippingLine = 'SHIPPING_LINE',
}

/**
 * Discount code applications capture the intentions of a discount code at
 * the time that it is applied.
 *
 */
export type DiscountCodeApplication = DiscountApplication & {
  __typename?: 'DiscountCodeApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod
  /** Specifies whether the discount code was applied successfully. */
  applicable: Scalars['Boolean']
  /** The string identifying the discount code that was used at the time of application. */
  code: Scalars['String']
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType
  /** The value of the discount application. */
  value: PricingValue
}

/** Represents an error in the input of a mutation. */
export type DisplayableError = {
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** Represents a web address. */
export type Domain = {
  __typename?: 'Domain'
  /** The host name of the domain (eg: `example.com`). */
  host: Scalars['String']
  /** Whether SSL is enabled or not. */
  sslEnabled: Scalars['Boolean']
  /** The URL of the domain (eg: `https://example.com`). */
  url: Scalars['URL']
}

/** Represents a video hosted outside of Shopify. */
export type ExternalVideo = Media &
  Node & {
    __typename?: 'ExternalVideo'
    /** A word or phrase to share the nature or contents of a media. */
    alt?: Maybe<Scalars['String']>
    /**
     * The URL.
     * @deprecated Use `originUrl` instead
     */
    embeddedUrl: Scalars['URL']
    /** The host of the external video. */
    host: MediaHost
    /** A globally-unique identifier. */
    id: Scalars['ID']
    /** The media content type. */
    mediaContentType: MediaContentType
    /** The preview image for the media. */
    previewImage?: Maybe<Image>
  }

/** A filter that is supported on the parent field. */
export type Filter = {
  __typename?: 'Filter'
  /** A unique identifier. */
  id: Scalars['String']
  /** A human-friendly string for this filter. */
  label: Scalars['String']
  /** An enumeration that denotes the type of data this filter represents. */
  type: FilterType
  /** The list of values for this filter. */
  values: Array<FilterValue>
}

/** Denotes the type of data this filter group represents. */
export enum FilterType {
  /** A list of selectable values. */
  List = 'LIST',
  /** A range of prices. */
  PriceRange = 'PRICE_RANGE',
}

/** A selectable value within a filter. */
export type FilterValue = {
  __typename?: 'FilterValue'
  /** The number of results that match this filter value. */
  count: Scalars['Int']
  /** A unique identifier. */
  id: Scalars['String']
  /**
   * An input object that can be used to filter by this value on the parent field.
   *
   * The value is provided as a helper for building dynamic filtering UI. For example, if you have a list of selected `FilterValue` objects, you can combine their respective `input` values to use in a subsequent query.
   *
   */
  input: Scalars['JSON']
  /** A human-friendly string for this filter value. */
  label: Scalars['String']
}

/** Represents a single fulfillment in an order. */
export type Fulfillment = {
  __typename?: 'Fulfillment'
  /** List of the fulfillment's line items. */
  fulfillmentLineItems: FulfillmentLineItemConnection
  /** The name of the tracking company. */
  trackingCompany?: Maybe<Scalars['String']>
  /**
   * Tracking information associated with the fulfillment,
   * such as the tracking number and tracking URL.
   *
   */
  trackingInfo: Array<FulfillmentTrackingInfo>
}

/** Represents a single fulfillment in an order. */
export type FulfillmentFulfillmentLineItemsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** Represents a single fulfillment in an order. */
export type FulfillmentTrackingInfoArgs = {
  first?: InputMaybe<Scalars['Int']>
}

/** Represents a single line item in a fulfillment. There is at most one fulfillment line item for each order line item. */
export type FulfillmentLineItem = {
  __typename?: 'FulfillmentLineItem'
  /** The associated order's line item. */
  lineItem: OrderLineItem
  /** The amount fulfilled in this fulfillment. */
  quantity: Scalars['Int']
}

/**
 * An auto-generated type for paginating through multiple FulfillmentLineItems.
 *
 */
export type FulfillmentLineItemConnection = {
  __typename?: 'FulfillmentLineItemConnection'
  /** A list of edges. */
  edges: Array<FulfillmentLineItemEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one FulfillmentLineItem and a cursor during pagination.
 *
 */
export type FulfillmentLineItemEdge = {
  __typename?: 'FulfillmentLineItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of FulfillmentLineItemEdge. */
  node: FulfillmentLineItem
}

/** Tracking information associated with the fulfillment. */
export type FulfillmentTrackingInfo = {
  __typename?: 'FulfillmentTrackingInfo'
  /** The tracking number of the fulfillment. */
  number?: Maybe<Scalars['String']>
  /** The URL to track the fulfillment. */
  url?: Maybe<Scalars['URL']>
}

/** Used to specify a geographical location. */
export type GeoCoordinateInput = {
  /** The coordinate's latitude value. */
  latitude: Scalars['Float']
  /** The coordinate's longitude value. */
  longitude: Scalars['Float']
}

/** Represents information about the metafields associated to the specified resource. */
export type HasMetafields = {
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated The `metafields` field will be removed in the future in favor of using [aliases](https://graphql.org/learn/queries/#aliases) with the `metafield` field.
   *
   */
  metafields: MetafieldConnection
}

/** Represents information about the metafields associated to the specified resource. */
export type HasMetafieldsMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** Represents information about the metafields associated to the specified resource. */
export type HasMetafieldsMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** Represents an image resource. */
export type Image = {
  __typename?: 'Image'
  /** A word or phrase to share the nature or contents of an image. */
  altText?: Maybe<Scalars['String']>
  /** The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
  height?: Maybe<Scalars['Int']>
  /** A unique identifier for the image. */
  id?: Maybe<Scalars['ID']>
  /**
   * The location of the original image as a URL.
   *
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   *
   * @deprecated Use `url` instead
   */
  originalSrc: Scalars['URL']
  /**
   * The location of the image as a URL.
   * @deprecated Use `url` instead
   */
  src: Scalars['URL']
  /**
   * The location of the transformed image as a URL.
   *
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   *
   * @deprecated Use `url(transform:)` instead
   */
  transformedSrc: Scalars['URL']
  /**
   * The location of the image as a URL.
   *
   * If no transform options are specified, then the original image will be preserved including any pre-applied transforms.
   *
   * All transformation options are considered "best-effort". Any transformation that the original image type doesn't support will be ignored.
   *
   * If you need multiple variations of the same image, then you can use [GraphQL field aliases](https://graphql.org/learn/queries/#aliases). For example:
   *
   * ```graphql
   * {
   *   ... on Image {
   *     original: url
   *     thumbnail: url(transform: { maxWidth: 80, maxHeight: 80 })
   *     retina: url(transform: { scale: 2 })
   *   }
   * }
   * ```
   *
   */
  url: Scalars['URL']
  /** The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
  width?: Maybe<Scalars['Int']>
}

/** Represents an image resource. */
export type ImageTransformedSrcArgs = {
  crop?: InputMaybe<CropRegion>
  maxHeight?: InputMaybe<Scalars['Int']>
  maxWidth?: InputMaybe<Scalars['Int']>
  preferredContentType?: InputMaybe<ImageContentType>
  scale?: InputMaybe<Scalars['Int']>
}

/** Represents an image resource. */
export type ImageUrlArgs = {
  transform?: InputMaybe<ImageTransformInput>
}

/**
 * An auto-generated type for paginating through multiple Images.
 *
 */
export type ImageConnection = {
  __typename?: 'ImageConnection'
  /** A list of edges. */
  edges: Array<ImageEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** List of supported image content types. */
export enum ImageContentType {
  /** A JPG image. */
  Jpg = 'JPG',
  /** A PNG image. */
  Png = 'PNG',
  /** A WEBP image. */
  Webp = 'WEBP',
}

/**
 * An auto-generated type which holds one Image and a cursor during pagination.
 *
 */
export type ImageEdge = {
  __typename?: 'ImageEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ImageEdge. */
  node: Image
}

/**
 * The available options for transforming an image.
 *
 * All transformation options are considered "best-effort". Any transformation that the original image type doesn't support will be ignored.
 *
 */
export type ImageTransformInput = {
  /** Crop the image according to the specified region. */
  crop?: InputMaybe<CropRegion>
  /**
   * Image height in pixels between 1 and 5760.
   *
   */
  maxHeight?: InputMaybe<Scalars['Int']>
  /**
   * Image width in pixels between 1 and 5760.
   *
   */
  maxWidth?: InputMaybe<Scalars['Int']>
  /**
   * Convert the source image into the preferred content type.
   * Supported conversions: `.svg` to `.png`, any file type to `.jpg`, and any file type to `.webp`.
   *
   */
  preferredContentType?: InputMaybe<ImageContentType>
  /**
   * Image size multiplier for high-resolution retina displays. Must be within 1..3.
   *
   */
  scale?: InputMaybe<Scalars['Int']>
}

/** Information about the localized experiences configured for the shop. */
export type Localization = {
  __typename?: 'Localization'
  /** List of countries with enabled localized experiences. */
  availableCountries: Array<Country>
  /** The country of the active localized experience. Use the `@inContext` directive to change this value. */
  country: Country
}

/** Represents a location where product inventory is held. */
export type Location = Node & {
  __typename?: 'Location'
  /** The address of the location. */
  address: LocationAddress
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The name of the location. */
  name: Scalars['String']
}

/**
 * Represents the address of a location.
 *
 */
export type LocationAddress = {
  __typename?: 'LocationAddress'
  /** The first line of the address for the location. */
  address1?: Maybe<Scalars['String']>
  /** The second line of the address for the location. */
  address2?: Maybe<Scalars['String']>
  /** The city of the location. */
  city?: Maybe<Scalars['String']>
  /** The country of the location. */
  country?: Maybe<Scalars['String']>
  /** The country code of the location. */
  countryCode?: Maybe<Scalars['String']>
  /** A formatted version of the address for the location. */
  formatted: Array<Scalars['String']>
  /** The latitude coordinates of the location. */
  latitude?: Maybe<Scalars['Float']>
  /** The longitude coordinates of the location. */
  longitude?: Maybe<Scalars['Float']>
  /** The phone number of the location. */
  phone?: Maybe<Scalars['String']>
  /** The province of the location. */
  province?: Maybe<Scalars['String']>
  /**
   * The code for the province, state, or district of the address of the location.
   *
   */
  provinceCode?: Maybe<Scalars['String']>
  /** The ZIP code of the location. */
  zip?: Maybe<Scalars['String']>
}

/**
 * An auto-generated type for paginating through multiple Locations.
 *
 */
export type LocationConnection = {
  __typename?: 'LocationConnection'
  /** A list of edges. */
  edges: Array<LocationEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one Location and a cursor during pagination.
 *
 */
export type LocationEdge = {
  __typename?: 'LocationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of LocationEdge. */
  node: Location
}

/** The set of valid sort keys for the Location query. */
export enum LocationSortKeys {
  /** Sort by the `city` value. */
  City = 'CITY',
  /** Sort by the `distance` value. */
  Distance = 'DISTANCE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `name` value. */
  Name = 'NAME',
}

/** Represents a mailing address for customers and shipping. */
export type MailingAddress = Node & {
  __typename?: 'MailingAddress'
  /**
   * The first line of the address. Typically the street address or PO Box number.
   *
   */
  address1?: Maybe<Scalars['String']>
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   *
   */
  address2?: Maybe<Scalars['String']>
  /**
   * The name of the city, district, village, or town.
   *
   */
  city?: Maybe<Scalars['String']>
  /**
   * The name of the customer's company or organization.
   *
   */
  company?: Maybe<Scalars['String']>
  /**
   * The name of the country.
   *
   */
  country?: Maybe<Scalars['String']>
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   * @deprecated Use `countryCodeV2` instead
   */
  countryCode?: Maybe<Scalars['String']>
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   */
  countryCodeV2?: Maybe<CountryCode>
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']>
  /** A formatted version of the address, customized by the provided arguments. */
  formatted: Array<Scalars['String']>
  /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']>
  /** The latitude coordinate of the customer address. */
  latitude?: Maybe<Scalars['Float']>
  /** The longitude coordinate of the customer address. */
  longitude?: Maybe<Scalars['Float']>
  /**
   * The full name of the customer, based on firstName and lastName.
   *
   */
  name?: Maybe<Scalars['String']>
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: Maybe<Scalars['String']>
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']>
  /**
   * The two-letter code for the region.
   *
   * For example, ON.
   *
   */
  provinceCode?: Maybe<Scalars['String']>
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']>
}

/** Represents a mailing address for customers and shipping. */
export type MailingAddressFormattedArgs = {
  withCompany?: InputMaybe<Scalars['Boolean']>
  withName?: InputMaybe<Scalars['Boolean']>
}

/**
 * An auto-generated type for paginating through multiple MailingAddresses.
 *
 */
export type MailingAddressConnection = {
  __typename?: 'MailingAddressConnection'
  /** A list of edges. */
  edges: Array<MailingAddressEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one MailingAddress and a cursor during pagination.
 *
 */
export type MailingAddressEdge = {
  __typename?: 'MailingAddressEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MailingAddressEdge. */
  node: MailingAddress
}

/** Specifies the fields accepted to create or update a mailing address. */
export type MailingAddressInput = {
  /**
   * The first line of the address. Typically the street address or PO Box number.
   *
   */
  address1?: InputMaybe<Scalars['String']>
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   *
   */
  address2?: InputMaybe<Scalars['String']>
  /**
   * The name of the city, district, village, or town.
   *
   */
  city?: InputMaybe<Scalars['String']>
  /**
   * The name of the customer's company or organization.
   *
   */
  company?: InputMaybe<Scalars['String']>
  /** The name of the country. */
  country?: InputMaybe<Scalars['String']>
  /** The first name of the customer. */
  firstName?: InputMaybe<Scalars['String']>
  /** The last name of the customer. */
  lastName?: InputMaybe<Scalars['String']>
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: InputMaybe<Scalars['String']>
  /** The region of the address, such as the province, state, or district. */
  province?: InputMaybe<Scalars['String']>
  /** The zip or postal code of the address. */
  zip?: InputMaybe<Scalars['String']>
}

/**
 * Manual discount applications capture the intentions of a discount that was manually created.
 *
 */
export type ManualDiscountApplication = DiscountApplication & {
  __typename?: 'ManualDiscountApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod
  /** The description of the application. */
  description?: Maybe<Scalars['String']>
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType
  /** The title of the application. */
  title: Scalars['String']
  /** The value of the discount application. */
  value: PricingValue
}

/** Represents a media interface. */
export type Media = {
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>
  /** The media content type. */
  mediaContentType: MediaContentType
  /** The preview image for the media. */
  previewImage?: Maybe<Image>
}

/**
 * An auto-generated type for paginating through multiple Media.
 *
 */
export type MediaConnection = {
  __typename?: 'MediaConnection'
  /** A list of edges. */
  edges: Array<MediaEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** The possible content types for a media object. */
export enum MediaContentType {
  /** An externally hosted video. */
  ExternalVideo = 'EXTERNAL_VIDEO',
  /** A Shopify hosted image. */
  Image = 'IMAGE',
  /** A 3d model. */
  Model_3D = 'MODEL_3D',
  /** A Shopify hosted video. */
  Video = 'VIDEO',
}

/**
 * An auto-generated type which holds one Media and a cursor during pagination.
 *
 */
export type MediaEdge = {
  __typename?: 'MediaEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MediaEdge. */
  node: Media
}

/** Host for a Media Resource. */
export enum MediaHost {
  /** Host for Vimeo embedded videos. */
  Vimeo = 'VIMEO',
  /** Host for YouTube embedded videos. */
  Youtube = 'YOUTUBE',
}

/** Represents a Shopify hosted image. */
export type MediaImage = Media &
  Node & {
    __typename?: 'MediaImage'
    /** A word or phrase to share the nature or contents of a media. */
    alt?: Maybe<Scalars['String']>
    /** A globally-unique identifier. */
    id: Scalars['ID']
    /** The image for the media. */
    image?: Maybe<Image>
    /** The media content type. */
    mediaContentType: MediaContentType
    /** The preview image for the media. */
    previewImage?: Maybe<Image>
  }

/** The merchandise to be purchased at checkout. */
export type Merchandise = ProductVariant

/**
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * comprised of keys, values, and value types.
 *
 */
export type Metafield = Node & {
  __typename?: 'Metafield'
  /** The date and time when the storefront metafield was created. */
  createdAt: Scalars['DateTime']
  /** The description of a metafield. */
  description?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The key name for a metafield. */
  key: Scalars['String']
  /** The namespace for a metafield. */
  namespace: Scalars['String']
  /** The parent object that the metafield belongs to. */
  parentResource: MetafieldParentResource
  /** Returns a reference object if the metafield definition's type is a resource reference. */
  reference?: Maybe<MetafieldReference>
  /**
   * The type name of the metafield.
   * See the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).
   *
   */
  type: Scalars['String']
  /** The date and time when the storefront metafield was updated. */
  updatedAt: Scalars['DateTime']
  /** The value of a metafield. */
  value: Scalars['String']
}

/**
 * An auto-generated type for paginating through multiple Metafields.
 *
 */
export type MetafieldConnection = {
  __typename?: 'MetafieldConnection'
  /** A list of edges. */
  edges: Array<MetafieldEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one Metafield and a cursor during pagination.
 *
 */
export type MetafieldEdge = {
  __typename?: 'MetafieldEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MetafieldEdge. */
  node: Metafield
}

/**
 * A filter used to view a subset of products in a collection matching a specific metafield value.
 *
 * Only the following metafield types are currently supported:
 * - `number_integer`
 * - `number_decimal`
 * - `single_line_text_field`
 *
 */
export type MetafieldFilter = {
  /** The key of the metafield to filter on. */
  key: Scalars['String']
  /** The namespace of the metafield to filter on. */
  namespace: Scalars['String']
  /** The value of the metafield. */
  value: Scalars['String']
}

/** A resource that the metafield belongs to. */
export type MetafieldParentResource =
  | Article
  | Blog
  | Collection
  | Customer
  | Order
  | Page
  | Product
  | ProductVariant
  | Shop

/**
 * Returns the resource which is being referred to by a metafield.
 *
 */
export type MetafieldReference = MediaImage | Page | Product | ProductVariant

/** Represents a Shopify hosted 3D model. */
export type Model3d = Media &
  Node & {
    __typename?: 'Model3d'
    /** A word or phrase to share the nature or contents of a media. */
    alt?: Maybe<Scalars['String']>
    /** A globally-unique identifier. */
    id: Scalars['ID']
    /** The media content type. */
    mediaContentType: MediaContentType
    /** The preview image for the media. */
    previewImage?: Maybe<Image>
    /** The sources for a 3d model. */
    sources: Array<Model3dSource>
  }

/** Represents a source for a Shopify hosted 3d model. */
export type Model3dSource = {
  __typename?: 'Model3dSource'
  /** The filesize of the 3d model. */
  filesize: Scalars['Int']
  /** The format of the 3d model. */
  format: Scalars['String']
  /** The MIME type of the 3d model. */
  mimeType: Scalars['String']
  /** The URL of the 3d model. */
  url: Scalars['String']
}

/** Specifies the fields for a monetary value with currency. */
export type MoneyInput = {
  /** Decimal money amount. */
  amount: Scalars['Decimal']
  /** Currency of the money. */
  currencyCode: CurrencyCode
}

/**
 * A monetary value with currency.
 *
 */
export type MoneyV2 = {
  __typename?: 'MoneyV2'
  /** Decimal money amount. */
  amount: Scalars['Decimal']
  /** Currency of the money. */
  currencyCode: CurrencyCode
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type Mutation = {
  __typename?: 'Mutation'
  /** Updates the attributes on a cart. */
  cartAttributesUpdate?: Maybe<CartAttributesUpdatePayload>
  /**
   * Updates customer information associated with a cart.
   * Buyer identity is used to determine
   * [international pricing](https://shopify.dev/custom-storefronts/products/international-pricing#create-a-checkout)
   * and should match the customer's shipping address.
   *
   */
  cartBuyerIdentityUpdate?: Maybe<CartBuyerIdentityUpdatePayload>
  /** Creates a new cart. */
  cartCreate?: Maybe<CartCreatePayload>
  /** Updates the discount codes applied to the cart. */
  cartDiscountCodesUpdate?: Maybe<CartDiscountCodesUpdatePayload>
  /** Adds a merchandise line to the cart. */
  cartLinesAdd?: Maybe<CartLinesAddPayload>
  /** Removes one or more merchandise lines from the cart. */
  cartLinesRemove?: Maybe<CartLinesRemovePayload>
  /** Updates one or more merchandise lines on a cart. */
  cartLinesUpdate?: Maybe<CartLinesUpdatePayload>
  /** Updates the note on the cart. */
  cartNoteUpdate?: Maybe<CartNoteUpdatePayload>
  /**
   * Updates the attributes of a checkout if `allowPartialAddresses` is `true`.
   * @deprecated Use `checkoutAttributesUpdateV2` instead
   */
  checkoutAttributesUpdate?: Maybe<CheckoutAttributesUpdatePayload>
  /** Updates the attributes of a checkout if `allowPartialAddresses` is `true`. */
  checkoutAttributesUpdateV2?: Maybe<CheckoutAttributesUpdateV2Payload>
  /** Completes a checkout without providing payment information. You can use this mutation for free items or items whose purchase price is covered by a gift card. */
  checkoutCompleteFree?: Maybe<CheckoutCompleteFreePayload>
  /**
   * Completes a checkout using a credit card token from Shopify's Vault.
   * @deprecated Use `checkoutCompleteWithCreditCardV2` instead
   */
  checkoutCompleteWithCreditCard?: Maybe<CheckoutCompleteWithCreditCardPayload>
  /** Completes a checkout using a credit card token from Shopify's card vault. Before you can complete checkouts using CheckoutCompleteWithCreditCardV2, you need to  [_request payment processing_](https://shopify.dev/apps/channels/getting-started#request-payment-processing). */
  checkoutCompleteWithCreditCardV2?: Maybe<CheckoutCompleteWithCreditCardV2Payload>
  /**
   * Completes a checkout with a tokenized payment.
   * @deprecated Use `checkoutCompleteWithTokenizedPaymentV2` instead
   */
  checkoutCompleteWithTokenizedPayment?: Maybe<CheckoutCompleteWithTokenizedPaymentPayload>
  /**
   * Completes a checkout with a tokenized payment.
   * @deprecated Use `checkoutCompleteWithTokenizedPaymentV3` instead
   */
  checkoutCompleteWithTokenizedPaymentV2?: Maybe<CheckoutCompleteWithTokenizedPaymentV2Payload>
  /** Completes a checkout with a tokenized payment. */
  checkoutCompleteWithTokenizedPaymentV3?: Maybe<CheckoutCompleteWithTokenizedPaymentV3Payload>
  /** Creates a new checkout. */
  checkoutCreate?: Maybe<CheckoutCreatePayload>
  /**
   * Associates a customer to the checkout.
   * @deprecated Use `checkoutCustomerAssociateV2` instead
   */
  checkoutCustomerAssociate?: Maybe<CheckoutCustomerAssociatePayload>
  /** Associates a customer to the checkout. */
  checkoutCustomerAssociateV2?: Maybe<CheckoutCustomerAssociateV2Payload>
  /**
   * Disassociates the current checkout customer from the checkout.
   * @deprecated Use `checkoutCustomerDisassociateV2` instead
   */
  checkoutCustomerDisassociate?: Maybe<CheckoutCustomerDisassociatePayload>
  /** Disassociates the current checkout customer from the checkout. */
  checkoutCustomerDisassociateV2?: Maybe<CheckoutCustomerDisassociateV2Payload>
  /**
   * Applies a discount to an existing checkout using a discount code.
   * @deprecated Use `checkoutDiscountCodeApplyV2` instead
   */
  checkoutDiscountCodeApply?: Maybe<CheckoutDiscountCodeApplyPayload>
  /** Applies a discount to an existing checkout using a discount code. */
  checkoutDiscountCodeApplyV2?: Maybe<CheckoutDiscountCodeApplyV2Payload>
  /** Removes the applied discount from an existing checkout. */
  checkoutDiscountCodeRemove?: Maybe<CheckoutDiscountCodeRemovePayload>
  /**
   * Updates the email on an existing checkout.
   * @deprecated Use `checkoutEmailUpdateV2` instead
   */
  checkoutEmailUpdate?: Maybe<CheckoutEmailUpdatePayload>
  /** Updates the email on an existing checkout. */
  checkoutEmailUpdateV2?: Maybe<CheckoutEmailUpdateV2Payload>
  /**
   * Applies a gift card to an existing checkout using a gift card code. This will replace all currently applied gift cards.
   * @deprecated Use `checkoutGiftCardsAppend` instead
   */
  checkoutGiftCardApply?: Maybe<CheckoutGiftCardApplyPayload>
  /**
   * Removes an applied gift card from the checkout.
   * @deprecated Use `checkoutGiftCardRemoveV2` instead
   */
  checkoutGiftCardRemove?: Maybe<CheckoutGiftCardRemovePayload>
  /** Removes an applied gift card from the checkout. */
  checkoutGiftCardRemoveV2?: Maybe<CheckoutGiftCardRemoveV2Payload>
  /** Appends gift cards to an existing checkout. */
  checkoutGiftCardsAppend?: Maybe<CheckoutGiftCardsAppendPayload>
  /** Adds a list of line items to a checkout. */
  checkoutLineItemsAdd?: Maybe<CheckoutLineItemsAddPayload>
  /** Removes line items from an existing checkout. */
  checkoutLineItemsRemove?: Maybe<CheckoutLineItemsRemovePayload>
  /** Sets a list of line items to a checkout. */
  checkoutLineItemsReplace?: Maybe<CheckoutLineItemsReplacePayload>
  /** Updates line items on a checkout. */
  checkoutLineItemsUpdate?: Maybe<CheckoutLineItemsUpdatePayload>
  /**
   * Updates the shipping address of an existing checkout.
   * @deprecated Use `checkoutShippingAddressUpdateV2` instead
   */
  checkoutShippingAddressUpdate?: Maybe<CheckoutShippingAddressUpdatePayload>
  /** Updates the shipping address of an existing checkout. */
  checkoutShippingAddressUpdateV2?: Maybe<CheckoutShippingAddressUpdateV2Payload>
  /** Updates the shipping lines on an existing checkout. */
  checkoutShippingLineUpdate?: Maybe<CheckoutShippingLineUpdatePayload>
  /**
   * Creates a customer access token.
   * The customer access token is required to modify the customer object in any way.
   *
   */
  customerAccessTokenCreate?: Maybe<CustomerAccessTokenCreatePayload>
  /**
   * Creates a customer access token using a multipass token instead of email and password.
   * A customer record is created if customer does not exist. If a customer record already
   * exists but the record is disabled, then it's enabled.
   *
   */
  customerAccessTokenCreateWithMultipass?: Maybe<CustomerAccessTokenCreateWithMultipassPayload>
  /** Permanently destroys a customer access token. */
  customerAccessTokenDelete?: Maybe<CustomerAccessTokenDeletePayload>
  /**
   * Renews a customer access token.
   *
   * Access token renewal must happen *before* a token expires.
   * If a token has already expired, a new one should be created instead via `customerAccessTokenCreate`.
   *
   */
  customerAccessTokenRenew?: Maybe<CustomerAccessTokenRenewPayload>
  /** Activates a customer. */
  customerActivate?: Maybe<CustomerActivatePayload>
  /** Activates a customer with the activation url received from `customerCreate`. */
  customerActivateByUrl?: Maybe<CustomerActivateByUrlPayload>
  /** Creates a new address for a customer. */
  customerAddressCreate?: Maybe<CustomerAddressCreatePayload>
  /** Permanently deletes the address of an existing customer. */
  customerAddressDelete?: Maybe<CustomerAddressDeletePayload>
  /** Updates the address of an existing customer. */
  customerAddressUpdate?: Maybe<CustomerAddressUpdatePayload>
  /** Creates a new customer. */
  customerCreate?: Maybe<CustomerCreatePayload>
  /** Updates the default address of an existing customer. */
  customerDefaultAddressUpdate?: Maybe<CustomerDefaultAddressUpdatePayload>
  /** Sends a reset password email to the customer, as the first step in the reset password process. */
  customerRecover?: Maybe<CustomerRecoverPayload>
  /** Resets a customer’s password with a token received from `CustomerRecover`. */
  customerReset?: Maybe<CustomerResetPayload>
  /** Resets a customer’s password with the reset password url received from `CustomerRecover`. */
  customerResetByUrl?: Maybe<CustomerResetByUrlPayload>
  /** Updates an existing customer. */
  customerUpdate?: Maybe<CustomerUpdatePayload>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCartAttributesUpdateArgs = {
  attributes: Array<AttributeInput>
  cartId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCartBuyerIdentityUpdateArgs = {
  buyerIdentity: CartBuyerIdentityInput
  cartId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCartCreateArgs = {
  input?: InputMaybe<CartInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCartDiscountCodesUpdateArgs = {
  cartId: Scalars['ID']
  discountCodes?: InputMaybe<Array<Scalars['String']>>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCartLinesAddArgs = {
  cartId: Scalars['ID']
  lines: Array<CartLineInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCartLinesRemoveArgs = {
  cartId: Scalars['ID']
  lineIds: Array<Scalars['ID']>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCartLinesUpdateArgs = {
  cartId: Scalars['ID']
  lines: Array<CartLineUpdateInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCartNoteUpdateArgs = {
  cartId: Scalars['ID']
  note?: InputMaybe<Scalars['String']>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutAttributesUpdateArgs = {
  checkoutId: Scalars['ID']
  input: CheckoutAttributesUpdateInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutAttributesUpdateV2Args = {
  checkoutId: Scalars['ID']
  input: CheckoutAttributesUpdateV2Input
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCompleteFreeArgs = {
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCompleteWithCreditCardArgs = {
  checkoutId: Scalars['ID']
  payment: CreditCardPaymentInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCompleteWithCreditCardV2Args = {
  checkoutId: Scalars['ID']
  payment: CreditCardPaymentInputV2
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCompleteWithTokenizedPaymentArgs = {
  checkoutId: Scalars['ID']
  payment: TokenizedPaymentInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCompleteWithTokenizedPaymentV2Args = {
  checkoutId: Scalars['ID']
  payment: TokenizedPaymentInputV2
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCompleteWithTokenizedPaymentV3Args = {
  checkoutId: Scalars['ID']
  payment: TokenizedPaymentInputV3
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCreateArgs = {
  input: CheckoutCreateInput
  queueToken?: InputMaybe<Scalars['String']>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCustomerAssociateArgs = {
  checkoutId: Scalars['ID']
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCustomerAssociateV2Args = {
  checkoutId: Scalars['ID']
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCustomerDisassociateArgs = {
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCustomerDisassociateV2Args = {
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutDiscountCodeApplyArgs = {
  checkoutId: Scalars['ID']
  discountCode: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutDiscountCodeApplyV2Args = {
  checkoutId: Scalars['ID']
  discountCode: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutDiscountCodeRemoveArgs = {
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutEmailUpdateArgs = {
  checkoutId: Scalars['ID']
  email: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutEmailUpdateV2Args = {
  checkoutId: Scalars['ID']
  email: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutGiftCardApplyArgs = {
  checkoutId: Scalars['ID']
  giftCardCode: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutGiftCardRemoveArgs = {
  appliedGiftCardId: Scalars['ID']
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutGiftCardRemoveV2Args = {
  appliedGiftCardId: Scalars['ID']
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutGiftCardsAppendArgs = {
  checkoutId: Scalars['ID']
  giftCardCodes: Array<Scalars['String']>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutLineItemsAddArgs = {
  checkoutId: Scalars['ID']
  lineItems: Array<CheckoutLineItemInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutLineItemsRemoveArgs = {
  checkoutId: Scalars['ID']
  lineItemIds: Array<Scalars['ID']>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutLineItemsReplaceArgs = {
  checkoutId: Scalars['ID']
  lineItems: Array<CheckoutLineItemInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutLineItemsUpdateArgs = {
  checkoutId: Scalars['ID']
  lineItems: Array<CheckoutLineItemUpdateInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutShippingAddressUpdateArgs = {
  checkoutId: Scalars['ID']
  shippingAddress: MailingAddressInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutShippingAddressUpdateV2Args = {
  checkoutId: Scalars['ID']
  shippingAddress: MailingAddressInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutShippingLineUpdateArgs = {
  checkoutId: Scalars['ID']
  shippingRateHandle: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerAccessTokenCreateArgs = {
  input: CustomerAccessTokenCreateInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerAccessTokenCreateWithMultipassArgs = {
  multipassToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerAccessTokenDeleteArgs = {
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerAccessTokenRenewArgs = {
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerActivateArgs = {
  id: Scalars['ID']
  input: CustomerActivateInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerActivateByUrlArgs = {
  activationUrl: Scalars['URL']
  password: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerAddressCreateArgs = {
  address: MailingAddressInput
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerAddressDeleteArgs = {
  customerAccessToken: Scalars['String']
  id: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerAddressUpdateArgs = {
  address: MailingAddressInput
  customerAccessToken: Scalars['String']
  id: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerCreateArgs = {
  input: CustomerCreateInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerDefaultAddressUpdateArgs = {
  addressId: Scalars['ID']
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerRecoverArgs = {
  email: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerResetArgs = {
  id: Scalars['ID']
  input: CustomerResetInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerResetByUrlArgs = {
  password: Scalars['String']
  resetUrl: Scalars['URL']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerUpdateArgs = {
  customer: CustomerUpdateInput
  customerAccessToken: Scalars['String']
}

/**
 * An object with an ID field to support global identification, in accordance with the
 * [Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).
 * This interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)
 * and [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.
 *
 */
export type Node = {
  /** A globally-unique identifier. */
  id: Scalars['ID']
}

/** Represents a resource that can be published to the Online Store sales channel. */
export type OnlineStorePublishable = {
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type Order = HasMetafields &
  Node & {
    __typename?: 'Order'
    /** The reason for the order's cancellation. Returns `null` if the order wasn't canceled. */
    cancelReason?: Maybe<OrderCancelReason>
    /** The date and time when the order was canceled. Returns null if the order wasn't canceled. */
    canceledAt?: Maybe<Scalars['DateTime']>
    /** The code of the currency used for the payment. */
    currencyCode: CurrencyCode
    /** The subtotal of line items and their discounts, excluding line items that have been removed. Does not contain order-level discounts, duties, shipping costs, or shipping discounts. Taxes are not included unless the order is a taxes-included order. */
    currentSubtotalPrice: MoneyV2
    /** The total cost of duties for the order, including refunds. */
    currentTotalDuties?: Maybe<MoneyV2>
    /** The total amount of the order, including duties, taxes and discounts, minus amounts for line items that have been removed. */
    currentTotalPrice: MoneyV2
    /** The total of all taxes applied to the order, excluding taxes for returned line items. */
    currentTotalTax: MoneyV2
    /** The locale code in which this specific order happened. */
    customerLocale?: Maybe<Scalars['String']>
    /** The unique URL that the customer can use to access the order. */
    customerUrl?: Maybe<Scalars['URL']>
    /** Discounts that have been applied on the order. */
    discountApplications: DiscountApplicationConnection
    /** Whether the order has had any edits applied or not. */
    edited: Scalars['Boolean']
    /** The customer's email address. */
    email?: Maybe<Scalars['String']>
    /** The financial status of the order. */
    financialStatus?: Maybe<OrderFinancialStatus>
    /** The fulfillment status for the order. */
    fulfillmentStatus: OrderFulfillmentStatus
    /** A globally-unique identifier. */
    id: Scalars['ID']
    /** List of the order’s line items. */
    lineItems: OrderLineItemConnection
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe<Metafield>
    /**
     * A paginated list of metafields associated with the resource.
     * @deprecated The `metafields` field will be removed in the future in favor of using [aliases](https://graphql.org/learn/queries/#aliases) with the `metafield` field.
     *
     */
    metafields: MetafieldConnection
    /**
     * Unique identifier for the order that appears on the order.
     * For example, _#1000_ or _Store1001.
     *
     */
    name: Scalars['String']
    /** A unique numeric identifier for the order for use by shop owner and customer. */
    orderNumber: Scalars['Int']
    /** The total cost of duties charged at checkout. */
    originalTotalDuties?: Maybe<MoneyV2>
    /** The total price of the order before any applied edits. */
    originalTotalPrice: MoneyV2
    /** The customer's phone number for receiving SMS notifications. */
    phone?: Maybe<Scalars['String']>
    /**
     * The date and time when the order was imported.
     * This value can be set to dates in the past when importing from other systems.
     * If no value is provided, it will be auto-generated based on current date and time.
     *
     */
    processedAt: Scalars['DateTime']
    /** The address to where the order will be shipped. */
    shippingAddress?: Maybe<MailingAddress>
    /**
     * The discounts that have been allocated onto the shipping line by discount applications.
     *
     */
    shippingDiscountAllocations: Array<DiscountAllocation>
    /** The unique URL for the order's status page. */
    statusUrl: Scalars['URL']
    /**
     * Price of the order before shipping and taxes.
     * @deprecated Use `subtotalPriceV2` instead
     */
    subtotalPrice?: Maybe<Scalars['Money']>
    /** Price of the order before duties, shipping and taxes. */
    subtotalPriceV2?: Maybe<MoneyV2>
    /** List of the order’s successful fulfillments. */
    successfulFulfillments?: Maybe<Array<Fulfillment>>
    /**
     * The sum of all the prices of all the items in the order, taxes and discounts included (must be positive).
     * @deprecated Use `totalPriceV2` instead
     */
    totalPrice: Scalars['Money']
    /** The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive). */
    totalPriceV2: MoneyV2
    /**
     * The total amount that has been refunded.
     * @deprecated Use `totalRefundedV2` instead
     */
    totalRefunded: Scalars['Money']
    /** The total amount that has been refunded. */
    totalRefundedV2: MoneyV2
    /**
     * The total cost of shipping.
     * @deprecated Use `totalShippingPriceV2` instead
     */
    totalShippingPrice: Scalars['Money']
    /** The total cost of shipping. */
    totalShippingPriceV2: MoneyV2
    /**
     * The total cost of taxes.
     * @deprecated Use `totalTaxV2` instead
     */
    totalTax?: Maybe<Scalars['Money']>
    /** The total cost of taxes. */
    totalTaxV2?: Maybe<MoneyV2>
  }

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type OrderDiscountApplicationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type OrderLineItemsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type OrderMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type OrderMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type OrderSuccessfulFulfillmentsArgs = {
  first?: InputMaybe<Scalars['Int']>
}

/** Represents the reason for the order's cancellation. */
export enum OrderCancelReason {
  /** The customer wanted to cancel the order. */
  Customer = 'CUSTOMER',
  /** Payment was declined. */
  Declined = 'DECLINED',
  /** The order was fraudulent. */
  Fraud = 'FRAUD',
  /** There was insufficient inventory. */
  Inventory = 'INVENTORY',
  /** The order was canceled for an unlisted reason. */
  Other = 'OTHER',
}

/**
 * An auto-generated type for paginating through multiple Orders.
 *
 */
export type OrderConnection = {
  __typename?: 'OrderConnection'
  /** A list of edges. */
  edges: Array<OrderEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one Order and a cursor during pagination.
 *
 */
export type OrderEdge = {
  __typename?: 'OrderEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of OrderEdge. */
  node: Order
}

/** Represents the order's current financial status. */
export enum OrderFinancialStatus {
  /** Displayed as **Authorized**. */
  Authorized = 'AUTHORIZED',
  /** Displayed as **Paid**. */
  Paid = 'PAID',
  /** Displayed as **Partially paid**. */
  PartiallyPaid = 'PARTIALLY_PAID',
  /** Displayed as **Partially refunded**. */
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  /** Displayed as **Pending**. */
  Pending = 'PENDING',
  /** Displayed as **Refunded**. */
  Refunded = 'REFUNDED',
  /** Displayed as **Voided**. */
  Voided = 'VOIDED',
}

/** Represents the order's aggregated fulfillment status for display purposes. */
export enum OrderFulfillmentStatus {
  /** Displayed as **Fulfilled**. All of the items in the order have been fulfilled. */
  Fulfilled = 'FULFILLED',
  /** Displayed as **In progress**. Some of the items in the order have been fulfilled, or a request for fulfillment has been sent to the fulfillment service. */
  InProgress = 'IN_PROGRESS',
  /** Displayed as **On hold**. All of the unfulfilled items in this order are on hold. */
  OnHold = 'ON_HOLD',
  /** Displayed as **Open**. None of the items in the order have been fulfilled. Replaced by "UNFULFILLED" status. */
  Open = 'OPEN',
  /** Displayed as **Partially fulfilled**. Some of the items in the order have been fulfilled. */
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  /** Displayed as **Pending fulfillment**. A request for fulfillment of some items awaits a response from the fulfillment service. Replaced by "IN_PROGRESS" status. */
  PendingFulfillment = 'PENDING_FULFILLMENT',
  /** Displayed as **Restocked**. All of the items in the order have been restocked. Replaced by "UNFULFILLED" status. */
  Restocked = 'RESTOCKED',
  /** Displayed as **Scheduled**. All of the unfulfilled items in this order are scheduled for fulfillment at later time. */
  Scheduled = 'SCHEDULED',
  /** Displayed as **Unfulfilled**. None of the items in the order have been fulfilled. */
  Unfulfilled = 'UNFULFILLED',
}

/** Represents a single line in an order. There is one line item for each distinct product variant. */
export type OrderLineItem = {
  __typename?: 'OrderLineItem'
  /** The number of entries associated to the line item minus the items that have been removed. */
  currentQuantity: Scalars['Int']
  /** List of custom attributes associated to the line item. */
  customAttributes: Array<Attribute>
  /** The discounts that have been allocated onto the order line item by discount applications. */
  discountAllocations: Array<DiscountAllocation>
  /** The total price of the line item, including discounts, and displayed in the presentment currency. */
  discountedTotalPrice: MoneyV2
  /** The total price of the line item, not including any discounts. The total price is calculated using the original unit price multiplied by the quantity, and it is displayed in the presentment currency. */
  originalTotalPrice: MoneyV2
  /** The number of products variants associated to the line item. */
  quantity: Scalars['Int']
  /** The title of the product combined with title of the variant. */
  title: Scalars['String']
  /** The product variant object associated to the line item. */
  variant?: Maybe<ProductVariant>
}

/**
 * An auto-generated type for paginating through multiple OrderLineItems.
 *
 */
export type OrderLineItemConnection = {
  __typename?: 'OrderLineItemConnection'
  /** A list of edges. */
  edges: Array<OrderLineItemEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one OrderLineItem and a cursor during pagination.
 *
 */
export type OrderLineItemEdge = {
  __typename?: 'OrderLineItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of OrderLineItemEdge. */
  node: OrderLineItem
}

/** The set of valid sort keys for the Order query. */
export enum OrderSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `processed_at` value. */
  ProcessedAt = 'PROCESSED_AT',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `total_price` value. */
  TotalPrice = 'TOTAL_PRICE',
}

/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export type Page = HasMetafields &
  Node &
  OnlineStorePublishable & {
    __typename?: 'Page'
    /** The description of the page, complete with HTML formatting. */
    body: Scalars['HTML']
    /** Summary of the page body. */
    bodySummary: Scalars['String']
    /** The timestamp of the page creation. */
    createdAt: Scalars['DateTime']
    /** A human-friendly unique string for the page automatically generated from its title. */
    handle: Scalars['String']
    /** A globally-unique identifier. */
    id: Scalars['ID']
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe<Metafield>
    /**
     * A paginated list of metafields associated with the resource.
     * @deprecated The `metafields` field will be removed in the future in favor of using [aliases](https://graphql.org/learn/queries/#aliases) with the `metafield` field.
     *
     */
    metafields: MetafieldConnection
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl?: Maybe<Scalars['URL']>
    /** The page's SEO information. */
    seo?: Maybe<Seo>
    /** The title of the page. */
    title: Scalars['String']
    /** The timestamp of the latest page update. */
    updatedAt: Scalars['DateTime']
  }

/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export type PageMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export type PageMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/**
 * An auto-generated type for paginating through multiple Pages.
 *
 */
export type PageConnection = {
  __typename?: 'PageConnection'
  /** A list of edges. */
  edges: Array<PageEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one Page and a cursor during pagination.
 *
 */
export type PageEdge = {
  __typename?: 'PageEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of PageEdge. */
  node: Page
}

/**
 * Returns information about pagination in a connection, in accordance with the
 * [Relay specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo).
 *
 */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** Whether there are more pages to fetch following the current page. */
  hasNextPage: Scalars['Boolean']
  /** Whether there are any pages prior to the current page. */
  hasPreviousPage: Scalars['Boolean']
}

/** The set of valid sort keys for the Page query. */
export enum PageSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
}

/** A payment applied to a checkout. */
export type Payment = Node & {
  __typename?: 'Payment'
  /**
   * The amount of the payment.
   * @deprecated Use `amountV2` instead
   */
  amount: Scalars['Money']
  /** The amount of the payment. */
  amountV2: MoneyV2
  /** The billing address for the payment. */
  billingAddress?: Maybe<MailingAddress>
  /** The checkout to which the payment belongs. */
  checkout: Checkout
  /** The credit card used for the payment in the case of direct payments. */
  creditCard?: Maybe<CreditCard>
  /** A message describing a processing error during asynchronous processing. */
  errorMessage?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /**
   * A client-side generated token to identify a payment and perform idempotent operations.
   * For more information, refer to
   * [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests).
   *
   */
  idempotencyKey?: Maybe<Scalars['String']>
  /** The URL where the customer needs to be redirected so they can complete the 3D Secure payment flow. */
  nextActionUrl?: Maybe<Scalars['URL']>
  /** Whether or not the payment is still processing asynchronously. */
  ready: Scalars['Boolean']
  /** A flag to indicate if the payment is to be done in test mode for gateways that support it. */
  test: Scalars['Boolean']
  /** The actual transaction recorded by Shopify after having processed the payment with the gateway. */
  transaction?: Maybe<Transaction>
}

/** Settings related to payments. */
export type PaymentSettings = {
  __typename?: 'PaymentSettings'
  /** List of the card brands which the shop accepts. */
  acceptedCardBrands: Array<CardBrand>
  /** The url pointing to the endpoint to vault credit cards. */
  cardVaultUrl: Scalars['URL']
  /** The country where the shop is located. */
  countryCode: CountryCode
  /** The three-letter code for the shop's primary currency. */
  currencyCode: CurrencyCode
  /** A list of enabled currencies (ISO 4217 format) that the shop accepts. Merchants can enable currencies from their Shopify Payments settings in the Shopify admin. */
  enabledPresentmentCurrencies: Array<CurrencyCode>
  /** The shop’s Shopify Payments account id. */
  shopifyPaymentsAccountId?: Maybe<Scalars['String']>
  /** List of the digital wallets which the shop supports. */
  supportedDigitalWallets: Array<DigitalWallet>
}

/** The valid values for the types of payment token. */
export enum PaymentTokenType {
  /** Apple Pay token type. */
  ApplePay = 'APPLE_PAY',
  /** Google Pay token type. */
  GooglePay = 'GOOGLE_PAY',
  /** Shopify Pay token type. */
  ShopifyPay = 'SHOPIFY_PAY',
  /** Stripe token type. */
  StripeVaultToken = 'STRIPE_VAULT_TOKEN',
  /** Vault payment token type. */
  Vault = 'VAULT',
}

/** A filter used to view a subset of products in a collection matching a specific price range. */
export type PriceRangeFilter = {
  /** The maximum price in the range. Empty indicates no max price. */
  max?: InputMaybe<Scalars['Float']>
  /** The minimum price in the range. Defaults to zero. */
  min?: InputMaybe<Scalars['Float']>
}

/** The value of the percentage pricing object. */
export type PricingPercentageValue = {
  __typename?: 'PricingPercentageValue'
  /** The percentage value of the object. */
  percentage: Scalars['Float']
}

/** The price value (fixed or percentage) for a discount application. */
export type PricingValue = MoneyV2 | PricingPercentageValue

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type Product = HasMetafields &
  Node &
  OnlineStorePublishable & {
    __typename?: 'Product'
    /** Indicates if at least one product variant is available for sale. */
    availableForSale: Scalars['Boolean']
    /** List of collections a product belongs to. */
    collections: CollectionConnection
    /** The compare at price of the product across all variants. */
    compareAtPriceRange: ProductPriceRange
    /** The date and time when the product was created. */
    createdAt: Scalars['DateTime']
    /** Stripped description of the product, single line with HTML tags removed. */
    description: Scalars['String']
    /** The description of the product, complete with HTML formatting. */
    descriptionHtml: Scalars['HTML']
    /**
     * The featured image for the product.
     *
     * This field is functionally equivalent to `images(first: 1)`.
     *
     */
    featuredImage?: Maybe<Image>
    /**
     * A human-friendly unique string for the Product automatically generated from its title.
     * They are used by the Liquid templating language to refer to objects.
     *
     */
    handle: Scalars['String']
    /** A globally-unique identifier. */
    id: Scalars['ID']
    /** List of images associated with the product. */
    images: ImageConnection
    /** The media associated with the product. */
    media: MediaConnection
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe<Metafield>
    /**
     * A paginated list of metafields associated with the resource.
     * @deprecated The `metafields` field will be removed in the future in favor of using [aliases](https://graphql.org/learn/queries/#aliases) with the `metafield` field.
     *
     */
    metafields: MetafieldConnection
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl?: Maybe<Scalars['URL']>
    /** List of product options. */
    options: Array<ProductOption>
    /** The price range. */
    priceRange: ProductPriceRange
    /** A categorization that a product can be tagged with, commonly used for filtering and searching. */
    productType: Scalars['String']
    /** The date and time when the product was published to the channel. */
    publishedAt: Scalars['DateTime']
    /** Whether the product can only be purchased with a selling plan. */
    requiresSellingPlan: Scalars['Boolean']
    /** A list of a product's available selling plan groups. A selling plan group represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
    sellingPlanGroups: SellingPlanGroupConnection
    /** The product's SEO information. */
    seo: Seo
    /**
     * A comma separated list of tags that have been added to the product.
     * Additional access scope required for private apps: unauthenticated_read_product_tags.
     *
     */
    tags: Array<Scalars['String']>
    /** The product’s title. */
    title: Scalars['String']
    /** The total quantity of inventory in stock for this Product. */
    totalInventory?: Maybe<Scalars['Int']>
    /**
     * The date and time when the product was last modified.
     * A product's `updatedAt` value can change for different reasons. For example, if an order
     * is placed for a product that has inventory tracking set up, then the inventory adjustment
     * is counted as an update.
     *
     */
    updatedAt: Scalars['DateTime']
    /**
     * Find a product’s variant based on its selected options.
     * This is useful for converting a user’s selection of product options into a single matching variant.
     * If there is not a variant for the selected options, `null` will be returned.
     *
     */
    variantBySelectedOptions?: Maybe<ProductVariant>
    /** List of the product’s variants. */
    variants: ProductVariantConnection
    /** The product’s vendor name. */
    vendor: Scalars['String']
  }

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductDescriptionArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductImagesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<ProductImageSortKeys>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductMediaArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<ProductMediaSortKeys>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductOptionsArgs = {
  first?: InputMaybe<Scalars['Int']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductSellingPlanGroupsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductVariantBySelectedOptionsArgs = {
  selectedOptions: Array<SelectedOptionInput>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<ProductVariantSortKeys>
}

/** The set of valid sort keys for the ProductCollection query. */
export enum ProductCollectionSortKeys {
  /** Sort by the `best-selling` value. */
  BestSelling = 'BEST_SELLING',
  /** Sort by the `collection-default` value. */
  CollectionDefault = 'COLLECTION_DEFAULT',
  /** Sort by the `created` value. */
  Created = 'CREATED',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `manual` value. */
  Manual = 'MANUAL',
  /** Sort by the `price` value. */
  Price = 'PRICE',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
}

/**
 * An auto-generated type for paginating through multiple Products.
 *
 */
export type ProductConnection = {
  __typename?: 'ProductConnection'
  /** A list of edges. */
  edges: Array<ProductEdge>
  /** A list of available filters. */
  filters: Array<Filter>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one Product and a cursor during pagination.
 *
 */
export type ProductEdge = {
  __typename?: 'ProductEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductEdge. */
  node: Product
}

/** A filter used to view a subset of products in a collection. */
export type ProductFilter = {
  /** Filter on if the product is available for sale. */
  available?: InputMaybe<Scalars['Boolean']>
  /** A range of prices to filter with-in. */
  price?: InputMaybe<PriceRangeFilter>
  /** A product metafield to filter on. */
  productMetafield?: InputMaybe<MetafieldFilter>
  /** The product type to filter on. */
  productType?: InputMaybe<Scalars['String']>
  /** The product vendor to filter on. */
  productVendor?: InputMaybe<Scalars['String']>
  /** A variant metafield to filter on. */
  variantMetafield?: InputMaybe<MetafieldFilter>
  /** A variant option to filter on. */
  variantOption?: InputMaybe<VariantOptionFilter>
}

/** The set of valid sort keys for the ProductImage query. */
export enum ProductImageSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   *
   */
  Relevance = 'RELEVANCE',
}

/** The set of valid sort keys for the ProductMedia query. */
export enum ProductMediaSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   *
   */
  Relevance = 'RELEVANCE',
}

/**
 * Product property names like "Size", "Color", and "Material" that the customers can select.
 * Variants are selected based on permutations of these options.
 * 255 characters limit each.
 *
 */
export type ProductOption = Node & {
  __typename?: 'ProductOption'
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The product option’s name. */
  name: Scalars['String']
  /** The corresponding value to the product option name. */
  values: Array<Scalars['String']>
}

/** The price range of the product. */
export type ProductPriceRange = {
  __typename?: 'ProductPriceRange'
  /** The highest variant's price. */
  maxVariantPrice: MoneyV2
  /** The lowest variant's price. */
  minVariantPrice: MoneyV2
}

/** The set of valid sort keys for the Product query. */
export enum ProductSortKeys {
  /** Sort by the `best_selling` value. */
  BestSelling = 'BEST_SELLING',
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `price` value. */
  Price = 'PRICE',
  /** Sort by the `product_type` value. */
  ProductType = 'PRODUCT_TYPE',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `vendor` value. */
  Vendor = 'VENDOR',
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariant = HasMetafields &
  Node & {
    __typename?: 'ProductVariant'
    /** Indicates if the product variant is available for sale. */
    availableForSale: Scalars['Boolean']
    /** The barcode (for example, ISBN, UPC, or GTIN) associated with the variant. */
    barcode?: Maybe<Scalars['String']>
    /**
     * The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPrice` is higher than `price`.
     * @deprecated Use `compareAtPriceV2` instead
     */
    compareAtPrice?: Maybe<Scalars['Money']>
    /** The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPriceV2` is higher than `priceV2`. */
    compareAtPriceV2?: Maybe<MoneyV2>
    /** Whether a product is out of stock but still available for purchase (used for backorders). */
    currentlyNotInStock: Scalars['Boolean']
    /** A globally-unique identifier. */
    id: Scalars['ID']
    /**
     * Image associated with the product variant. This field falls back to the product image if no image is available.
     *
     */
    image?: Maybe<Image>
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe<Metafield>
    /**
     * A paginated list of metafields associated with the resource.
     * @deprecated The `metafields` field will be removed in the future in favor of using [aliases](https://graphql.org/learn/queries/#aliases) with the `metafield` field.
     *
     */
    metafields: MetafieldConnection
    /**
     * The product variant’s price.
     * @deprecated Use `priceV2` instead
     */
    price: Scalars['Money']
    /** The product variant’s price. */
    priceV2: MoneyV2
    /** The product object that the product variant belongs to. */
    product: Product
    /** The total sellable quantity of the variant for online sales channels. */
    quantityAvailable?: Maybe<Scalars['Int']>
    /** Whether a customer needs to provide a shipping address when placing an order for the product variant. */
    requiresShipping: Scalars['Boolean']
    /** List of product options applied to the variant. */
    selectedOptions: Array<SelectedOption>
    /** Represents an association between a variant and a selling plan. Selling plan allocations describe which selling plans are available for each variant, and what their impact is on pricing. */
    sellingPlanAllocations: SellingPlanAllocationConnection
    /** The SKU (stock keeping unit) associated with the variant. */
    sku?: Maybe<Scalars['String']>
    /** The in-store pickup availability of this variant by location. */
    storeAvailability: StoreAvailabilityConnection
    /** The product variant’s title. */
    title: Scalars['String']
    /** The unit price value for the variant based on the variant's measurement. */
    unitPrice?: Maybe<MoneyV2>
    /** The unit price measurement for the variant. */
    unitPriceMeasurement?: Maybe<UnitPriceMeasurement>
    /** The weight of the product variant in the unit system specified with `weight_unit`. */
    weight?: Maybe<Scalars['Float']>
    /** Unit of measurement for weight. */
    weightUnit: WeightUnit
  }

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariantMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariantMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariantSellingPlanAllocationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariantStoreAvailabilityArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/**
 * An auto-generated type for paginating through multiple ProductVariants.
 *
 */
export type ProductVariantConnection = {
  __typename?: 'ProductVariantConnection'
  /** A list of edges. */
  edges: Array<ProductVariantEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one ProductVariant and a cursor during pagination.
 *
 */
export type ProductVariantEdge = {
  __typename?: 'ProductVariantEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductVariantEdge. */
  node: ProductVariant
}

/** The set of valid sort keys for the ProductVariant query. */
export enum ProductVariantSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `sku` value. */
  Sku = 'SKU',
  /** Sort by the `title` value. */
  Title = 'TITLE',
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRoot = {
  __typename?: 'QueryRoot'
  /** List of the shop's articles. */
  articles: ArticleConnection
  /** Fetch a specific `Blog` by one of its unique attributes. */
  blog?: Maybe<Blog>
  /**
   * Find a blog by its handle.
   * @deprecated Use `blog` instead
   */
  blogByHandle?: Maybe<Blog>
  /** List of the shop's blogs. */
  blogs: BlogConnection
  /** Find a cart by its ID. */
  cart?: Maybe<Cart>
  /** Fetch a specific `Collection` by one of its unique attributes. */
  collection?: Maybe<Collection>
  /**
   * Find a collection by its handle.
   * @deprecated Use `collection` instead
   */
  collectionByHandle?: Maybe<Collection>
  /** List of the shop’s collections. */
  collections: CollectionConnection
  /** Find a customer by its access token. */
  customer?: Maybe<Customer>
  /** Returns the localized experiences configured for the shop. */
  localization: Localization
  /**
   * List of the shop's locations that support in-store pickup.
   *
   * When sorting by distance, you must specify a location via the `near` argument.
   *
   */
  locations: LocationConnection
  /** Returns a specific node by ID. */
  node?: Maybe<Node>
  /** Returns the list of nodes with the given IDs. */
  nodes: Array<Maybe<Node>>
  /** Fetch a specific `Page` by one of its unique attributes. */
  page?: Maybe<Page>
  /**
   * Find a page by its handle.
   * @deprecated Use `page` instead
   */
  pageByHandle?: Maybe<Page>
  /** List of the shop's pages. */
  pages: PageConnection
  /** Fetch a specific `Product` by one of its unique attributes. */
  product?: Maybe<Product>
  /**
   * Find a product by its handle.
   * @deprecated Use `product` instead
   */
  productByHandle?: Maybe<Product>
  /**
   * Find recommended products related to a given `product_id`.
   * To learn more about how recommendations are generated, see
   * [*Showing product recommendations on product pages*](https://help.shopify.com/themes/development/recommended-products).
   *
   */
  productRecommendations?: Maybe<Array<Product>>
  /**
   * Tags added to products.
   * Additional access scope required: unauthenticated_read_product_tags.
   *
   */
  productTags: StringConnection
  /** List of product types for the shop's products that are published to your app. */
  productTypes: StringConnection
  /** List of the shop’s products. */
  products: ProductConnection
  /** The list of public Storefront API versions, including supported, release candidate and unstable versions. */
  publicApiVersions: Array<ApiVersion>
  /** The shop associated with the storefront access token. */
  shop: Shop
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootArticlesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<ArticleSortKeys>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootBlogArgs = {
  handle?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootBlogByHandleArgs = {
  handle: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootBlogsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<BlogSortKeys>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCartArgs = {
  id: Scalars['ID']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCollectionArgs = {
  handle?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCollectionByHandleArgs = {
  handle: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<CollectionSortKeys>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCustomerArgs = {
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootLocationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  near?: InputMaybe<GeoCoordinateInput>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<LocationSortKeys>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootNodeArgs = {
  id: Scalars['ID']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootNodesArgs = {
  ids: Array<Scalars['ID']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootPageArgs = {
  handle?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootPageByHandleArgs = {
  handle: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootPagesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<PageSortKeys>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductArgs = {
  handle?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductByHandleArgs = {
  handle: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductRecommendationsArgs = {
  productId: Scalars['ID']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductTagsArgs = {
  first: Scalars['Int']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductTypesArgs = {
  first: Scalars['Int']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<ProductSortKeys>
}

/** SEO information. */
export type Seo = {
  __typename?: 'SEO'
  /** The meta description. */
  description?: Maybe<Scalars['String']>
  /** The SEO title. */
  title?: Maybe<Scalars['String']>
}

/**
 * Script discount applications capture the intentions of a discount that
 * was created by a Shopify Script.
 *
 */
export type ScriptDiscountApplication = DiscountApplication & {
  __typename?: 'ScriptDiscountApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType
  /** The title of the application as defined by the Script. */
  title: Scalars['String']
  /** The value of the discount application. */
  value: PricingValue
}

/**
 * Properties used by customers to select a product variant.
 * Products can have multiple options, like different sizes or colors.
 *
 */
export type SelectedOption = {
  __typename?: 'SelectedOption'
  /** The product option’s name. */
  name: Scalars['String']
  /** The product option’s value. */
  value: Scalars['String']
}

/** Specifies the input fields required for a selected option. */
export type SelectedOptionInput = {
  /** The product option’s name. */
  name: Scalars['String']
  /** The product option’s value. */
  value: Scalars['String']
}

/** Represents how products and variants can be sold and purchased. */
export type SellingPlan = {
  __typename?: 'SellingPlan'
  /** The description of the selling plan. */
  description?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'. */
  name: Scalars['String']
  /** Represents the selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. */
  options: Array<SellingPlanOption>
  /** Represents how a selling plan affects pricing when a variant is purchased with a selling plan. */
  priceAdjustments: Array<SellingPlanPriceAdjustment>
  /** Whether purchasing the selling plan will result in multiple deliveries. */
  recurringDeliveries: Scalars['Boolean']
}

/** Represents an association between a variant and a selling plan. Selling plan allocations describe the options offered for each variant, and the price of the variant when purchased with a selling plan. */
export type SellingPlanAllocation = {
  __typename?: 'SellingPlanAllocation'
  /** A list of price adjustments, with a maximum of two. When there are two, the first price adjustment goes into effect at the time of purchase, while the second one starts after a certain number of orders. */
  priceAdjustments: Array<SellingPlanAllocationPriceAdjustment>
  /** A representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
  sellingPlan: SellingPlan
}

/**
 * An auto-generated type for paginating through multiple SellingPlanAllocations.
 *
 */
export type SellingPlanAllocationConnection = {
  __typename?: 'SellingPlanAllocationConnection'
  /** A list of edges. */
  edges: Array<SellingPlanAllocationEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one SellingPlanAllocation and a cursor during pagination.
 *
 */
export type SellingPlanAllocationEdge = {
  __typename?: 'SellingPlanAllocationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of SellingPlanAllocationEdge. */
  node: SellingPlanAllocation
}

/** The resulting prices for variants when they're purchased with a specific selling plan. */
export type SellingPlanAllocationPriceAdjustment = {
  __typename?: 'SellingPlanAllocationPriceAdjustment'
  /** The price of the variant when it's purchased without a selling plan for the same number of deliveries. For example, if a customer purchases 6 deliveries of $10.00 granola separately, then the price is 6 x $10.00 = $60.00. */
  compareAtPrice: MoneyV2
  /** The effective price for a single delivery. For example, for a prepaid subscription plan that includes 6 deliveries at the price of $48.00, the per delivery price is $8.00. */
  perDeliveryPrice: MoneyV2
  /** The price of the variant when it's purchased with a selling plan For example, for a prepaid subscription plan that includes 6 deliveries of $10.00 granola, where the customer gets 20% off, the price is 6 x $10.00 x 0.80 = $48.00. */
  price: MoneyV2
  /** The resulting price per unit for the variant associated with the selling plan. If the variant isn't sold by quantity or measurement, then this field returns `null`. */
  unitPrice?: Maybe<MoneyV2>
}

/**
 * An auto-generated type for paginating through multiple SellingPlans.
 *
 */
export type SellingPlanConnection = {
  __typename?: 'SellingPlanConnection'
  /** A list of edges. */
  edges: Array<SellingPlanEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one SellingPlan and a cursor during pagination.
 *
 */
export type SellingPlanEdge = {
  __typename?: 'SellingPlanEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of SellingPlanEdge. */
  node: SellingPlan
}

/** A fixed amount that's deducted from the original variant price. For example, $10.00 off. */
export type SellingPlanFixedAmountPriceAdjustment = {
  __typename?: 'SellingPlanFixedAmountPriceAdjustment'
  /** The money value of the price adjustment. */
  adjustmentAmount: MoneyV2
}

/** A fixed price adjustment for a variant that's purchased with a selling plan. */
export type SellingPlanFixedPriceAdjustment = {
  __typename?: 'SellingPlanFixedPriceAdjustment'
  /** A new price of the variant when it's purchased with the selling plan. */
  price: MoneyV2
}

/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
export type SellingPlanGroup = {
  __typename?: 'SellingPlanGroup'
  /** A display friendly name for the app that created the selling plan group. */
  appName?: Maybe<Scalars['String']>
  /** The name of the selling plan group. */
  name: Scalars['String']
  /** Represents the selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. */
  options: Array<SellingPlanGroupOption>
  /** A list of selling plans in a selling plan group. A selling plan is a representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
  sellingPlans: SellingPlanConnection
}

/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
export type SellingPlanGroupSellingPlansArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/**
 * An auto-generated type for paginating through multiple SellingPlanGroups.
 *
 */
export type SellingPlanGroupConnection = {
  __typename?: 'SellingPlanGroupConnection'
  /** A list of edges. */
  edges: Array<SellingPlanGroupEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one SellingPlanGroup and a cursor during pagination.
 *
 */
export type SellingPlanGroupEdge = {
  __typename?: 'SellingPlanGroupEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of SellingPlanGroupEdge. */
  node: SellingPlanGroup
}

/** Represents an option on a selling plan group that's available in the drop-down list in the storefront. */
export type SellingPlanGroupOption = {
  __typename?: 'SellingPlanGroupOption'
  /** The name of the option. For example, 'Delivery every'. */
  name: Scalars['String']
  /** The values for the options specified by the selling plans in the selling plan group. For example, '1 week', '2 weeks', '3 weeks'. */
  values: Array<Scalars['String']>
}

/** An option provided by a Selling Plan. */
export type SellingPlanOption = {
  __typename?: 'SellingPlanOption'
  /** The name of the option (ie "Delivery every"). */
  name?: Maybe<Scalars['String']>
  /** The value of the option (ie "Month"). */
  value?: Maybe<Scalars['String']>
}

/** A percentage amount that's deducted from the original variant price. For example, 10% off. */
export type SellingPlanPercentagePriceAdjustment = {
  __typename?: 'SellingPlanPercentagePriceAdjustment'
  /** The percentage value of the price adjustment. */
  adjustmentPercentage: Scalars['Int']
}

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. */
export type SellingPlanPriceAdjustment = {
  __typename?: 'SellingPlanPriceAdjustment'
  /** The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price. */
  adjustmentValue: SellingPlanPriceAdjustmentValue
  /** The number of orders that the price adjustment applies to If the price adjustment always applies, then this field is `null`. */
  orderCount?: Maybe<Scalars['Int']>
}

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. */
export type SellingPlanPriceAdjustmentValue =
  | SellingPlanFixedAmountPriceAdjustment
  | SellingPlanFixedPriceAdjustment
  | SellingPlanPercentagePriceAdjustment

/** A shipping rate to be applied to a checkout. */
export type ShippingRate = {
  __typename?: 'ShippingRate'
  /** Human-readable unique identifier for this shipping rate. */
  handle: Scalars['String']
  /**
   * Price of this shipping rate.
   * @deprecated Use `priceV2` instead
   */
  price: Scalars['Money']
  /** Price of this shipping rate. */
  priceV2: MoneyV2
  /** Title of this shipping rate. */
  title: Scalars['String']
}

/** Shop represents a collection of the general settings and information about the shop. */
export type Shop = HasMetafields & {
  __typename?: 'Shop'
  /** A description of the shop. */
  description?: Maybe<Scalars['String']>
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated The `metafields` field will be removed in the future in favor of using [aliases](https://graphql.org/learn/queries/#aliases) with the `metafield` field.
   *
   */
  metafields: MetafieldConnection
  /** A string representing the way currency is formatted when the currency isn’t specified. */
  moneyFormat: Scalars['String']
  /** The shop’s name. */
  name: Scalars['String']
  /** Settings related to payments. */
  paymentSettings: PaymentSettings
  /** The shop’s primary domain. */
  primaryDomain: Domain
  /** The shop’s privacy policy. */
  privacyPolicy?: Maybe<ShopPolicy>
  /** The shop’s refund policy. */
  refundPolicy?: Maybe<ShopPolicy>
  /** The shop’s shipping policy. */
  shippingPolicy?: Maybe<ShopPolicy>
  /** Countries that the shop ships to. */
  shipsToCountries: Array<CountryCode>
  /** The shop’s subscription policy. */
  subscriptionPolicy?: Maybe<ShopPolicyWithDefault>
  /** The shop’s terms of service. */
  termsOfService?: Maybe<ShopPolicy>
}

/** Shop represents a collection of the general settings and information about the shop. */
export type ShopMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** Shop represents a collection of the general settings and information about the shop. */
export type ShopMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** Policy that a merchant has configured for their store, such as their refund or privacy policy. */
export type ShopPolicy = Node & {
  __typename?: 'ShopPolicy'
  /** Policy text, maximum size of 64kb. */
  body: Scalars['String']
  /** Policy’s handle. */
  handle: Scalars['String']
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** Policy’s title. */
  title: Scalars['String']
  /** Public URL to the policy. */
  url: Scalars['URL']
}

/**
 * A policy for the store that comes with a default value, such as a subscription policy.
 * If the merchant hasn't configured a policy for their store, then the policy will return the default value.
 * Otherwise, the policy will return the merchant-configured value.
 *
 */
export type ShopPolicyWithDefault = {
  __typename?: 'ShopPolicyWithDefault'
  /** The text of the policy. Maximum size: 64KB. */
  body: Scalars['String']
  /** The handle of the policy. */
  handle: Scalars['String']
  /** The unique identifier of the policy. A default policy doesn't have an ID. */
  id?: Maybe<Scalars['ID']>
  /** The title of the policy. */
  title: Scalars['String']
  /** Public URL to the policy. */
  url: Scalars['URL']
}

/**
 * The availability of a product variant at a particular location.
 * Local pick-up must be enabled in the  store's shipping settings, otherwise this will return an empty result.
 *
 */
export type StoreAvailability = {
  __typename?: 'StoreAvailability'
  /** Whether or not this product variant is in-stock at this location. */
  available: Scalars['Boolean']
  /** The location where this product variant is stocked at. */
  location: Location
  /** Returns the estimated amount of time it takes for pickup to be ready (Example: Usually ready in 24 hours). */
  pickUpTime: Scalars['String']
}

/**
 * An auto-generated type for paginating through multiple StoreAvailabilities.
 *
 */
export type StoreAvailabilityConnection = {
  __typename?: 'StoreAvailabilityConnection'
  /** A list of edges. */
  edges: Array<StoreAvailabilityEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one StoreAvailability and a cursor during pagination.
 *
 */
export type StoreAvailabilityEdge = {
  __typename?: 'StoreAvailabilityEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of StoreAvailabilityEdge. */
  node: StoreAvailability
}

/**
 * An auto-generated type for paginating through a list of Strings.
 *
 */
export type StringConnection = {
  __typename?: 'StringConnection'
  /** A list of edges. */
  edges: Array<StringEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one String and a cursor during pagination.
 *
 */
export type StringEdge = {
  __typename?: 'StringEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of StringEdge. */
  node: Scalars['String']
}

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 *
 */
export type TokenizedPaymentInput = {
  /** The amount of the payment. */
  amount: Scalars['Money']
  /** The billing address for the payment. */
  billingAddress: MailingAddressInput
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String']
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: InputMaybe<Scalars['String']>
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars['String']
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>
  /** The type of payment token. */
  type: Scalars['String']
}

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 *
 */
export type TokenizedPaymentInputV2 = {
  /** The billing address for the payment. */
  billingAddress: MailingAddressInput
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String']
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: InputMaybe<Scalars['String']>
  /** The amount and currency of the payment. */
  paymentAmount: MoneyInput
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars['String']
  /** Whether to execute the payment in test mode, if possible. Test mode is not supported in production stores. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>
  /** The type of payment token. */
  type: Scalars['String']
}

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 *
 */
export type TokenizedPaymentInputV3 = {
  /** The billing address for the payment. */
  billingAddress: MailingAddressInput
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String']
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: InputMaybe<Scalars['String']>
  /** The amount and currency of the payment. */
  paymentAmount: MoneyInput
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars['String']
  /** Whether to execute the payment in test mode, if possible. Test mode is not supported in production stores. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>
  /** The type of payment token. */
  type: PaymentTokenType
}

/** An object representing exchange of money for a product or service. */
export type Transaction = {
  __typename?: 'Transaction'
  /**
   * The amount of money that the transaction was for.
   * @deprecated Use `amountV2` instead
   */
  amount: Scalars['Money']
  /** The amount of money that the transaction was for. */
  amountV2: MoneyV2
  /** The kind of the transaction. */
  kind: TransactionKind
  /**
   * The status of the transaction.
   * @deprecated Use `statusV2` instead
   */
  status: TransactionStatus
  /** The status of the transaction. */
  statusV2?: Maybe<TransactionStatus>
  /** Whether the transaction was done in test mode or not. */
  test: Scalars['Boolean']
}

/** The different kinds of order transactions. */
export enum TransactionKind {
  /**
   * An amount reserved against the cardholder's funding source.
   * Money does not change hands until the authorization is captured.
   *
   */
  Authorization = 'AUTHORIZATION',
  /** A transfer of the money that was reserved during the authorization stage. */
  Capture = 'CAPTURE',
  /** Money returned to the customer when they have paid too much. */
  Change = 'CHANGE',
  /** An authorization for a payment taken with an EMV credit card reader. */
  EmvAuthorization = 'EMV_AUTHORIZATION',
  /** An authorization and capture performed together in a single step. */
  Sale = 'SALE',
}

/** Transaction statuses describe the status of a transaction. */
export enum TransactionStatus {
  /** There was an error while processing the transaction. */
  Error = 'ERROR',
  /** The transaction failed. */
  Failure = 'FAILURE',
  /** The transaction is pending. */
  Pending = 'PENDING',
  /** The transaction succeeded. */
  Success = 'SUCCESS',
}

/**
 * The measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml).
 *
 */
export type UnitPriceMeasurement = {
  __typename?: 'UnitPriceMeasurement'
  /** The type of unit of measurement for the unit price measurement. */
  measuredType?: Maybe<UnitPriceMeasurementMeasuredType>
  /** The quantity unit for the unit price measurement. */
  quantityUnit?: Maybe<UnitPriceMeasurementMeasuredUnit>
  /** The quantity value for the unit price measurement. */
  quantityValue: Scalars['Float']
  /** The reference unit for the unit price measurement. */
  referenceUnit?: Maybe<UnitPriceMeasurementMeasuredUnit>
  /** The reference value for the unit price measurement. */
  referenceValue: Scalars['Int']
}

/** The accepted types of unit of measurement. */
export enum UnitPriceMeasurementMeasuredType {
  /** Unit of measurements representing areas. */
  Area = 'AREA',
  /** Unit of measurements representing lengths. */
  Length = 'LENGTH',
  /** Unit of measurements representing volumes. */
  Volume = 'VOLUME',
  /** Unit of measurements representing weights. */
  Weight = 'WEIGHT',
}

/** The valid units of measurement for a unit price measurement. */
export enum UnitPriceMeasurementMeasuredUnit {
  /** 100 centiliters equals 1 liter. */
  Cl = 'CL',
  /** 100 centimeters equals 1 meter. */
  Cm = 'CM',
  /** Metric system unit of weight. */
  G = 'G',
  /** 1 kilogram equals 1000 grams. */
  Kg = 'KG',
  /** Metric system unit of volume. */
  L = 'L',
  /** Metric system unit of length. */
  M = 'M',
  /** Metric system unit of area. */
  M2 = 'M2',
  /** 1 cubic meter equals 1000 liters. */
  M3 = 'M3',
  /** 1000 milligrams equals 1 gram. */
  Mg = 'MG',
  /** 1000 milliliters equals 1 liter. */
  Ml = 'ML',
  /** 1000 millimeters equals 1 meter. */
  Mm = 'MM',
}

/** Systems of weights and measures. */
export enum UnitSystem {
  /** Imperial system of weights and measures. */
  ImperialSystem = 'IMPERIAL_SYSTEM',
  /** Metric system of weights and measures. */
  MetricSystem = 'METRIC_SYSTEM',
}

/** Represents an error in the input of a mutation. */
export type UserError = DisplayableError & {
  __typename?: 'UserError'
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** A filter used to view a subset of products in a collection matching a specific variant option. */
export type VariantOptionFilter = {
  /** The name of the variant option to filter on. */
  name: Scalars['String']
  /** The value of the variant option to filter on. */
  value: Scalars['String']
}

/** Represents a Shopify hosted video. */
export type Video = Media &
  Node & {
    __typename?: 'Video'
    /** A word or phrase to share the nature or contents of a media. */
    alt?: Maybe<Scalars['String']>
    /** A globally-unique identifier. */
    id: Scalars['ID']
    /** The media content type. */
    mediaContentType: MediaContentType
    /** The preview image for the media. */
    previewImage?: Maybe<Image>
    /** The sources for a video. */
    sources: Array<VideoSource>
  }

/** Represents a source for a Shopify hosted video. */
export type VideoSource = {
  __typename?: 'VideoSource'
  /** The format of the video source. */
  format: Scalars['String']
  /** The height of the video. */
  height: Scalars['Int']
  /** The video MIME type. */
  mimeType: Scalars['String']
  /** The URL of the video. */
  url: Scalars['String']
  /** The width of the video. */
  width: Scalars['Int']
}

/** Units of measurement for weight. */
export enum WeightUnit {
  /** Metric system unit of mass. */
  Grams = 'GRAMS',
  /** 1 kilogram equals 1000 grams. */
  Kilograms = 'KILOGRAMS',
  /** Imperial system unit of mass. */
  Ounces = 'OUNCES',
  /** 1 pound equals 16 ounces. */
  Pounds = 'POUNDS',
}

export type CollectionQueryVariables = Exact<{
  handle: Scalars['String']
  numberOfProducts?: InputMaybe<Scalars['Int']>
  numberOfImages?: InputMaybe<Scalars['Int']>
  cursor?: InputMaybe<Scalars['String']>
}>

export type CollectionQuery = {
  __typename?: 'QueryRoot'
  collection?:
    | {
        __typename?: 'Collection'
        id: string
        title: string
        products: {
          __typename?: 'ProductConnection'
          pageInfo: {
            __typename?: 'PageInfo'
            hasNextPage: boolean
            hasPreviousPage: boolean
          }
          edges: Array<{
            __typename?: 'ProductEdge'
            cursor: string
            node: {
              __typename?: 'Product'
              id: string
              handle: string
              title: string
              description: string
              compareAtPriceRange: {
                __typename?: 'ProductPriceRange'
                maxVariantPrice: {
                  __typename?: 'MoneyV2'
                  amount: any
                  currencyCode: CurrencyCode
                }
                minVariantPrice: {
                  __typename?: 'MoneyV2'
                  amount: any
                  currencyCode: CurrencyCode
                }
              }
              priceRange: {
                __typename?: 'ProductPriceRange'
                maxVariantPrice: {
                  __typename?: 'MoneyV2'
                  amount: any
                  currencyCode: CurrencyCode
                }
                minVariantPrice: {
                  __typename?: 'MoneyV2'
                  amount: any
                  currencyCode: CurrencyCode
                }
              }
              images: {
                __typename?: 'ImageConnection'
                edges: Array<{
                  __typename?: 'ImageEdge'
                  node: {
                    __typename?: 'Image'
                    altText?: string | null | undefined
                    width?: number | null | undefined
                    height?: number | null | undefined
                    url: any
                  }
                }>
              }
              seo: {
                __typename?: 'SEO'
                title?: string | null | undefined
                description?: string | null | undefined
              }
            }
          }>
        }
      }
    | null
    | undefined
}

export const CollectionDocument = gql`
  query Collection(
    $handle: String!
    $numberOfProducts: Int
    $numberOfImages: Int
    $cursor: String
  ) {
    collection(handle: $handle) {
      id
      title
      products(first: $numberOfProducts, after: $cursor) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          cursor
          node {
            id
            handle
            title
            description
            compareAtPriceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
              minVariantPrice {
                amount
                currencyCode
              }
            }
            priceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: $numberOfImages) {
              edges {
                node {
                  url: url(transform: {maxWidth: 96, maxHeight: 72})
                  altText
                  width
                  height
                }
              }
            }
            seo {
              title
              description
            }
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
    Collection(
      variables: CollectionQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<CollectionQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<CollectionQuery>(CollectionDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Collection',
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>

export const anApiVersion = (overrides?: Partial<ApiVersion>): ApiVersion => {
  return {
    displayName:
      overrides && overrides.hasOwnProperty('displayName')
        ? overrides.displayName!
        : 'ipsam',
    handle:
      overrides && overrides.hasOwnProperty('handle')
        ? overrides.handle!
        : 'vitae',
    supported:
      overrides && overrides.hasOwnProperty('supported')
        ? overrides.supported!
        : true,
  }
}

export const anAppliedGiftCard = (
  overrides?: Partial<AppliedGiftCard>,
): AppliedGiftCard => {
  return {
    amountUsed:
      overrides && overrides.hasOwnProperty('amountUsed')
        ? overrides.amountUsed!
        : 'voluptatibus',
    amountUsedV2:
      overrides && overrides.hasOwnProperty('amountUsedV2')
        ? overrides.amountUsedV2!
        : aMoneyV2(),
    balance:
      overrides && overrides.hasOwnProperty('balance')
        ? overrides.balance!
        : 'est',
    balanceV2:
      overrides && overrides.hasOwnProperty('balanceV2')
        ? overrides.balanceV2!
        : aMoneyV2(),
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '85fdf343-5faa-4bd9-b996-500e002ee563',
    lastCharacters:
      overrides && overrides.hasOwnProperty('lastCharacters')
        ? overrides.lastCharacters!
        : 'nulla',
    presentmentAmountUsed:
      overrides && overrides.hasOwnProperty('presentmentAmountUsed')
        ? overrides.presentmentAmountUsed!
        : aMoneyV2(),
  }
}

export const anArticle = (overrides?: Partial<Article>): Article => {
  return {
    author:
      overrides && overrides.hasOwnProperty('author')
        ? overrides.author!
        : anArticleAuthor(),
    authorV2:
      overrides && overrides.hasOwnProperty('authorV2')
        ? overrides.authorV2!
        : anArticleAuthor(),
    blog:
      overrides && overrides.hasOwnProperty('blog') ? overrides.blog! : aBlog(),
    comments:
      overrides && overrides.hasOwnProperty('comments')
        ? overrides.comments!
        : aCommentConnection(),
    content:
      overrides && overrides.hasOwnProperty('content')
        ? overrides.content!
        : 'pariatur',
    contentHtml:
      overrides && overrides.hasOwnProperty('contentHtml')
        ? overrides.contentHtml!
        : 'id',
    excerpt:
      overrides && overrides.hasOwnProperty('excerpt')
        ? overrides.excerpt!
        : 'nihil',
    excerptHtml:
      overrides && overrides.hasOwnProperty('excerptHtml')
        ? overrides.excerptHtml!
        : 'reprehenderit',
    handle:
      overrides && overrides.hasOwnProperty('handle')
        ? overrides.handle!
        : 'perspiciatis',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'a349255d-ed73-4f00-99dc-0494a5a641bf',
    image:
      overrides && overrides.hasOwnProperty('image')
        ? overrides.image!
        : anImage(),
    metafield:
      overrides && overrides.hasOwnProperty('metafield')
        ? overrides.metafield!
        : aMetafield(),
    metafields:
      overrides && overrides.hasOwnProperty('metafields')
        ? overrides.metafields!
        : aMetafieldConnection(),
    onlineStoreUrl:
      overrides && overrides.hasOwnProperty('onlineStoreUrl')
        ? overrides.onlineStoreUrl!
        : 'dicta',
    publishedAt:
      overrides && overrides.hasOwnProperty('publishedAt')
        ? overrides.publishedAt!
        : 'ducimus',
    seo: overrides && overrides.hasOwnProperty('seo') ? overrides.seo! : aSeo(),
    tags:
      overrides && overrides.hasOwnProperty('tags')
        ? overrides.tags!
        : ['quod'],
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : 'aperiam',
  }
}

export const anArticleAuthor = (
  overrides?: Partial<ArticleAuthor>,
): ArticleAuthor => {
  return {
    bio:
      overrides && overrides.hasOwnProperty('bio') ? overrides.bio! : 'rerum',
    email:
      overrides && overrides.hasOwnProperty('email')
        ? overrides.email!
        : 'voluptatem',
    firstName:
      overrides && overrides.hasOwnProperty('firstName')
        ? overrides.firstName!
        : 'pariatur',
    lastName:
      overrides && overrides.hasOwnProperty('lastName')
        ? overrides.lastName!
        : 'expedita',
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'aut',
  }
}

export const anArticleConnection = (
  overrides?: Partial<ArticleConnection>,
): ArticleConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [anArticleEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const anArticleEdge = (
  overrides?: Partial<ArticleEdge>,
): ArticleEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'eum',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : anArticle(),
  }
}

export const anAttribute = (overrides?: Partial<Attribute>): Attribute => {
  return {
    key:
      overrides && overrides.hasOwnProperty('key')
        ? overrides.key!
        : 'asperiores',
    value:
      overrides && overrides.hasOwnProperty('value')
        ? overrides.value!
        : 'consequatur',
  }
}

export const anAttributeInput = (
  overrides?: Partial<AttributeInput>,
): AttributeInput => {
  return {
    key: overrides && overrides.hasOwnProperty('key') ? overrides.key! : 'aut',
    value:
      overrides && overrides.hasOwnProperty('value')
        ? overrides.value!
        : 'pariatur',
  }
}

export const anAutomaticDiscountApplication = (
  overrides?: Partial<AutomaticDiscountApplication>,
): AutomaticDiscountApplication => {
  return {
    allocationMethod:
      overrides && overrides.hasOwnProperty('allocationMethod')
        ? overrides.allocationMethod!
        : DiscountApplicationAllocationMethod.Across,
    targetSelection:
      overrides && overrides.hasOwnProperty('targetSelection')
        ? overrides.targetSelection!
        : DiscountApplicationTargetSelection.All,
    targetType:
      overrides && overrides.hasOwnProperty('targetType')
        ? overrides.targetType!
        : DiscountApplicationTargetType.LineItem,
    title:
      overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'et',
    value:
      overrides && overrides.hasOwnProperty('value')
        ? overrides.value!
        : aMoneyV2(),
  }
}

export const anAvailableShippingRates = (
  overrides?: Partial<AvailableShippingRates>,
): AvailableShippingRates => {
  return {
    ready:
      overrides && overrides.hasOwnProperty('ready') ? overrides.ready! : true,
    shippingRates:
      overrides && overrides.hasOwnProperty('shippingRates')
        ? overrides.shippingRates!
        : [aShippingRate()],
  }
}

export const aBlog = (overrides?: Partial<Blog>): Blog => {
  return {
    articleByHandle:
      overrides && overrides.hasOwnProperty('articleByHandle')
        ? overrides.articleByHandle!
        : anArticle(),
    articles:
      overrides && overrides.hasOwnProperty('articles')
        ? overrides.articles!
        : anArticleConnection(),
    authors:
      overrides && overrides.hasOwnProperty('authors')
        ? overrides.authors!
        : [anArticleAuthor()],
    handle:
      overrides && overrides.hasOwnProperty('handle')
        ? overrides.handle!
        : 'ea',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '5421b369-fc17-4865-b270-b5ee49e2b5c7',
    metafield:
      overrides && overrides.hasOwnProperty('metafield')
        ? overrides.metafield!
        : aMetafield(),
    metafields:
      overrides && overrides.hasOwnProperty('metafields')
        ? overrides.metafields!
        : aMetafieldConnection(),
    onlineStoreUrl:
      overrides && overrides.hasOwnProperty('onlineStoreUrl')
        ? overrides.onlineStoreUrl!
        : 'eaque',
    seo: overrides && overrides.hasOwnProperty('seo') ? overrides.seo! : aSeo(),
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : 'officiis',
  }
}

export const aBlogConnection = (
  overrides?: Partial<BlogConnection>,
): BlogConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [aBlogEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const aBlogEdge = (overrides?: Partial<BlogEdge>): BlogEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'in',
    node:
      overrides && overrides.hasOwnProperty('node') ? overrides.node! : aBlog(),
  }
}

export const aCart = (overrides?: Partial<Cart>): Cart => {
  return {
    attributes:
      overrides && overrides.hasOwnProperty('attributes')
        ? overrides.attributes!
        : [anAttribute()],
    buyerIdentity:
      overrides && overrides.hasOwnProperty('buyerIdentity')
        ? overrides.buyerIdentity!
        : aCartBuyerIdentity(),
    checkoutUrl:
      overrides && overrides.hasOwnProperty('checkoutUrl')
        ? overrides.checkoutUrl!
        : 'laudantium',
    createdAt:
      overrides && overrides.hasOwnProperty('createdAt')
        ? overrides.createdAt!
        : 'eligendi',
    discountCodes:
      overrides && overrides.hasOwnProperty('discountCodes')
        ? overrides.discountCodes!
        : [aCartDiscountCode()],
    estimatedCost:
      overrides && overrides.hasOwnProperty('estimatedCost')
        ? overrides.estimatedCost!
        : aCartEstimatedCost(),
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '92ecd5c5-8738-44c0-808e-4fd12b86c7c2',
    lines:
      overrides && overrides.hasOwnProperty('lines')
        ? overrides.lines!
        : aCartLineConnection(),
    note:
      overrides && overrides.hasOwnProperty('note') ? overrides.note! : 'porro',
    updatedAt:
      overrides && overrides.hasOwnProperty('updatedAt')
        ? overrides.updatedAt!
        : 'qui',
  }
}

export const aCartAttributesUpdatePayload = (
  overrides?: Partial<CartAttributesUpdatePayload>,
): CartAttributesUpdatePayload => {
  return {
    cart:
      overrides && overrides.hasOwnProperty('cart') ? overrides.cart! : aCart(),
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aCartUserError()],
  }
}

export const aCartAutomaticDiscountAllocation = (
  overrides?: Partial<CartAutomaticDiscountAllocation>,
): CartAutomaticDiscountAllocation => {
  return {
    discountedAmount:
      overrides && overrides.hasOwnProperty('discountedAmount')
        ? overrides.discountedAmount!
        : aMoneyV2(),
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : 'voluptate',
  }
}

export const aCartBuyerIdentity = (
  overrides?: Partial<CartBuyerIdentity>,
): CartBuyerIdentity => {
  return {
    countryCode:
      overrides && overrides.hasOwnProperty('countryCode')
        ? overrides.countryCode!
        : CountryCode.Ac,
    customer:
      overrides && overrides.hasOwnProperty('customer')
        ? overrides.customer!
        : aCustomer(),
    email:
      overrides && overrides.hasOwnProperty('email')
        ? overrides.email!
        : 'necessitatibus',
    phone:
      overrides && overrides.hasOwnProperty('phone')
        ? overrides.phone!
        : 'quasi',
  }
}

export const aCartBuyerIdentityInput = (
  overrides?: Partial<CartBuyerIdentityInput>,
): CartBuyerIdentityInput => {
  return {
    countryCode:
      overrides && overrides.hasOwnProperty('countryCode')
        ? overrides.countryCode!
        : CountryCode.Ac,
    customerAccessToken:
      overrides && overrides.hasOwnProperty('customerAccessToken')
        ? overrides.customerAccessToken!
        : 'itaque',
    email:
      overrides && overrides.hasOwnProperty('email')
        ? overrides.email!
        : 'quia',
    phone:
      overrides && overrides.hasOwnProperty('phone')
        ? overrides.phone!
        : 'doloremque',
  }
}

export const aCartBuyerIdentityUpdatePayload = (
  overrides?: Partial<CartBuyerIdentityUpdatePayload>,
): CartBuyerIdentityUpdatePayload => {
  return {
    cart:
      overrides && overrides.hasOwnProperty('cart') ? overrides.cart! : aCart(),
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aCartUserError()],
  }
}

export const aCartCodeDiscountAllocation = (
  overrides?: Partial<CartCodeDiscountAllocation>,
): CartCodeDiscountAllocation => {
  return {
    code:
      overrides && overrides.hasOwnProperty('code')
        ? overrides.code!
        : 'laudantium',
    discountedAmount:
      overrides && overrides.hasOwnProperty('discountedAmount')
        ? overrides.discountedAmount!
        : aMoneyV2(),
  }
}

export const aCartCreatePayload = (
  overrides?: Partial<CartCreatePayload>,
): CartCreatePayload => {
  return {
    cart:
      overrides && overrides.hasOwnProperty('cart') ? overrides.cart! : aCart(),
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aCartUserError()],
  }
}

export const aCartDiscountAllocation = (
  overrides?: Partial<CartDiscountAllocation>,
): CartDiscountAllocation => {
  return {
    discountedAmount:
      overrides && overrides.hasOwnProperty('discountedAmount')
        ? overrides.discountedAmount!
        : aMoneyV2(),
  }
}

export const aCartDiscountCode = (
  overrides?: Partial<CartDiscountCode>,
): CartDiscountCode => {
  return {
    applicable:
      overrides && overrides.hasOwnProperty('applicable')
        ? overrides.applicable!
        : false,
    code:
      overrides && overrides.hasOwnProperty('code') ? overrides.code! : 'minus',
  }
}

export const aCartDiscountCodesUpdatePayload = (
  overrides?: Partial<CartDiscountCodesUpdatePayload>,
): CartDiscountCodesUpdatePayload => {
  return {
    cart:
      overrides && overrides.hasOwnProperty('cart') ? overrides.cart! : aCart(),
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aCartUserError()],
  }
}

export const aCartEstimatedCost = (
  overrides?: Partial<CartEstimatedCost>,
): CartEstimatedCost => {
  return {
    subtotalAmount:
      overrides && overrides.hasOwnProperty('subtotalAmount')
        ? overrides.subtotalAmount!
        : aMoneyV2(),
    totalAmount:
      overrides && overrides.hasOwnProperty('totalAmount')
        ? overrides.totalAmount!
        : aMoneyV2(),
    totalDutyAmount:
      overrides && overrides.hasOwnProperty('totalDutyAmount')
        ? overrides.totalDutyAmount!
        : aMoneyV2(),
    totalTaxAmount:
      overrides && overrides.hasOwnProperty('totalTaxAmount')
        ? overrides.totalTaxAmount!
        : aMoneyV2(),
  }
}

export const aCartInput = (overrides?: Partial<CartInput>): CartInput => {
  return {
    attributes:
      overrides && overrides.hasOwnProperty('attributes')
        ? overrides.attributes!
        : [anAttributeInput()],
    buyerIdentity:
      overrides && overrides.hasOwnProperty('buyerIdentity')
        ? overrides.buyerIdentity!
        : aCartBuyerIdentityInput(),
    discountCodes:
      overrides && overrides.hasOwnProperty('discountCodes')
        ? overrides.discountCodes!
        : ['tenetur'],
    lines:
      overrides && overrides.hasOwnProperty('lines')
        ? overrides.lines!
        : [aCartLineInput()],
    note:
      overrides && overrides.hasOwnProperty('note') ? overrides.note! : 'eos',
  }
}

export const aCartLine = (overrides?: Partial<CartLine>): CartLine => {
  return {
    attributes:
      overrides && overrides.hasOwnProperty('attributes')
        ? overrides.attributes!
        : [anAttribute()],
    discountAllocations:
      overrides && overrides.hasOwnProperty('discountAllocations')
        ? overrides.discountAllocations!
        : [aCartDiscountAllocation()],
    estimatedCost:
      overrides && overrides.hasOwnProperty('estimatedCost')
        ? overrides.estimatedCost!
        : aCartLineEstimatedCost(),
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'bbe47f9b-3298-4c9f-a2a7-71feebeac60d',
    merchandise:
      overrides && overrides.hasOwnProperty('merchandise')
        ? overrides.merchandise!
        : aProductVariant(),
    quantity:
      overrides && overrides.hasOwnProperty('quantity')
        ? overrides.quantity!
        : 9769,
    sellingPlanAllocation:
      overrides && overrides.hasOwnProperty('sellingPlanAllocation')
        ? overrides.sellingPlanAllocation!
        : aSellingPlanAllocation(),
  }
}

export const aCartLineConnection = (
  overrides?: Partial<CartLineConnection>,
): CartLineConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [aCartLineEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const aCartLineEdge = (
  overrides?: Partial<CartLineEdge>,
): CartLineEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'inventore',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : aCartLine(),
  }
}

export const aCartLineEstimatedCost = (
  overrides?: Partial<CartLineEstimatedCost>,
): CartLineEstimatedCost => {
  return {
    subtotalAmount:
      overrides && overrides.hasOwnProperty('subtotalAmount')
        ? overrides.subtotalAmount!
        : aMoneyV2(),
    totalAmount:
      overrides && overrides.hasOwnProperty('totalAmount')
        ? overrides.totalAmount!
        : aMoneyV2(),
  }
}

export const aCartLineInput = (
  overrides?: Partial<CartLineInput>,
): CartLineInput => {
  return {
    attributes:
      overrides && overrides.hasOwnProperty('attributes')
        ? overrides.attributes!
        : [anAttributeInput()],
    merchandiseId:
      overrides && overrides.hasOwnProperty('merchandiseId')
        ? overrides.merchandiseId!
        : '7976f424-8e38-4b51-aefc-e9bd0b99a5da',
    quantity:
      overrides && overrides.hasOwnProperty('quantity')
        ? overrides.quantity!
        : 2158,
    sellingPlanId:
      overrides && overrides.hasOwnProperty('sellingPlanId')
        ? overrides.sellingPlanId!
        : '361fc497-7f61-419a-8f0c-f284e63b3230',
  }
}

export const aCartLineUpdateInput = (
  overrides?: Partial<CartLineUpdateInput>,
): CartLineUpdateInput => {
  return {
    attributes:
      overrides && overrides.hasOwnProperty('attributes')
        ? overrides.attributes!
        : [anAttributeInput()],
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'fac516c6-ca97-404a-90da-4cd7c411cacd',
    merchandiseId:
      overrides && overrides.hasOwnProperty('merchandiseId')
        ? overrides.merchandiseId!
        : '17d32334-9fa6-4cbb-ab4d-a8921a0a783a',
    quantity:
      overrides && overrides.hasOwnProperty('quantity')
        ? overrides.quantity!
        : 4069,
    sellingPlanId:
      overrides && overrides.hasOwnProperty('sellingPlanId')
        ? overrides.sellingPlanId!
        : '3ffa730c-0dc8-43cc-be21-6c4a052ac3b9',
  }
}

export const aCartLinesAddPayload = (
  overrides?: Partial<CartLinesAddPayload>,
): CartLinesAddPayload => {
  return {
    cart:
      overrides && overrides.hasOwnProperty('cart') ? overrides.cart! : aCart(),
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aCartUserError()],
  }
}

export const aCartLinesRemovePayload = (
  overrides?: Partial<CartLinesRemovePayload>,
): CartLinesRemovePayload => {
  return {
    cart:
      overrides && overrides.hasOwnProperty('cart') ? overrides.cart! : aCart(),
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aCartUserError()],
  }
}

export const aCartLinesUpdatePayload = (
  overrides?: Partial<CartLinesUpdatePayload>,
): CartLinesUpdatePayload => {
  return {
    cart:
      overrides && overrides.hasOwnProperty('cart') ? overrides.cart! : aCart(),
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aCartUserError()],
  }
}

export const aCartNoteUpdatePayload = (
  overrides?: Partial<CartNoteUpdatePayload>,
): CartNoteUpdatePayload => {
  return {
    cart:
      overrides && overrides.hasOwnProperty('cart') ? overrides.cart! : aCart(),
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aCartUserError()],
  }
}

export const aCartUserError = (
  overrides?: Partial<CartUserError>,
): CartUserError => {
  return {
    code:
      overrides && overrides.hasOwnProperty('code')
        ? overrides.code!
        : CartErrorCode.Invalid,
    field:
      overrides && overrides.hasOwnProperty('field')
        ? overrides.field!
        : ['et'],
    message:
      overrides && overrides.hasOwnProperty('message')
        ? overrides.message!
        : 'illo',
  }
}

export const aCheckout = (overrides?: Partial<Checkout>): Checkout => {
  return {
    appliedGiftCards:
      overrides && overrides.hasOwnProperty('appliedGiftCards')
        ? overrides.appliedGiftCards!
        : [anAppliedGiftCard()],
    availableShippingRates:
      overrides && overrides.hasOwnProperty('availableShippingRates')
        ? overrides.availableShippingRates!
        : anAvailableShippingRates(),
    buyerIdentity:
      overrides && overrides.hasOwnProperty('buyerIdentity')
        ? overrides.buyerIdentity!
        : aCheckoutBuyerIdentity(),
    completedAt:
      overrides && overrides.hasOwnProperty('completedAt')
        ? overrides.completedAt!
        : 'nobis',
    createdAt:
      overrides && overrides.hasOwnProperty('createdAt')
        ? overrides.createdAt!
        : 'autem',
    currencyCode:
      overrides && overrides.hasOwnProperty('currencyCode')
        ? overrides.currencyCode!
        : CurrencyCode.Aed,
    customAttributes:
      overrides && overrides.hasOwnProperty('customAttributes')
        ? overrides.customAttributes!
        : [anAttribute()],
    discountApplications:
      overrides && overrides.hasOwnProperty('discountApplications')
        ? overrides.discountApplications!
        : aDiscountApplicationConnection(),
    email:
      overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'et',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '37bd7e1f-e8a8-43c0-8931-266425a067bc',
    lineItems:
      overrides && overrides.hasOwnProperty('lineItems')
        ? overrides.lineItems!
        : aCheckoutLineItemConnection(),
    lineItemsSubtotalPrice:
      overrides && overrides.hasOwnProperty('lineItemsSubtotalPrice')
        ? overrides.lineItemsSubtotalPrice!
        : aMoneyV2(),
    note:
      overrides && overrides.hasOwnProperty('note')
        ? overrides.note!
        : 'sapiente',
    order:
      overrides && overrides.hasOwnProperty('order')
        ? overrides.order!
        : anOrder(),
    orderStatusUrl:
      overrides && overrides.hasOwnProperty('orderStatusUrl')
        ? overrides.orderStatusUrl!
        : 'placeat',
    paymentDue:
      overrides && overrides.hasOwnProperty('paymentDue')
        ? overrides.paymentDue!
        : 'non',
    paymentDueV2:
      overrides && overrides.hasOwnProperty('paymentDueV2')
        ? overrides.paymentDueV2!
        : aMoneyV2(),
    ready:
      overrides && overrides.hasOwnProperty('ready') ? overrides.ready! : false,
    requiresShipping:
      overrides && overrides.hasOwnProperty('requiresShipping')
        ? overrides.requiresShipping!
        : true,
    shippingAddress:
      overrides && overrides.hasOwnProperty('shippingAddress')
        ? overrides.shippingAddress!
        : aMailingAddress(),
    shippingDiscountAllocations:
      overrides && overrides.hasOwnProperty('shippingDiscountAllocations')
        ? overrides.shippingDiscountAllocations!
        : [aDiscountAllocation()],
    shippingLine:
      overrides && overrides.hasOwnProperty('shippingLine')
        ? overrides.shippingLine!
        : aShippingRate(),
    subtotalPrice:
      overrides && overrides.hasOwnProperty('subtotalPrice')
        ? overrides.subtotalPrice!
        : 'non',
    subtotalPriceV2:
      overrides && overrides.hasOwnProperty('subtotalPriceV2')
        ? overrides.subtotalPriceV2!
        : aMoneyV2(),
    taxExempt:
      overrides && overrides.hasOwnProperty('taxExempt')
        ? overrides.taxExempt!
        : true,
    taxesIncluded:
      overrides && overrides.hasOwnProperty('taxesIncluded')
        ? overrides.taxesIncluded!
        : false,
    totalDuties:
      overrides && overrides.hasOwnProperty('totalDuties')
        ? overrides.totalDuties!
        : aMoneyV2(),
    totalPrice:
      overrides && overrides.hasOwnProperty('totalPrice')
        ? overrides.totalPrice!
        : 'id',
    totalPriceV2:
      overrides && overrides.hasOwnProperty('totalPriceV2')
        ? overrides.totalPriceV2!
        : aMoneyV2(),
    totalTax:
      overrides && overrides.hasOwnProperty('totalTax')
        ? overrides.totalTax!
        : 'porro',
    totalTaxV2:
      overrides && overrides.hasOwnProperty('totalTaxV2')
        ? overrides.totalTaxV2!
        : aMoneyV2(),
    updatedAt:
      overrides && overrides.hasOwnProperty('updatedAt')
        ? overrides.updatedAt!
        : 'non',
    webUrl:
      overrides && overrides.hasOwnProperty('webUrl')
        ? overrides.webUrl!
        : 'repellendus',
  }
}

export const aCheckoutAttributesUpdateInput = (
  overrides?: Partial<CheckoutAttributesUpdateInput>,
): CheckoutAttributesUpdateInput => {
  return {
    allowPartialAddresses:
      overrides && overrides.hasOwnProperty('allowPartialAddresses')
        ? overrides.allowPartialAddresses!
        : false,
    customAttributes:
      overrides && overrides.hasOwnProperty('customAttributes')
        ? overrides.customAttributes!
        : [anAttributeInput()],
    note:
      overrides && overrides.hasOwnProperty('note')
        ? overrides.note!
        : 'praesentium',
  }
}

export const aCheckoutAttributesUpdatePayload = (
  overrides?: Partial<CheckoutAttributesUpdatePayload>,
): CheckoutAttributesUpdatePayload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutAttributesUpdateV2Input = (
  overrides?: Partial<CheckoutAttributesUpdateV2Input>,
): CheckoutAttributesUpdateV2Input => {
  return {
    allowPartialAddresses:
      overrides && overrides.hasOwnProperty('allowPartialAddresses')
        ? overrides.allowPartialAddresses!
        : true,
    customAttributes:
      overrides && overrides.hasOwnProperty('customAttributes')
        ? overrides.customAttributes!
        : [anAttributeInput()],
    note:
      overrides && overrides.hasOwnProperty('note') ? overrides.note! : 'at',
  }
}

export const aCheckoutAttributesUpdateV2Payload = (
  overrides?: Partial<CheckoutAttributesUpdateV2Payload>,
): CheckoutAttributesUpdateV2Payload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutBuyerIdentity = (
  overrides?: Partial<CheckoutBuyerIdentity>,
): CheckoutBuyerIdentity => {
  return {
    countryCode:
      overrides && overrides.hasOwnProperty('countryCode')
        ? overrides.countryCode!
        : CountryCode.Ac,
  }
}

export const aCheckoutBuyerIdentityInput = (
  overrides?: Partial<CheckoutBuyerIdentityInput>,
): CheckoutBuyerIdentityInput => {
  return {
    countryCode:
      overrides && overrides.hasOwnProperty('countryCode')
        ? overrides.countryCode!
        : CountryCode.Ac,
  }
}

export const aCheckoutCompleteFreePayload = (
  overrides?: Partial<CheckoutCompleteFreePayload>,
): CheckoutCompleteFreePayload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutCompleteWithCreditCardPayload = (
  overrides?: Partial<CheckoutCompleteWithCreditCardPayload>,
): CheckoutCompleteWithCreditCardPayload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    payment:
      overrides && overrides.hasOwnProperty('payment')
        ? overrides.payment!
        : aPayment(),
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutCompleteWithCreditCardV2Payload = (
  overrides?: Partial<CheckoutCompleteWithCreditCardV2Payload>,
): CheckoutCompleteWithCreditCardV2Payload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    payment:
      overrides && overrides.hasOwnProperty('payment')
        ? overrides.payment!
        : aPayment(),
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutCompleteWithTokenizedPaymentPayload = (
  overrides?: Partial<CheckoutCompleteWithTokenizedPaymentPayload>,
): CheckoutCompleteWithTokenizedPaymentPayload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    payment:
      overrides && overrides.hasOwnProperty('payment')
        ? overrides.payment!
        : aPayment(),
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutCompleteWithTokenizedPaymentV2Payload = (
  overrides?: Partial<CheckoutCompleteWithTokenizedPaymentV2Payload>,
): CheckoutCompleteWithTokenizedPaymentV2Payload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    payment:
      overrides && overrides.hasOwnProperty('payment')
        ? overrides.payment!
        : aPayment(),
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutCompleteWithTokenizedPaymentV3Payload = (
  overrides?: Partial<CheckoutCompleteWithTokenizedPaymentV3Payload>,
): CheckoutCompleteWithTokenizedPaymentV3Payload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    payment:
      overrides && overrides.hasOwnProperty('payment')
        ? overrides.payment!
        : aPayment(),
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutCreateInput = (
  overrides?: Partial<CheckoutCreateInput>,
): CheckoutCreateInput => {
  return {
    allowPartialAddresses:
      overrides && overrides.hasOwnProperty('allowPartialAddresses')
        ? overrides.allowPartialAddresses!
        : false,
    buyerIdentity:
      overrides && overrides.hasOwnProperty('buyerIdentity')
        ? overrides.buyerIdentity!
        : aCheckoutBuyerIdentityInput(),
    customAttributes:
      overrides && overrides.hasOwnProperty('customAttributes')
        ? overrides.customAttributes!
        : [anAttributeInput()],
    email:
      overrides && overrides.hasOwnProperty('email')
        ? overrides.email!
        : 'voluptatum',
    lineItems:
      overrides && overrides.hasOwnProperty('lineItems')
        ? overrides.lineItems!
        : [aCheckoutLineItemInput()],
    note:
      overrides && overrides.hasOwnProperty('note') ? overrides.note! : 'et',
    presentmentCurrencyCode:
      overrides && overrides.hasOwnProperty('presentmentCurrencyCode')
        ? overrides.presentmentCurrencyCode!
        : CurrencyCode.Aed,
    shippingAddress:
      overrides && overrides.hasOwnProperty('shippingAddress')
        ? overrides.shippingAddress!
        : aMailingAddressInput(),
  }
}

export const aCheckoutCreatePayload = (
  overrides?: Partial<CheckoutCreatePayload>,
): CheckoutCreatePayload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    queueToken:
      overrides && overrides.hasOwnProperty('queueToken')
        ? overrides.queueToken!
        : 'officia',
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutCustomerAssociatePayload = (
  overrides?: Partial<CheckoutCustomerAssociatePayload>,
): CheckoutCustomerAssociatePayload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    customer:
      overrides && overrides.hasOwnProperty('customer')
        ? overrides.customer!
        : aCustomer(),
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutCustomerAssociateV2Payload = (
  overrides?: Partial<CheckoutCustomerAssociateV2Payload>,
): CheckoutCustomerAssociateV2Payload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    customer:
      overrides && overrides.hasOwnProperty('customer')
        ? overrides.customer!
        : aCustomer(),
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutCustomerDisassociatePayload = (
  overrides?: Partial<CheckoutCustomerDisassociatePayload>,
): CheckoutCustomerDisassociatePayload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutCustomerDisassociateV2Payload = (
  overrides?: Partial<CheckoutCustomerDisassociateV2Payload>,
): CheckoutCustomerDisassociateV2Payload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutDiscountCodeApplyPayload = (
  overrides?: Partial<CheckoutDiscountCodeApplyPayload>,
): CheckoutDiscountCodeApplyPayload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutDiscountCodeApplyV2Payload = (
  overrides?: Partial<CheckoutDiscountCodeApplyV2Payload>,
): CheckoutDiscountCodeApplyV2Payload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutDiscountCodeRemovePayload = (
  overrides?: Partial<CheckoutDiscountCodeRemovePayload>,
): CheckoutDiscountCodeRemovePayload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutEmailUpdatePayload = (
  overrides?: Partial<CheckoutEmailUpdatePayload>,
): CheckoutEmailUpdatePayload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutEmailUpdateV2Payload = (
  overrides?: Partial<CheckoutEmailUpdateV2Payload>,
): CheckoutEmailUpdateV2Payload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutGiftCardApplyPayload = (
  overrides?: Partial<CheckoutGiftCardApplyPayload>,
): CheckoutGiftCardApplyPayload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutGiftCardRemovePayload = (
  overrides?: Partial<CheckoutGiftCardRemovePayload>,
): CheckoutGiftCardRemovePayload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutGiftCardRemoveV2Payload = (
  overrides?: Partial<CheckoutGiftCardRemoveV2Payload>,
): CheckoutGiftCardRemoveV2Payload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutGiftCardsAppendPayload = (
  overrides?: Partial<CheckoutGiftCardsAppendPayload>,
): CheckoutGiftCardsAppendPayload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutLineItem = (
  overrides?: Partial<CheckoutLineItem>,
): CheckoutLineItem => {
  return {
    customAttributes:
      overrides && overrides.hasOwnProperty('customAttributes')
        ? overrides.customAttributes!
        : [anAttribute()],
    discountAllocations:
      overrides && overrides.hasOwnProperty('discountAllocations')
        ? overrides.discountAllocations!
        : [aDiscountAllocation()],
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '31c14942-de1b-4a36-a396-0d6b45a62e8f',
    quantity:
      overrides && overrides.hasOwnProperty('quantity')
        ? overrides.quantity!
        : 9126,
    title:
      overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'eum',
    unitPrice:
      overrides && overrides.hasOwnProperty('unitPrice')
        ? overrides.unitPrice!
        : aMoneyV2(),
    variant:
      overrides && overrides.hasOwnProperty('variant')
        ? overrides.variant!
        : aProductVariant(),
  }
}

export const aCheckoutLineItemConnection = (
  overrides?: Partial<CheckoutLineItemConnection>,
): CheckoutLineItemConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [aCheckoutLineItemEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const aCheckoutLineItemEdge = (
  overrides?: Partial<CheckoutLineItemEdge>,
): CheckoutLineItemEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'et',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : aCheckoutLineItem(),
  }
}

export const aCheckoutLineItemInput = (
  overrides?: Partial<CheckoutLineItemInput>,
): CheckoutLineItemInput => {
  return {
    customAttributes:
      overrides && overrides.hasOwnProperty('customAttributes')
        ? overrides.customAttributes!
        : [anAttributeInput()],
    quantity:
      overrides && overrides.hasOwnProperty('quantity')
        ? overrides.quantity!
        : 8330,
    variantId:
      overrides && overrides.hasOwnProperty('variantId')
        ? overrides.variantId!
        : 'e9d494c9-b505-4a35-8f07-60bfd23ee2b9',
  }
}

export const aCheckoutLineItemUpdateInput = (
  overrides?: Partial<CheckoutLineItemUpdateInput>,
): CheckoutLineItemUpdateInput => {
  return {
    customAttributes:
      overrides && overrides.hasOwnProperty('customAttributes')
        ? overrides.customAttributes!
        : [anAttributeInput()],
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '9f8aa797-b2ab-4f95-8898-e41932fabd93',
    quantity:
      overrides && overrides.hasOwnProperty('quantity')
        ? overrides.quantity!
        : 9268,
    variantId:
      overrides && overrides.hasOwnProperty('variantId')
        ? overrides.variantId!
        : 'd97fa4a1-24d7-4323-b797-7a37991d2d3e',
  }
}

export const aCheckoutLineItemsAddPayload = (
  overrides?: Partial<CheckoutLineItemsAddPayload>,
): CheckoutLineItemsAddPayload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutLineItemsRemovePayload = (
  overrides?: Partial<CheckoutLineItemsRemovePayload>,
): CheckoutLineItemsRemovePayload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutLineItemsReplacePayload = (
  overrides?: Partial<CheckoutLineItemsReplacePayload>,
): CheckoutLineItemsReplacePayload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aCheckoutUserError()],
  }
}

export const aCheckoutLineItemsUpdatePayload = (
  overrides?: Partial<CheckoutLineItemsUpdatePayload>,
): CheckoutLineItemsUpdatePayload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutShippingAddressUpdatePayload = (
  overrides?: Partial<CheckoutShippingAddressUpdatePayload>,
): CheckoutShippingAddressUpdatePayload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutShippingAddressUpdateV2Payload = (
  overrides?: Partial<CheckoutShippingAddressUpdateV2Payload>,
): CheckoutShippingAddressUpdateV2Payload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutShippingLineUpdatePayload = (
  overrides?: Partial<CheckoutShippingLineUpdatePayload>,
): CheckoutShippingLineUpdatePayload => {
  return {
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    checkoutUserErrors:
      overrides && overrides.hasOwnProperty('checkoutUserErrors')
        ? overrides.checkoutUserErrors!
        : [aCheckoutUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCheckoutUserError = (
  overrides?: Partial<CheckoutUserError>,
): CheckoutUserError => {
  return {
    code:
      overrides && overrides.hasOwnProperty('code')
        ? overrides.code!
        : CheckoutErrorCode.AlreadyCompleted,
    field:
      overrides && overrides.hasOwnProperty('field')
        ? overrides.field!
        : ['omnis'],
    message:
      overrides && overrides.hasOwnProperty('message')
        ? overrides.message!
        : 'qui',
  }
}

export const aCollection = (overrides?: Partial<Collection>): Collection => {
  return {
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'suscipit',
    descriptionHtml:
      overrides && overrides.hasOwnProperty('descriptionHtml')
        ? overrides.descriptionHtml!
        : 'atque',
    handle:
      overrides && overrides.hasOwnProperty('handle')
        ? overrides.handle!
        : 'repudiandae',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'df601c0f-3a8f-423d-af58-d8e8270ac85e',
    image:
      overrides && overrides.hasOwnProperty('image')
        ? overrides.image!
        : anImage(),
    metafield:
      overrides && overrides.hasOwnProperty('metafield')
        ? overrides.metafield!
        : aMetafield(),
    metafields:
      overrides && overrides.hasOwnProperty('metafields')
        ? overrides.metafields!
        : aMetafieldConnection(),
    onlineStoreUrl:
      overrides && overrides.hasOwnProperty('onlineStoreUrl')
        ? overrides.onlineStoreUrl!
        : 'aut',
    products:
      overrides && overrides.hasOwnProperty('products')
        ? overrides.products!
        : aProductConnection(),
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : 'nesciunt',
    updatedAt:
      overrides && overrides.hasOwnProperty('updatedAt')
        ? overrides.updatedAt!
        : 'provident',
  }
}

export const aCollectionConnection = (
  overrides?: Partial<CollectionConnection>,
): CollectionConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [aCollectionEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const aCollectionEdge = (
  overrides?: Partial<CollectionEdge>,
): CollectionEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'et',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : aCollection(),
  }
}

export const aComment = (overrides?: Partial<Comment>): Comment => {
  return {
    author:
      overrides && overrides.hasOwnProperty('author')
        ? overrides.author!
        : aCommentAuthor(),
    content:
      overrides && overrides.hasOwnProperty('content')
        ? overrides.content!
        : 'illum',
    contentHtml:
      overrides && overrides.hasOwnProperty('contentHtml')
        ? overrides.contentHtml!
        : 'modi',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '6046ffb2-6bf2-4352-8bd1-399138ba33c0',
  }
}

export const aCommentAuthor = (
  overrides?: Partial<CommentAuthor>,
): CommentAuthor => {
  return {
    email:
      overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'aut',
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'non',
  }
}

export const aCommentConnection = (
  overrides?: Partial<CommentConnection>,
): CommentConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [aCommentEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const aCommentEdge = (overrides?: Partial<CommentEdge>): CommentEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'magnam',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : aComment(),
  }
}

export const aCountry = (overrides?: Partial<Country>): Country => {
  return {
    currency:
      overrides && overrides.hasOwnProperty('currency')
        ? overrides.currency!
        : aCurrency(),
    isoCode:
      overrides && overrides.hasOwnProperty('isoCode')
        ? overrides.isoCode!
        : CountryCode.Ac,
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'fugit',
    unitSystem:
      overrides && overrides.hasOwnProperty('unitSystem')
        ? overrides.unitSystem!
        : UnitSystem.ImperialSystem,
  }
}

export const aCreditCard = (overrides?: Partial<CreditCard>): CreditCard => {
  return {
    brand:
      overrides && overrides.hasOwnProperty('brand') ? overrides.brand! : 'et',
    expiryMonth:
      overrides && overrides.hasOwnProperty('expiryMonth')
        ? overrides.expiryMonth!
        : 3496,
    expiryYear:
      overrides && overrides.hasOwnProperty('expiryYear')
        ? overrides.expiryYear!
        : 6930,
    firstDigits:
      overrides && overrides.hasOwnProperty('firstDigits')
        ? overrides.firstDigits!
        : 'nihil',
    firstName:
      overrides && overrides.hasOwnProperty('firstName')
        ? overrides.firstName!
        : 'ea',
    lastDigits:
      overrides && overrides.hasOwnProperty('lastDigits')
        ? overrides.lastDigits!
        : 'repellat',
    lastName:
      overrides && overrides.hasOwnProperty('lastName')
        ? overrides.lastName!
        : 'est',
    maskedNumber:
      overrides && overrides.hasOwnProperty('maskedNumber')
        ? overrides.maskedNumber!
        : 'sit',
  }
}

export const aCreditCardPaymentInput = (
  overrides?: Partial<CreditCardPaymentInput>,
): CreditCardPaymentInput => {
  return {
    amount:
      overrides && overrides.hasOwnProperty('amount')
        ? overrides.amount!
        : 'nihil',
    billingAddress:
      overrides && overrides.hasOwnProperty('billingAddress')
        ? overrides.billingAddress!
        : aMailingAddressInput(),
    idempotencyKey:
      overrides && overrides.hasOwnProperty('idempotencyKey')
        ? overrides.idempotencyKey!
        : 'doloribus',
    test:
      overrides && overrides.hasOwnProperty('test') ? overrides.test! : true,
    vaultId:
      overrides && overrides.hasOwnProperty('vaultId')
        ? overrides.vaultId!
        : 'omnis',
  }
}

export const aCreditCardPaymentInputV2 = (
  overrides?: Partial<CreditCardPaymentInputV2>,
): CreditCardPaymentInputV2 => {
  return {
    billingAddress:
      overrides && overrides.hasOwnProperty('billingAddress')
        ? overrides.billingAddress!
        : aMailingAddressInput(),
    idempotencyKey:
      overrides && overrides.hasOwnProperty('idempotencyKey')
        ? overrides.idempotencyKey!
        : 'libero',
    paymentAmount:
      overrides && overrides.hasOwnProperty('paymentAmount')
        ? overrides.paymentAmount!
        : aMoneyInput(),
    test:
      overrides && overrides.hasOwnProperty('test') ? overrides.test! : true,
    vaultId:
      overrides && overrides.hasOwnProperty('vaultId')
        ? overrides.vaultId!
        : 'debitis',
  }
}

export const aCurrency = (overrides?: Partial<Currency>): Currency => {
  return {
    isoCode:
      overrides && overrides.hasOwnProperty('isoCode')
        ? overrides.isoCode!
        : CurrencyCode.Aed,
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'sed',
    symbol:
      overrides && overrides.hasOwnProperty('symbol')
        ? overrides.symbol!
        : 'natus',
  }
}

export const aCustomer = (overrides?: Partial<Customer>): Customer => {
  return {
    acceptsMarketing:
      overrides && overrides.hasOwnProperty('acceptsMarketing')
        ? overrides.acceptsMarketing!
        : false,
    addresses:
      overrides && overrides.hasOwnProperty('addresses')
        ? overrides.addresses!
        : aMailingAddressConnection(),
    createdAt:
      overrides && overrides.hasOwnProperty('createdAt')
        ? overrides.createdAt!
        : 'quasi',
    defaultAddress:
      overrides && overrides.hasOwnProperty('defaultAddress')
        ? overrides.defaultAddress!
        : aMailingAddress(),
    displayName:
      overrides && overrides.hasOwnProperty('displayName')
        ? overrides.displayName!
        : 'qui',
    email:
      overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'sit',
    firstName:
      overrides && overrides.hasOwnProperty('firstName')
        ? overrides.firstName!
        : 'asperiores',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'c7b2f704-dc93-438d-b0a1-216e8083ef04',
    lastIncompleteCheckout:
      overrides && overrides.hasOwnProperty('lastIncompleteCheckout')
        ? overrides.lastIncompleteCheckout!
        : aCheckout(),
    lastName:
      overrides && overrides.hasOwnProperty('lastName')
        ? overrides.lastName!
        : 'eos',
    metafield:
      overrides && overrides.hasOwnProperty('metafield')
        ? overrides.metafield!
        : aMetafield(),
    metafields:
      overrides && overrides.hasOwnProperty('metafields')
        ? overrides.metafields!
        : aMetafieldConnection(),
    orders:
      overrides && overrides.hasOwnProperty('orders')
        ? overrides.orders!
        : anOrderConnection(),
    phone:
      overrides && overrides.hasOwnProperty('phone')
        ? overrides.phone!
        : 'repudiandae',
    tags:
      overrides && overrides.hasOwnProperty('tags')
        ? overrides.tags!
        : ['nobis'],
    updatedAt:
      overrides && overrides.hasOwnProperty('updatedAt')
        ? overrides.updatedAt!
        : 'deleniti',
  }
}

export const aCustomerAccessToken = (
  overrides?: Partial<CustomerAccessToken>,
): CustomerAccessToken => {
  return {
    accessToken:
      overrides && overrides.hasOwnProperty('accessToken')
        ? overrides.accessToken!
        : 'voluptatum',
    expiresAt:
      overrides && overrides.hasOwnProperty('expiresAt')
        ? overrides.expiresAt!
        : 'vero',
  }
}

export const aCustomerAccessTokenCreateInput = (
  overrides?: Partial<CustomerAccessTokenCreateInput>,
): CustomerAccessTokenCreateInput => {
  return {
    email:
      overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'ex',
    password:
      overrides && overrides.hasOwnProperty('password')
        ? overrides.password!
        : 'impedit',
  }
}

export const aCustomerAccessTokenCreatePayload = (
  overrides?: Partial<CustomerAccessTokenCreatePayload>,
): CustomerAccessTokenCreatePayload => {
  return {
    customerAccessToken:
      overrides && overrides.hasOwnProperty('customerAccessToken')
        ? overrides.customerAccessToken!
        : aCustomerAccessToken(),
    customerUserErrors:
      overrides && overrides.hasOwnProperty('customerUserErrors')
        ? overrides.customerUserErrors!
        : [aCustomerUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCustomerAccessTokenCreateWithMultipassPayload = (
  overrides?: Partial<CustomerAccessTokenCreateWithMultipassPayload>,
): CustomerAccessTokenCreateWithMultipassPayload => {
  return {
    customerAccessToken:
      overrides && overrides.hasOwnProperty('customerAccessToken')
        ? overrides.customerAccessToken!
        : aCustomerAccessToken(),
    customerUserErrors:
      overrides && overrides.hasOwnProperty('customerUserErrors')
        ? overrides.customerUserErrors!
        : [aCustomerUserError()],
  }
}

export const aCustomerAccessTokenDeletePayload = (
  overrides?: Partial<CustomerAccessTokenDeletePayload>,
): CustomerAccessTokenDeletePayload => {
  return {
    deletedAccessToken:
      overrides && overrides.hasOwnProperty('deletedAccessToken')
        ? overrides.deletedAccessToken!
        : 'officia',
    deletedCustomerAccessTokenId:
      overrides && overrides.hasOwnProperty('deletedCustomerAccessTokenId')
        ? overrides.deletedCustomerAccessTokenId!
        : 'maxime',
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCustomerAccessTokenRenewPayload = (
  overrides?: Partial<CustomerAccessTokenRenewPayload>,
): CustomerAccessTokenRenewPayload => {
  return {
    customerAccessToken:
      overrides && overrides.hasOwnProperty('customerAccessToken')
        ? overrides.customerAccessToken!
        : aCustomerAccessToken(),
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCustomerActivateByUrlPayload = (
  overrides?: Partial<CustomerActivateByUrlPayload>,
): CustomerActivateByUrlPayload => {
  return {
    customer:
      overrides && overrides.hasOwnProperty('customer')
        ? overrides.customer!
        : aCustomer(),
    customerAccessToken:
      overrides && overrides.hasOwnProperty('customerAccessToken')
        ? overrides.customerAccessToken!
        : aCustomerAccessToken(),
    customerUserErrors:
      overrides && overrides.hasOwnProperty('customerUserErrors')
        ? overrides.customerUserErrors!
        : [aCustomerUserError()],
  }
}

export const aCustomerActivateInput = (
  overrides?: Partial<CustomerActivateInput>,
): CustomerActivateInput => {
  return {
    activationToken:
      overrides && overrides.hasOwnProperty('activationToken')
        ? overrides.activationToken!
        : 'sit',
    password:
      overrides && overrides.hasOwnProperty('password')
        ? overrides.password!
        : 'sit',
  }
}

export const aCustomerActivatePayload = (
  overrides?: Partial<CustomerActivatePayload>,
): CustomerActivatePayload => {
  return {
    customer:
      overrides && overrides.hasOwnProperty('customer')
        ? overrides.customer!
        : aCustomer(),
    customerAccessToken:
      overrides && overrides.hasOwnProperty('customerAccessToken')
        ? overrides.customerAccessToken!
        : aCustomerAccessToken(),
    customerUserErrors:
      overrides && overrides.hasOwnProperty('customerUserErrors')
        ? overrides.customerUserErrors!
        : [aCustomerUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCustomerAddressCreatePayload = (
  overrides?: Partial<CustomerAddressCreatePayload>,
): CustomerAddressCreatePayload => {
  return {
    customerAddress:
      overrides && overrides.hasOwnProperty('customerAddress')
        ? overrides.customerAddress!
        : aMailingAddress(),
    customerUserErrors:
      overrides && overrides.hasOwnProperty('customerUserErrors')
        ? overrides.customerUserErrors!
        : [aCustomerUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCustomerAddressDeletePayload = (
  overrides?: Partial<CustomerAddressDeletePayload>,
): CustomerAddressDeletePayload => {
  return {
    customerUserErrors:
      overrides && overrides.hasOwnProperty('customerUserErrors')
        ? overrides.customerUserErrors!
        : [aCustomerUserError()],
    deletedCustomerAddressId:
      overrides && overrides.hasOwnProperty('deletedCustomerAddressId')
        ? overrides.deletedCustomerAddressId!
        : 'in',
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCustomerAddressUpdatePayload = (
  overrides?: Partial<CustomerAddressUpdatePayload>,
): CustomerAddressUpdatePayload => {
  return {
    customerAddress:
      overrides && overrides.hasOwnProperty('customerAddress')
        ? overrides.customerAddress!
        : aMailingAddress(),
    customerUserErrors:
      overrides && overrides.hasOwnProperty('customerUserErrors')
        ? overrides.customerUserErrors!
        : [aCustomerUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCustomerCreateInput = (
  overrides?: Partial<CustomerCreateInput>,
): CustomerCreateInput => {
  return {
    acceptsMarketing:
      overrides && overrides.hasOwnProperty('acceptsMarketing')
        ? overrides.acceptsMarketing!
        : true,
    email:
      overrides && overrides.hasOwnProperty('email')
        ? overrides.email!
        : 'consequatur',
    firstName:
      overrides && overrides.hasOwnProperty('firstName')
        ? overrides.firstName!
        : 'iusto',
    lastName:
      overrides && overrides.hasOwnProperty('lastName')
        ? overrides.lastName!
        : 'recusandae',
    password:
      overrides && overrides.hasOwnProperty('password')
        ? overrides.password!
        : 'molestiae',
    phone:
      overrides && overrides.hasOwnProperty('phone') ? overrides.phone! : 'aut',
  }
}

export const aCustomerCreatePayload = (
  overrides?: Partial<CustomerCreatePayload>,
): CustomerCreatePayload => {
  return {
    customer:
      overrides && overrides.hasOwnProperty('customer')
        ? overrides.customer!
        : aCustomer(),
    customerUserErrors:
      overrides && overrides.hasOwnProperty('customerUserErrors')
        ? overrides.customerUserErrors!
        : [aCustomerUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCustomerDefaultAddressUpdatePayload = (
  overrides?: Partial<CustomerDefaultAddressUpdatePayload>,
): CustomerDefaultAddressUpdatePayload => {
  return {
    customer:
      overrides && overrides.hasOwnProperty('customer')
        ? overrides.customer!
        : aCustomer(),
    customerUserErrors:
      overrides && overrides.hasOwnProperty('customerUserErrors')
        ? overrides.customerUserErrors!
        : [aCustomerUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCustomerRecoverPayload = (
  overrides?: Partial<CustomerRecoverPayload>,
): CustomerRecoverPayload => {
  return {
    customerUserErrors:
      overrides && overrides.hasOwnProperty('customerUserErrors')
        ? overrides.customerUserErrors!
        : [aCustomerUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCustomerResetByUrlPayload = (
  overrides?: Partial<CustomerResetByUrlPayload>,
): CustomerResetByUrlPayload => {
  return {
    customer:
      overrides && overrides.hasOwnProperty('customer')
        ? overrides.customer!
        : aCustomer(),
    customerAccessToken:
      overrides && overrides.hasOwnProperty('customerAccessToken')
        ? overrides.customerAccessToken!
        : aCustomerAccessToken(),
    customerUserErrors:
      overrides && overrides.hasOwnProperty('customerUserErrors')
        ? overrides.customerUserErrors!
        : [aCustomerUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCustomerResetInput = (
  overrides?: Partial<CustomerResetInput>,
): CustomerResetInput => {
  return {
    password:
      overrides && overrides.hasOwnProperty('password')
        ? overrides.password!
        : 'consequatur',
    resetToken:
      overrides && overrides.hasOwnProperty('resetToken')
        ? overrides.resetToken!
        : 'culpa',
  }
}

export const aCustomerResetPayload = (
  overrides?: Partial<CustomerResetPayload>,
): CustomerResetPayload => {
  return {
    customer:
      overrides && overrides.hasOwnProperty('customer')
        ? overrides.customer!
        : aCustomer(),
    customerAccessToken:
      overrides && overrides.hasOwnProperty('customerAccessToken')
        ? overrides.customerAccessToken!
        : aCustomerAccessToken(),
    customerUserErrors:
      overrides && overrides.hasOwnProperty('customerUserErrors')
        ? overrides.customerUserErrors!
        : [aCustomerUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCustomerUpdateInput = (
  overrides?: Partial<CustomerUpdateInput>,
): CustomerUpdateInput => {
  return {
    acceptsMarketing:
      overrides && overrides.hasOwnProperty('acceptsMarketing')
        ? overrides.acceptsMarketing!
        : false,
    email:
      overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'aut',
    firstName:
      overrides && overrides.hasOwnProperty('firstName')
        ? overrides.firstName!
        : 'reiciendis',
    lastName:
      overrides && overrides.hasOwnProperty('lastName')
        ? overrides.lastName!
        : 'et',
    password:
      overrides && overrides.hasOwnProperty('password')
        ? overrides.password!
        : 'quas',
    phone:
      overrides && overrides.hasOwnProperty('phone')
        ? overrides.phone!
        : 'autem',
  }
}

export const aCustomerUpdatePayload = (
  overrides?: Partial<CustomerUpdatePayload>,
): CustomerUpdatePayload => {
  return {
    customer:
      overrides && overrides.hasOwnProperty('customer')
        ? overrides.customer!
        : aCustomer(),
    customerAccessToken:
      overrides && overrides.hasOwnProperty('customerAccessToken')
        ? overrides.customerAccessToken!
        : aCustomerAccessToken(),
    customerUserErrors:
      overrides && overrides.hasOwnProperty('customerUserErrors')
        ? overrides.customerUserErrors!
        : [aCustomerUserError()],
    userErrors:
      overrides && overrides.hasOwnProperty('userErrors')
        ? overrides.userErrors!
        : [aUserError()],
  }
}

export const aCustomerUserError = (
  overrides?: Partial<CustomerUserError>,
): CustomerUserError => {
  return {
    code:
      overrides && overrides.hasOwnProperty('code')
        ? overrides.code!
        : CustomerErrorCode.AlreadyEnabled,
    field:
      overrides && overrides.hasOwnProperty('field')
        ? overrides.field!
        : ['placeat'],
    message:
      overrides && overrides.hasOwnProperty('message')
        ? overrides.message!
        : 'impedit',
  }
}

export const aDiscountAllocation = (
  overrides?: Partial<DiscountAllocation>,
): DiscountAllocation => {
  return {
    allocatedAmount:
      overrides && overrides.hasOwnProperty('allocatedAmount')
        ? overrides.allocatedAmount!
        : aMoneyV2(),
    discountApplication:
      overrides && overrides.hasOwnProperty('discountApplication')
        ? overrides.discountApplication!
        : aDiscountApplication(),
  }
}

export const aDiscountApplication = (
  overrides?: Partial<DiscountApplication>,
): DiscountApplication => {
  return {
    allocationMethod:
      overrides && overrides.hasOwnProperty('allocationMethod')
        ? overrides.allocationMethod!
        : DiscountApplicationAllocationMethod.Across,
    targetSelection:
      overrides && overrides.hasOwnProperty('targetSelection')
        ? overrides.targetSelection!
        : DiscountApplicationTargetSelection.All,
    targetType:
      overrides && overrides.hasOwnProperty('targetType')
        ? overrides.targetType!
        : DiscountApplicationTargetType.LineItem,
    value:
      overrides && overrides.hasOwnProperty('value')
        ? overrides.value!
        : aMoneyV2(),
  }
}

export const aDiscountApplicationConnection = (
  overrides?: Partial<DiscountApplicationConnection>,
): DiscountApplicationConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [aDiscountApplicationEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const aDiscountApplicationEdge = (
  overrides?: Partial<DiscountApplicationEdge>,
): DiscountApplicationEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'est',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : aDiscountApplication(),
  }
}

export const aDiscountCodeApplication = (
  overrides?: Partial<DiscountCodeApplication>,
): DiscountCodeApplication => {
  return {
    allocationMethod:
      overrides && overrides.hasOwnProperty('allocationMethod')
        ? overrides.allocationMethod!
        : DiscountApplicationAllocationMethod.Across,
    applicable:
      overrides && overrides.hasOwnProperty('applicable')
        ? overrides.applicable!
        : true,
    code:
      overrides && overrides.hasOwnProperty('code') ? overrides.code! : 'autem',
    targetSelection:
      overrides && overrides.hasOwnProperty('targetSelection')
        ? overrides.targetSelection!
        : DiscountApplicationTargetSelection.All,
    targetType:
      overrides && overrides.hasOwnProperty('targetType')
        ? overrides.targetType!
        : DiscountApplicationTargetType.LineItem,
    value:
      overrides && overrides.hasOwnProperty('value')
        ? overrides.value!
        : aMoneyV2(),
  }
}

export const aDisplayableError = (
  overrides?: Partial<DisplayableError>,
): DisplayableError => {
  return {
    field:
      overrides && overrides.hasOwnProperty('field')
        ? overrides.field!
        : ['voluptatum'],
    message:
      overrides && overrides.hasOwnProperty('message')
        ? overrides.message!
        : 'neque',
  }
}

export const aDomain = (overrides?: Partial<Domain>): Domain => {
  return {
    host:
      overrides && overrides.hasOwnProperty('host')
        ? overrides.host!
        : 'repudiandae',
    sslEnabled:
      overrides && overrides.hasOwnProperty('sslEnabled')
        ? overrides.sslEnabled!
        : false,
    url:
      overrides && overrides.hasOwnProperty('url')
        ? overrides.url!
        : 'adipisci',
  }
}

export const anExternalVideo = (
  overrides?: Partial<ExternalVideo>,
): ExternalVideo => {
  return {
    alt: overrides && overrides.hasOwnProperty('alt') ? overrides.alt! : 'aut',
    embeddedUrl:
      overrides && overrides.hasOwnProperty('embeddedUrl')
        ? overrides.embeddedUrl!
        : 'quasi',
    host:
      overrides && overrides.hasOwnProperty('host')
        ? overrides.host!
        : MediaHost.Vimeo,
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '685da414-ac6e-4073-9b95-8c4de517ad1f',
    mediaContentType:
      overrides && overrides.hasOwnProperty('mediaContentType')
        ? overrides.mediaContentType!
        : MediaContentType.ExternalVideo,
    previewImage:
      overrides && overrides.hasOwnProperty('previewImage')
        ? overrides.previewImage!
        : anImage(),
  }
}

export const aFilter = (overrides?: Partial<Filter>): Filter => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'praesentium',
    label:
      overrides && overrides.hasOwnProperty('label')
        ? overrides.label!
        : 'rerum',
    type:
      overrides && overrides.hasOwnProperty('type')
        ? overrides.type!
        : FilterType.List,
    values:
      overrides && overrides.hasOwnProperty('values')
        ? overrides.values!
        : [aFilterValue()],
  }
}

export const aFilterValue = (overrides?: Partial<FilterValue>): FilterValue => {
  return {
    count:
      overrides && overrides.hasOwnProperty('count') ? overrides.count! : 3939,
    id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'tempore',
    input:
      overrides && overrides.hasOwnProperty('input')
        ? overrides.input!
        : 'ratione',
    label:
      overrides && overrides.hasOwnProperty('label')
        ? overrides.label!
        : 'minus',
  }
}

export const aFulfillment = (overrides?: Partial<Fulfillment>): Fulfillment => {
  return {
    fulfillmentLineItems:
      overrides && overrides.hasOwnProperty('fulfillmentLineItems')
        ? overrides.fulfillmentLineItems!
        : aFulfillmentLineItemConnection(),
    trackingCompany:
      overrides && overrides.hasOwnProperty('trackingCompany')
        ? overrides.trackingCompany!
        : 'sed',
    trackingInfo:
      overrides && overrides.hasOwnProperty('trackingInfo')
        ? overrides.trackingInfo!
        : [aFulfillmentTrackingInfo()],
  }
}

export const aFulfillmentLineItem = (
  overrides?: Partial<FulfillmentLineItem>,
): FulfillmentLineItem => {
  return {
    lineItem:
      overrides && overrides.hasOwnProperty('lineItem')
        ? overrides.lineItem!
        : anOrderLineItem(),
    quantity:
      overrides && overrides.hasOwnProperty('quantity')
        ? overrides.quantity!
        : 7497,
  }
}

export const aFulfillmentLineItemConnection = (
  overrides?: Partial<FulfillmentLineItemConnection>,
): FulfillmentLineItemConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [aFulfillmentLineItemEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const aFulfillmentLineItemEdge = (
  overrides?: Partial<FulfillmentLineItemEdge>,
): FulfillmentLineItemEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'consequatur',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : aFulfillmentLineItem(),
  }
}

export const aFulfillmentTrackingInfo = (
  overrides?: Partial<FulfillmentTrackingInfo>,
): FulfillmentTrackingInfo => {
  return {
    number:
      overrides && overrides.hasOwnProperty('number')
        ? overrides.number!
        : 'quis',
    url: overrides && overrides.hasOwnProperty('url') ? overrides.url! : 'enim',
  }
}

export const aGeoCoordinateInput = (
  overrides?: Partial<GeoCoordinateInput>,
): GeoCoordinateInput => {
  return {
    latitude:
      overrides && overrides.hasOwnProperty('latitude')
        ? overrides.latitude!
        : 9.45,
    longitude:
      overrides && overrides.hasOwnProperty('longitude')
        ? overrides.longitude!
        : 4.56,
  }
}

export const aHasMetafields = (
  overrides?: Partial<HasMetafields>,
): HasMetafields => {
  return {
    metafield:
      overrides && overrides.hasOwnProperty('metafield')
        ? overrides.metafield!
        : aMetafield(),
    metafields:
      overrides && overrides.hasOwnProperty('metafields')
        ? overrides.metafields!
        : aMetafieldConnection(),
  }
}

export const anImage = (overrides?: Partial<Image>): Image => {
  return {
    altText:
      overrides && overrides.hasOwnProperty('altText')
        ? overrides.altText!
        : 'cupiditate',
    height:
      overrides && overrides.hasOwnProperty('height')
        ? overrides.height!
        : 2258,
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '8cd950ba-96bb-470a-aecf-4194f25bbbb9',
    originalSrc:
      overrides && overrides.hasOwnProperty('originalSrc')
        ? overrides.originalSrc!
        : 'excepturi',
    src:
      overrides && overrides.hasOwnProperty('src') ? overrides.src! : 'velit',
    transformedSrc:
      overrides && overrides.hasOwnProperty('transformedSrc')
        ? overrides.transformedSrc!
        : 'rerum',
    url:
      overrides && overrides.hasOwnProperty('url') ? overrides.url! : 'rerum',
    width:
      overrides && overrides.hasOwnProperty('width') ? overrides.width! : 7195,
  }
}

export const anImageConnection = (
  overrides?: Partial<ImageConnection>,
): ImageConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [anImageEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const anImageEdge = (overrides?: Partial<ImageEdge>): ImageEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'nostrum',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : anImage(),
  }
}

export const anImageTransformInput = (
  overrides?: Partial<ImageTransformInput>,
): ImageTransformInput => {
  return {
    crop:
      overrides && overrides.hasOwnProperty('crop')
        ? overrides.crop!
        : CropRegion.Bottom,
    maxHeight:
      overrides && overrides.hasOwnProperty('maxHeight')
        ? overrides.maxHeight!
        : 1257,
    maxWidth:
      overrides && overrides.hasOwnProperty('maxWidth')
        ? overrides.maxWidth!
        : 6280,
    preferredContentType:
      overrides && overrides.hasOwnProperty('preferredContentType')
        ? overrides.preferredContentType!
        : ImageContentType.Jpg,
    scale:
      overrides && overrides.hasOwnProperty('scale') ? overrides.scale! : 4249,
  }
}

export const aLocalization = (
  overrides?: Partial<Localization>,
): Localization => {
  return {
    availableCountries:
      overrides && overrides.hasOwnProperty('availableCountries')
        ? overrides.availableCountries!
        : [aCountry()],
    country:
      overrides && overrides.hasOwnProperty('country')
        ? overrides.country!
        : aCountry(),
  }
}

export const aLocation = (overrides?: Partial<Location>): Location => {
  return {
    address:
      overrides && overrides.hasOwnProperty('address')
        ? overrides.address!
        : aLocationAddress(),
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'bfe52c08-bd42-41df-a3d4-364c80b41fe8',
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'optio',
  }
}

export const aLocationAddress = (
  overrides?: Partial<LocationAddress>,
): LocationAddress => {
  return {
    address1:
      overrides && overrides.hasOwnProperty('address1')
        ? overrides.address1!
        : 'ratione',
    address2:
      overrides && overrides.hasOwnProperty('address2')
        ? overrides.address2!
        : 'sit',
    city:
      overrides && overrides.hasOwnProperty('city') ? overrides.city! : 'sit',
    country:
      overrides && overrides.hasOwnProperty('country')
        ? overrides.country!
        : 'in',
    countryCode:
      overrides && overrides.hasOwnProperty('countryCode')
        ? overrides.countryCode!
        : 'ut',
    formatted:
      overrides && overrides.hasOwnProperty('formatted')
        ? overrides.formatted!
        : ['consequatur'],
    latitude:
      overrides && overrides.hasOwnProperty('latitude')
        ? overrides.latitude!
        : 7.86,
    longitude:
      overrides && overrides.hasOwnProperty('longitude')
        ? overrides.longitude!
        : 9.64,
    phone:
      overrides && overrides.hasOwnProperty('phone') ? overrides.phone! : 'sed',
    province:
      overrides && overrides.hasOwnProperty('province')
        ? overrides.province!
        : 'eos',
    provinceCode:
      overrides && overrides.hasOwnProperty('provinceCode')
        ? overrides.provinceCode!
        : 'minima',
    zip:
      overrides && overrides.hasOwnProperty('zip')
        ? overrides.zip!
        : 'laboriosam',
  }
}

export const aLocationConnection = (
  overrides?: Partial<LocationConnection>,
): LocationConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [aLocationEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const aLocationEdge = (
  overrides?: Partial<LocationEdge>,
): LocationEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'illum',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : aLocation(),
  }
}

export const aMailingAddress = (
  overrides?: Partial<MailingAddress>,
): MailingAddress => {
  return {
    address1:
      overrides && overrides.hasOwnProperty('address1')
        ? overrides.address1!
        : 'in',
    address2:
      overrides && overrides.hasOwnProperty('address2')
        ? overrides.address2!
        : 'rerum',
    city:
      overrides && overrides.hasOwnProperty('city') ? overrides.city! : 'omnis',
    company:
      overrides && overrides.hasOwnProperty('company')
        ? overrides.company!
        : 'temporibus',
    country:
      overrides && overrides.hasOwnProperty('country')
        ? overrides.country!
        : 'quo',
    countryCode:
      overrides && overrides.hasOwnProperty('countryCode')
        ? overrides.countryCode!
        : 'ea',
    countryCodeV2:
      overrides && overrides.hasOwnProperty('countryCodeV2')
        ? overrides.countryCodeV2!
        : CountryCode.Ac,
    firstName:
      overrides && overrides.hasOwnProperty('firstName')
        ? overrides.firstName!
        : 'sit',
    formatted:
      overrides && overrides.hasOwnProperty('formatted')
        ? overrides.formatted!
        : ['nostrum'],
    formattedArea:
      overrides && overrides.hasOwnProperty('formattedArea')
        ? overrides.formattedArea!
        : 'quidem',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'e1846e95-ce7f-47da-b20f-b6f88a1c7eea',
    lastName:
      overrides && overrides.hasOwnProperty('lastName')
        ? overrides.lastName!
        : 'maiores',
    latitude:
      overrides && overrides.hasOwnProperty('latitude')
        ? overrides.latitude!
        : 7.06,
    longitude:
      overrides && overrides.hasOwnProperty('longitude')
        ? overrides.longitude!
        : 7.02,
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'illum',
    phone:
      overrides && overrides.hasOwnProperty('phone') ? overrides.phone! : 'est',
    province:
      overrides && overrides.hasOwnProperty('province')
        ? overrides.province!
        : 'tempora',
    provinceCode:
      overrides && overrides.hasOwnProperty('provinceCode')
        ? overrides.provinceCode!
        : 'incidunt',
    zip:
      overrides && overrides.hasOwnProperty('zip') ? overrides.zip! : 'culpa',
  }
}

export const aMailingAddressConnection = (
  overrides?: Partial<MailingAddressConnection>,
): MailingAddressConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [aMailingAddressEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const aMailingAddressEdge = (
  overrides?: Partial<MailingAddressEdge>,
): MailingAddressEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'consequuntur',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : aMailingAddress(),
  }
}

export const aMailingAddressInput = (
  overrides?: Partial<MailingAddressInput>,
): MailingAddressInput => {
  return {
    address1:
      overrides && overrides.hasOwnProperty('address1')
        ? overrides.address1!
        : 'qui',
    address2:
      overrides && overrides.hasOwnProperty('address2')
        ? overrides.address2!
        : 'nihil',
    city:
      overrides && overrides.hasOwnProperty('city')
        ? overrides.city!
        : 'aliquam',
    company:
      overrides && overrides.hasOwnProperty('company')
        ? overrides.company!
        : 'quod',
    country:
      overrides && overrides.hasOwnProperty('country')
        ? overrides.country!
        : 'facere',
    firstName:
      overrides && overrides.hasOwnProperty('firstName')
        ? overrides.firstName!
        : 'quam',
    lastName:
      overrides && overrides.hasOwnProperty('lastName')
        ? overrides.lastName!
        : 'tenetur',
    phone:
      overrides && overrides.hasOwnProperty('phone')
        ? overrides.phone!
        : 'tenetur',
    province:
      overrides && overrides.hasOwnProperty('province')
        ? overrides.province!
        : 'velit',
    zip:
      overrides && overrides.hasOwnProperty('zip') ? overrides.zip! : 'commodi',
  }
}

export const aManualDiscountApplication = (
  overrides?: Partial<ManualDiscountApplication>,
): ManualDiscountApplication => {
  return {
    allocationMethod:
      overrides && overrides.hasOwnProperty('allocationMethod')
        ? overrides.allocationMethod!
        : DiscountApplicationAllocationMethod.Across,
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'vel',
    targetSelection:
      overrides && overrides.hasOwnProperty('targetSelection')
        ? overrides.targetSelection!
        : DiscountApplicationTargetSelection.All,
    targetType:
      overrides && overrides.hasOwnProperty('targetType')
        ? overrides.targetType!
        : DiscountApplicationTargetType.LineItem,
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : 'quia',
    value:
      overrides && overrides.hasOwnProperty('value')
        ? overrides.value!
        : aMoneyV2(),
  }
}

export const aMedia = (overrides?: Partial<Media>): Media => {
  return {
    alt: overrides && overrides.hasOwnProperty('alt') ? overrides.alt! : 'unde',
    mediaContentType:
      overrides && overrides.hasOwnProperty('mediaContentType')
        ? overrides.mediaContentType!
        : MediaContentType.ExternalVideo,
    previewImage:
      overrides && overrides.hasOwnProperty('previewImage')
        ? overrides.previewImage!
        : anImage(),
  }
}

export const aMediaConnection = (
  overrides?: Partial<MediaConnection>,
): MediaConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [aMediaEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const aMediaEdge = (overrides?: Partial<MediaEdge>): MediaEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'est',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : aMedia(),
  }
}

export const aMediaImage = (overrides?: Partial<MediaImage>): MediaImage => {
  return {
    alt:
      overrides && overrides.hasOwnProperty('alt') ? overrides.alt! : 'minus',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '40c2653e-1d86-43e5-ab7d-da4b37381001',
    image:
      overrides && overrides.hasOwnProperty('image')
        ? overrides.image!
        : anImage(),
    mediaContentType:
      overrides && overrides.hasOwnProperty('mediaContentType')
        ? overrides.mediaContentType!
        : MediaContentType.ExternalVideo,
    previewImage:
      overrides && overrides.hasOwnProperty('previewImage')
        ? overrides.previewImage!
        : anImage(),
  }
}

export const aMetafield = (overrides?: Partial<Metafield>): Metafield => {
  return {
    createdAt:
      overrides && overrides.hasOwnProperty('createdAt')
        ? overrides.createdAt!
        : 'sed',
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'optio',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'c2328944-845b-4b20-874b-cc7e306e2e66',
    key:
      overrides && overrides.hasOwnProperty('key') ? overrides.key! : 'tenetur',
    namespace:
      overrides && overrides.hasOwnProperty('namespace')
        ? overrides.namespace!
        : 'molestiae',
    parentResource:
      overrides && overrides.hasOwnProperty('parentResource')
        ? overrides.parentResource!
        : anArticle(),
    reference:
      overrides && overrides.hasOwnProperty('reference')
        ? overrides.reference!
        : aMediaImage(),
    type:
      overrides && overrides.hasOwnProperty('type')
        ? overrides.type!
        : 'beatae',
    updatedAt:
      overrides && overrides.hasOwnProperty('updatedAt')
        ? overrides.updatedAt!
        : 'ea',
    value:
      overrides && overrides.hasOwnProperty('value')
        ? overrides.value!
        : 'incidunt',
  }
}

export const aMetafieldConnection = (
  overrides?: Partial<MetafieldConnection>,
): MetafieldConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [aMetafieldEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const aMetafieldEdge = (
  overrides?: Partial<MetafieldEdge>,
): MetafieldEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'perspiciatis',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : aMetafield(),
  }
}

export const aMetafieldFilter = (
  overrides?: Partial<MetafieldFilter>,
): MetafieldFilter => {
  return {
    key: overrides && overrides.hasOwnProperty('key') ? overrides.key! : 'quam',
    namespace:
      overrides && overrides.hasOwnProperty('namespace')
        ? overrides.namespace!
        : 'et',
    value:
      overrides && overrides.hasOwnProperty('value')
        ? overrides.value!
        : 'corporis',
  }
}

export const aModel3d = (overrides?: Partial<Model3d>): Model3d => {
  return {
    alt: overrides && overrides.hasOwnProperty('alt') ? overrides.alt! : 'sunt',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'e92285e3-f4a0-4a21-b60a-ed17a0837390',
    mediaContentType:
      overrides && overrides.hasOwnProperty('mediaContentType')
        ? overrides.mediaContentType!
        : MediaContentType.ExternalVideo,
    previewImage:
      overrides && overrides.hasOwnProperty('previewImage')
        ? overrides.previewImage!
        : anImage(),
    sources:
      overrides && overrides.hasOwnProperty('sources')
        ? overrides.sources!
        : [aModel3dSource()],
  }
}

export const aModel3dSource = (
  overrides?: Partial<Model3dSource>,
): Model3dSource => {
  return {
    filesize:
      overrides && overrides.hasOwnProperty('filesize')
        ? overrides.filesize!
        : 1698,
    format:
      overrides && overrides.hasOwnProperty('format')
        ? overrides.format!
        : 'deleniti',
    mimeType:
      overrides && overrides.hasOwnProperty('mimeType')
        ? overrides.mimeType!
        : 'aspernatur',
    url:
      overrides && overrides.hasOwnProperty('url') ? overrides.url! : 'sequi',
  }
}

export const aMoneyInput = (overrides?: Partial<MoneyInput>): MoneyInput => {
  return {
    amount:
      overrides && overrides.hasOwnProperty('amount')
        ? overrides.amount!
        : 'eaque',
    currencyCode:
      overrides && overrides.hasOwnProperty('currencyCode')
        ? overrides.currencyCode!
        : CurrencyCode.Aed,
  }
}

export const aMoneyV2 = (overrides?: Partial<MoneyV2>): MoneyV2 => {
  return {
    amount:
      overrides && overrides.hasOwnProperty('amount')
        ? overrides.amount!
        : 'impedit',
    currencyCode:
      overrides && overrides.hasOwnProperty('currencyCode')
        ? overrides.currencyCode!
        : CurrencyCode.Aed,
  }
}

export const aMutation = (overrides?: Partial<Mutation>): Mutation => {
  return {
    cartAttributesUpdate:
      overrides && overrides.hasOwnProperty('cartAttributesUpdate')
        ? overrides.cartAttributesUpdate!
        : aCartAttributesUpdatePayload(),
    cartBuyerIdentityUpdate:
      overrides && overrides.hasOwnProperty('cartBuyerIdentityUpdate')
        ? overrides.cartBuyerIdentityUpdate!
        : aCartBuyerIdentityUpdatePayload(),
    cartCreate:
      overrides && overrides.hasOwnProperty('cartCreate')
        ? overrides.cartCreate!
        : aCartCreatePayload(),
    cartDiscountCodesUpdate:
      overrides && overrides.hasOwnProperty('cartDiscountCodesUpdate')
        ? overrides.cartDiscountCodesUpdate!
        : aCartDiscountCodesUpdatePayload(),
    cartLinesAdd:
      overrides && overrides.hasOwnProperty('cartLinesAdd')
        ? overrides.cartLinesAdd!
        : aCartLinesAddPayload(),
    cartLinesRemove:
      overrides && overrides.hasOwnProperty('cartLinesRemove')
        ? overrides.cartLinesRemove!
        : aCartLinesRemovePayload(),
    cartLinesUpdate:
      overrides && overrides.hasOwnProperty('cartLinesUpdate')
        ? overrides.cartLinesUpdate!
        : aCartLinesUpdatePayload(),
    cartNoteUpdate:
      overrides && overrides.hasOwnProperty('cartNoteUpdate')
        ? overrides.cartNoteUpdate!
        : aCartNoteUpdatePayload(),
    checkoutAttributesUpdate:
      overrides && overrides.hasOwnProperty('checkoutAttributesUpdate')
        ? overrides.checkoutAttributesUpdate!
        : aCheckoutAttributesUpdatePayload(),
    checkoutAttributesUpdateV2:
      overrides && overrides.hasOwnProperty('checkoutAttributesUpdateV2')
        ? overrides.checkoutAttributesUpdateV2!
        : aCheckoutAttributesUpdateV2Payload(),
    checkoutCompleteFree:
      overrides && overrides.hasOwnProperty('checkoutCompleteFree')
        ? overrides.checkoutCompleteFree!
        : aCheckoutCompleteFreePayload(),
    checkoutCompleteWithCreditCard:
      overrides && overrides.hasOwnProperty('checkoutCompleteWithCreditCard')
        ? overrides.checkoutCompleteWithCreditCard!
        : aCheckoutCompleteWithCreditCardPayload(),
    checkoutCompleteWithCreditCardV2:
      overrides && overrides.hasOwnProperty('checkoutCompleteWithCreditCardV2')
        ? overrides.checkoutCompleteWithCreditCardV2!
        : aCheckoutCompleteWithCreditCardV2Payload(),
    checkoutCompleteWithTokenizedPayment:
      overrides &&
      overrides.hasOwnProperty('checkoutCompleteWithTokenizedPayment')
        ? overrides.checkoutCompleteWithTokenizedPayment!
        : aCheckoutCompleteWithTokenizedPaymentPayload(),
    checkoutCompleteWithTokenizedPaymentV2:
      overrides &&
      overrides.hasOwnProperty('checkoutCompleteWithTokenizedPaymentV2')
        ? overrides.checkoutCompleteWithTokenizedPaymentV2!
        : aCheckoutCompleteWithTokenizedPaymentV2Payload(),
    checkoutCompleteWithTokenizedPaymentV3:
      overrides &&
      overrides.hasOwnProperty('checkoutCompleteWithTokenizedPaymentV3')
        ? overrides.checkoutCompleteWithTokenizedPaymentV3!
        : aCheckoutCompleteWithTokenizedPaymentV3Payload(),
    checkoutCreate:
      overrides && overrides.hasOwnProperty('checkoutCreate')
        ? overrides.checkoutCreate!
        : aCheckoutCreatePayload(),
    checkoutCustomerAssociate:
      overrides && overrides.hasOwnProperty('checkoutCustomerAssociate')
        ? overrides.checkoutCustomerAssociate!
        : aCheckoutCustomerAssociatePayload(),
    checkoutCustomerAssociateV2:
      overrides && overrides.hasOwnProperty('checkoutCustomerAssociateV2')
        ? overrides.checkoutCustomerAssociateV2!
        : aCheckoutCustomerAssociateV2Payload(),
    checkoutCustomerDisassociate:
      overrides && overrides.hasOwnProperty('checkoutCustomerDisassociate')
        ? overrides.checkoutCustomerDisassociate!
        : aCheckoutCustomerDisassociatePayload(),
    checkoutCustomerDisassociateV2:
      overrides && overrides.hasOwnProperty('checkoutCustomerDisassociateV2')
        ? overrides.checkoutCustomerDisassociateV2!
        : aCheckoutCustomerDisassociateV2Payload(),
    checkoutDiscountCodeApply:
      overrides && overrides.hasOwnProperty('checkoutDiscountCodeApply')
        ? overrides.checkoutDiscountCodeApply!
        : aCheckoutDiscountCodeApplyPayload(),
    checkoutDiscountCodeApplyV2:
      overrides && overrides.hasOwnProperty('checkoutDiscountCodeApplyV2')
        ? overrides.checkoutDiscountCodeApplyV2!
        : aCheckoutDiscountCodeApplyV2Payload(),
    checkoutDiscountCodeRemove:
      overrides && overrides.hasOwnProperty('checkoutDiscountCodeRemove')
        ? overrides.checkoutDiscountCodeRemove!
        : aCheckoutDiscountCodeRemovePayload(),
    checkoutEmailUpdate:
      overrides && overrides.hasOwnProperty('checkoutEmailUpdate')
        ? overrides.checkoutEmailUpdate!
        : aCheckoutEmailUpdatePayload(),
    checkoutEmailUpdateV2:
      overrides && overrides.hasOwnProperty('checkoutEmailUpdateV2')
        ? overrides.checkoutEmailUpdateV2!
        : aCheckoutEmailUpdateV2Payload(),
    checkoutGiftCardApply:
      overrides && overrides.hasOwnProperty('checkoutGiftCardApply')
        ? overrides.checkoutGiftCardApply!
        : aCheckoutGiftCardApplyPayload(),
    checkoutGiftCardRemove:
      overrides && overrides.hasOwnProperty('checkoutGiftCardRemove')
        ? overrides.checkoutGiftCardRemove!
        : aCheckoutGiftCardRemovePayload(),
    checkoutGiftCardRemoveV2:
      overrides && overrides.hasOwnProperty('checkoutGiftCardRemoveV2')
        ? overrides.checkoutGiftCardRemoveV2!
        : aCheckoutGiftCardRemoveV2Payload(),
    checkoutGiftCardsAppend:
      overrides && overrides.hasOwnProperty('checkoutGiftCardsAppend')
        ? overrides.checkoutGiftCardsAppend!
        : aCheckoutGiftCardsAppendPayload(),
    checkoutLineItemsAdd:
      overrides && overrides.hasOwnProperty('checkoutLineItemsAdd')
        ? overrides.checkoutLineItemsAdd!
        : aCheckoutLineItemsAddPayload(),
    checkoutLineItemsRemove:
      overrides && overrides.hasOwnProperty('checkoutLineItemsRemove')
        ? overrides.checkoutLineItemsRemove!
        : aCheckoutLineItemsRemovePayload(),
    checkoutLineItemsReplace:
      overrides && overrides.hasOwnProperty('checkoutLineItemsReplace')
        ? overrides.checkoutLineItemsReplace!
        : aCheckoutLineItemsReplacePayload(),
    checkoutLineItemsUpdate:
      overrides && overrides.hasOwnProperty('checkoutLineItemsUpdate')
        ? overrides.checkoutLineItemsUpdate!
        : aCheckoutLineItemsUpdatePayload(),
    checkoutShippingAddressUpdate:
      overrides && overrides.hasOwnProperty('checkoutShippingAddressUpdate')
        ? overrides.checkoutShippingAddressUpdate!
        : aCheckoutShippingAddressUpdatePayload(),
    checkoutShippingAddressUpdateV2:
      overrides && overrides.hasOwnProperty('checkoutShippingAddressUpdateV2')
        ? overrides.checkoutShippingAddressUpdateV2!
        : aCheckoutShippingAddressUpdateV2Payload(),
    checkoutShippingLineUpdate:
      overrides && overrides.hasOwnProperty('checkoutShippingLineUpdate')
        ? overrides.checkoutShippingLineUpdate!
        : aCheckoutShippingLineUpdatePayload(),
    customerAccessTokenCreate:
      overrides && overrides.hasOwnProperty('customerAccessTokenCreate')
        ? overrides.customerAccessTokenCreate!
        : aCustomerAccessTokenCreatePayload(),
    customerAccessTokenCreateWithMultipass:
      overrides &&
      overrides.hasOwnProperty('customerAccessTokenCreateWithMultipass')
        ? overrides.customerAccessTokenCreateWithMultipass!
        : aCustomerAccessTokenCreateWithMultipassPayload(),
    customerAccessTokenDelete:
      overrides && overrides.hasOwnProperty('customerAccessTokenDelete')
        ? overrides.customerAccessTokenDelete!
        : aCustomerAccessTokenDeletePayload(),
    customerAccessTokenRenew:
      overrides && overrides.hasOwnProperty('customerAccessTokenRenew')
        ? overrides.customerAccessTokenRenew!
        : aCustomerAccessTokenRenewPayload(),
    customerActivate:
      overrides && overrides.hasOwnProperty('customerActivate')
        ? overrides.customerActivate!
        : aCustomerActivatePayload(),
    customerActivateByUrl:
      overrides && overrides.hasOwnProperty('customerActivateByUrl')
        ? overrides.customerActivateByUrl!
        : aCustomerActivateByUrlPayload(),
    customerAddressCreate:
      overrides && overrides.hasOwnProperty('customerAddressCreate')
        ? overrides.customerAddressCreate!
        : aCustomerAddressCreatePayload(),
    customerAddressDelete:
      overrides && overrides.hasOwnProperty('customerAddressDelete')
        ? overrides.customerAddressDelete!
        : aCustomerAddressDeletePayload(),
    customerAddressUpdate:
      overrides && overrides.hasOwnProperty('customerAddressUpdate')
        ? overrides.customerAddressUpdate!
        : aCustomerAddressUpdatePayload(),
    customerCreate:
      overrides && overrides.hasOwnProperty('customerCreate')
        ? overrides.customerCreate!
        : aCustomerCreatePayload(),
    customerDefaultAddressUpdate:
      overrides && overrides.hasOwnProperty('customerDefaultAddressUpdate')
        ? overrides.customerDefaultAddressUpdate!
        : aCustomerDefaultAddressUpdatePayload(),
    customerRecover:
      overrides && overrides.hasOwnProperty('customerRecover')
        ? overrides.customerRecover!
        : aCustomerRecoverPayload(),
    customerReset:
      overrides && overrides.hasOwnProperty('customerReset')
        ? overrides.customerReset!
        : aCustomerResetPayload(),
    customerResetByUrl:
      overrides && overrides.hasOwnProperty('customerResetByUrl')
        ? overrides.customerResetByUrl!
        : aCustomerResetByUrlPayload(),
    customerUpdate:
      overrides && overrides.hasOwnProperty('customerUpdate')
        ? overrides.customerUpdate!
        : aCustomerUpdatePayload(),
  }
}

export const aNode = (overrides?: Partial<Node>): Node => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '95bb2f34-6c86-495f-bfdc-f25b025cdba5',
  }
}

export const anOnlineStorePublishable = (
  overrides?: Partial<OnlineStorePublishable>,
): OnlineStorePublishable => {
  return {
    onlineStoreUrl:
      overrides && overrides.hasOwnProperty('onlineStoreUrl')
        ? overrides.onlineStoreUrl!
        : 'molestiae',
  }
}

export const anOrder = (overrides?: Partial<Order>): Order => {
  return {
    cancelReason:
      overrides && overrides.hasOwnProperty('cancelReason')
        ? overrides.cancelReason!
        : OrderCancelReason.Customer,
    canceledAt:
      overrides && overrides.hasOwnProperty('canceledAt')
        ? overrides.canceledAt!
        : 'optio',
    currencyCode:
      overrides && overrides.hasOwnProperty('currencyCode')
        ? overrides.currencyCode!
        : CurrencyCode.Aed,
    currentSubtotalPrice:
      overrides && overrides.hasOwnProperty('currentSubtotalPrice')
        ? overrides.currentSubtotalPrice!
        : aMoneyV2(),
    currentTotalDuties:
      overrides && overrides.hasOwnProperty('currentTotalDuties')
        ? overrides.currentTotalDuties!
        : aMoneyV2(),
    currentTotalPrice:
      overrides && overrides.hasOwnProperty('currentTotalPrice')
        ? overrides.currentTotalPrice!
        : aMoneyV2(),
    currentTotalTax:
      overrides && overrides.hasOwnProperty('currentTotalTax')
        ? overrides.currentTotalTax!
        : aMoneyV2(),
    customerLocale:
      overrides && overrides.hasOwnProperty('customerLocale')
        ? overrides.customerLocale!
        : 'ut',
    customerUrl:
      overrides && overrides.hasOwnProperty('customerUrl')
        ? overrides.customerUrl!
        : 'sed',
    discountApplications:
      overrides && overrides.hasOwnProperty('discountApplications')
        ? overrides.discountApplications!
        : aDiscountApplicationConnection(),
    edited:
      overrides && overrides.hasOwnProperty('edited')
        ? overrides.edited!
        : true,
    email:
      overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'id',
    financialStatus:
      overrides && overrides.hasOwnProperty('financialStatus')
        ? overrides.financialStatus!
        : OrderFinancialStatus.Authorized,
    fulfillmentStatus:
      overrides && overrides.hasOwnProperty('fulfillmentStatus')
        ? overrides.fulfillmentStatus!
        : OrderFulfillmentStatus.Fulfilled,
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '9614fc2f-1dc8-4b20-94e9-ff966e8bfd93',
    lineItems:
      overrides && overrides.hasOwnProperty('lineItems')
        ? overrides.lineItems!
        : anOrderLineItemConnection(),
    metafield:
      overrides && overrides.hasOwnProperty('metafield')
        ? overrides.metafield!
        : aMetafield(),
    metafields:
      overrides && overrides.hasOwnProperty('metafields')
        ? overrides.metafields!
        : aMetafieldConnection(),
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : 'repellat',
    orderNumber:
      overrides && overrides.hasOwnProperty('orderNumber')
        ? overrides.orderNumber!
        : 4799,
    originalTotalDuties:
      overrides && overrides.hasOwnProperty('originalTotalDuties')
        ? overrides.originalTotalDuties!
        : aMoneyV2(),
    originalTotalPrice:
      overrides && overrides.hasOwnProperty('originalTotalPrice')
        ? overrides.originalTotalPrice!
        : aMoneyV2(),
    phone:
      overrides && overrides.hasOwnProperty('phone')
        ? overrides.phone!
        : 'inventore',
    processedAt:
      overrides && overrides.hasOwnProperty('processedAt')
        ? overrides.processedAt!
        : 'perspiciatis',
    shippingAddress:
      overrides && overrides.hasOwnProperty('shippingAddress')
        ? overrides.shippingAddress!
        : aMailingAddress(),
    shippingDiscountAllocations:
      overrides && overrides.hasOwnProperty('shippingDiscountAllocations')
        ? overrides.shippingDiscountAllocations!
        : [aDiscountAllocation()],
    statusUrl:
      overrides && overrides.hasOwnProperty('statusUrl')
        ? overrides.statusUrl!
        : 'ipsa',
    subtotalPrice:
      overrides && overrides.hasOwnProperty('subtotalPrice')
        ? overrides.subtotalPrice!
        : 'a',
    subtotalPriceV2:
      overrides && overrides.hasOwnProperty('subtotalPriceV2')
        ? overrides.subtotalPriceV2!
        : aMoneyV2(),
    successfulFulfillments:
      overrides && overrides.hasOwnProperty('successfulFulfillments')
        ? overrides.successfulFulfillments!
        : [aFulfillment()],
    totalPrice:
      overrides && overrides.hasOwnProperty('totalPrice')
        ? overrides.totalPrice!
        : 'voluptatem',
    totalPriceV2:
      overrides && overrides.hasOwnProperty('totalPriceV2')
        ? overrides.totalPriceV2!
        : aMoneyV2(),
    totalRefunded:
      overrides && overrides.hasOwnProperty('totalRefunded')
        ? overrides.totalRefunded!
        : 'officiis',
    totalRefundedV2:
      overrides && overrides.hasOwnProperty('totalRefundedV2')
        ? overrides.totalRefundedV2!
        : aMoneyV2(),
    totalShippingPrice:
      overrides && overrides.hasOwnProperty('totalShippingPrice')
        ? overrides.totalShippingPrice!
        : 'quia',
    totalShippingPriceV2:
      overrides && overrides.hasOwnProperty('totalShippingPriceV2')
        ? overrides.totalShippingPriceV2!
        : aMoneyV2(),
    totalTax:
      overrides && overrides.hasOwnProperty('totalTax')
        ? overrides.totalTax!
        : 'corrupti',
    totalTaxV2:
      overrides && overrides.hasOwnProperty('totalTaxV2')
        ? overrides.totalTaxV2!
        : aMoneyV2(),
  }
}

export const anOrderConnection = (
  overrides?: Partial<OrderConnection>,
): OrderConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [anOrderEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const anOrderEdge = (overrides?: Partial<OrderEdge>): OrderEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'dolore',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : anOrder(),
  }
}

export const anOrderLineItem = (
  overrides?: Partial<OrderLineItem>,
): OrderLineItem => {
  return {
    currentQuantity:
      overrides && overrides.hasOwnProperty('currentQuantity')
        ? overrides.currentQuantity!
        : 6668,
    customAttributes:
      overrides && overrides.hasOwnProperty('customAttributes')
        ? overrides.customAttributes!
        : [anAttribute()],
    discountAllocations:
      overrides && overrides.hasOwnProperty('discountAllocations')
        ? overrides.discountAllocations!
        : [aDiscountAllocation()],
    discountedTotalPrice:
      overrides && overrides.hasOwnProperty('discountedTotalPrice')
        ? overrides.discountedTotalPrice!
        : aMoneyV2(),
    originalTotalPrice:
      overrides && overrides.hasOwnProperty('originalTotalPrice')
        ? overrides.originalTotalPrice!
        : aMoneyV2(),
    quantity:
      overrides && overrides.hasOwnProperty('quantity')
        ? overrides.quantity!
        : 6047,
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : 'illo',
    variant:
      overrides && overrides.hasOwnProperty('variant')
        ? overrides.variant!
        : aProductVariant(),
  }
}

export const anOrderLineItemConnection = (
  overrides?: Partial<OrderLineItemConnection>,
): OrderLineItemConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [anOrderLineItemEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const anOrderLineItemEdge = (
  overrides?: Partial<OrderLineItemEdge>,
): OrderLineItemEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'numquam',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : anOrderLineItem(),
  }
}

export const aPage = (overrides?: Partial<Page>): Page => {
  return {
    body:
      overrides && overrides.hasOwnProperty('body') ? overrides.body! : 'et',
    bodySummary:
      overrides && overrides.hasOwnProperty('bodySummary')
        ? overrides.bodySummary!
        : 'cum',
    createdAt:
      overrides && overrides.hasOwnProperty('createdAt')
        ? overrides.createdAt!
        : 'quae',
    handle:
      overrides && overrides.hasOwnProperty('handle')
        ? overrides.handle!
        : 'ut',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'e5182741-96b2-4214-b510-cbc3bfc2a674',
    metafield:
      overrides && overrides.hasOwnProperty('metafield')
        ? overrides.metafield!
        : aMetafield(),
    metafields:
      overrides && overrides.hasOwnProperty('metafields')
        ? overrides.metafields!
        : aMetafieldConnection(),
    onlineStoreUrl:
      overrides && overrides.hasOwnProperty('onlineStoreUrl')
        ? overrides.onlineStoreUrl!
        : 'eligendi',
    seo: overrides && overrides.hasOwnProperty('seo') ? overrides.seo! : aSeo(),
    title:
      overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'vel',
    updatedAt:
      overrides && overrides.hasOwnProperty('updatedAt')
        ? overrides.updatedAt!
        : 'optio',
  }
}

export const aPageConnection = (
  overrides?: Partial<PageConnection>,
): PageConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [aPageEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const aPageEdge = (overrides?: Partial<PageEdge>): PageEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'in',
    node:
      overrides && overrides.hasOwnProperty('node') ? overrides.node! : aPage(),
  }
}

export const aPageInfo = (overrides?: Partial<PageInfo>): PageInfo => {
  return {
    hasNextPage:
      overrides && overrides.hasOwnProperty('hasNextPage')
        ? overrides.hasNextPage!
        : true,
    hasPreviousPage:
      overrides && overrides.hasOwnProperty('hasPreviousPage')
        ? overrides.hasPreviousPage!
        : false,
  }
}

export const aPayment = (overrides?: Partial<Payment>): Payment => {
  return {
    amount:
      overrides && overrides.hasOwnProperty('amount')
        ? overrides.amount!
        : 'suscipit',
    amountV2:
      overrides && overrides.hasOwnProperty('amountV2')
        ? overrides.amountV2!
        : aMoneyV2(),
    billingAddress:
      overrides && overrides.hasOwnProperty('billingAddress')
        ? overrides.billingAddress!
        : aMailingAddress(),
    checkout:
      overrides && overrides.hasOwnProperty('checkout')
        ? overrides.checkout!
        : aCheckout(),
    creditCard:
      overrides && overrides.hasOwnProperty('creditCard')
        ? overrides.creditCard!
        : aCreditCard(),
    errorMessage:
      overrides && overrides.hasOwnProperty('errorMessage')
        ? overrides.errorMessage!
        : 'dolor',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '3800b70b-eb5d-463e-9112-5456f44560c8',
    idempotencyKey:
      overrides && overrides.hasOwnProperty('idempotencyKey')
        ? overrides.idempotencyKey!
        : 'cumque',
    nextActionUrl:
      overrides && overrides.hasOwnProperty('nextActionUrl')
        ? overrides.nextActionUrl!
        : 'rerum',
    ready:
      overrides && overrides.hasOwnProperty('ready') ? overrides.ready! : true,
    test:
      overrides && overrides.hasOwnProperty('test') ? overrides.test! : true,
    transaction:
      overrides && overrides.hasOwnProperty('transaction')
        ? overrides.transaction!
        : aTransaction(),
  }
}

export const aPaymentSettings = (
  overrides?: Partial<PaymentSettings>,
): PaymentSettings => {
  return {
    acceptedCardBrands:
      overrides && overrides.hasOwnProperty('acceptedCardBrands')
        ? overrides.acceptedCardBrands!
        : [CardBrand.AmericanExpress],
    cardVaultUrl:
      overrides && overrides.hasOwnProperty('cardVaultUrl')
        ? overrides.cardVaultUrl!
        : 'facilis',
    countryCode:
      overrides && overrides.hasOwnProperty('countryCode')
        ? overrides.countryCode!
        : CountryCode.Ac,
    currencyCode:
      overrides && overrides.hasOwnProperty('currencyCode')
        ? overrides.currencyCode!
        : CurrencyCode.Aed,
    enabledPresentmentCurrencies:
      overrides && overrides.hasOwnProperty('enabledPresentmentCurrencies')
        ? overrides.enabledPresentmentCurrencies!
        : [CurrencyCode.Aed],
    shopifyPaymentsAccountId:
      overrides && overrides.hasOwnProperty('shopifyPaymentsAccountId')
        ? overrides.shopifyPaymentsAccountId!
        : 'doloremque',
    supportedDigitalWallets:
      overrides && overrides.hasOwnProperty('supportedDigitalWallets')
        ? overrides.supportedDigitalWallets!
        : [DigitalWallet.AndroidPay],
  }
}

export const aPriceRangeFilter = (
  overrides?: Partial<PriceRangeFilter>,
): PriceRangeFilter => {
  return {
    max: overrides && overrides.hasOwnProperty('max') ? overrides.max! : 0.75,
    min: overrides && overrides.hasOwnProperty('min') ? overrides.min! : 6.83,
  }
}

export const aPricingPercentageValue = (
  overrides?: Partial<PricingPercentageValue>,
): PricingPercentageValue => {
  return {
    percentage:
      overrides && overrides.hasOwnProperty('percentage')
        ? overrides.percentage!
        : 8.64,
  }
}

export const aProduct = (overrides?: Partial<Product>): Product => {
  return {
    availableForSale:
      overrides && overrides.hasOwnProperty('availableForSale')
        ? overrides.availableForSale!
        : false,
    collections:
      overrides && overrides.hasOwnProperty('collections')
        ? overrides.collections!
        : aCollectionConnection(),
    compareAtPriceRange:
      overrides && overrides.hasOwnProperty('compareAtPriceRange')
        ? overrides.compareAtPriceRange!
        : aProductPriceRange(),
    createdAt:
      overrides && overrides.hasOwnProperty('createdAt')
        ? overrides.createdAt!
        : 'itaque',
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'qui',
    descriptionHtml:
      overrides && overrides.hasOwnProperty('descriptionHtml')
        ? overrides.descriptionHtml!
        : 'magnam',
    featuredImage:
      overrides && overrides.hasOwnProperty('featuredImage')
        ? overrides.featuredImage!
        : anImage(),
    handle:
      overrides && overrides.hasOwnProperty('handle')
        ? overrides.handle!
        : 'quaerat',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '9983bd3e-4f2a-444b-8e81-349ed54ed801',
    images:
      overrides && overrides.hasOwnProperty('images')
        ? overrides.images!
        : anImageConnection(),
    media:
      overrides && overrides.hasOwnProperty('media')
        ? overrides.media!
        : aMediaConnection(),
    metafield:
      overrides && overrides.hasOwnProperty('metafield')
        ? overrides.metafield!
        : aMetafield(),
    metafields:
      overrides && overrides.hasOwnProperty('metafields')
        ? overrides.metafields!
        : aMetafieldConnection(),
    onlineStoreUrl:
      overrides && overrides.hasOwnProperty('onlineStoreUrl')
        ? overrides.onlineStoreUrl!
        : 'ex',
    options:
      overrides && overrides.hasOwnProperty('options')
        ? overrides.options!
        : [aProductOption()],
    priceRange:
      overrides && overrides.hasOwnProperty('priceRange')
        ? overrides.priceRange!
        : aProductPriceRange(),
    productType:
      overrides && overrides.hasOwnProperty('productType')
        ? overrides.productType!
        : 'nesciunt',
    publishedAt:
      overrides && overrides.hasOwnProperty('publishedAt')
        ? overrides.publishedAt!
        : 'et',
    requiresSellingPlan:
      overrides && overrides.hasOwnProperty('requiresSellingPlan')
        ? overrides.requiresSellingPlan!
        : true,
    sellingPlanGroups:
      overrides && overrides.hasOwnProperty('sellingPlanGroups')
        ? overrides.sellingPlanGroups!
        : aSellingPlanGroupConnection(),
    seo: overrides && overrides.hasOwnProperty('seo') ? overrides.seo! : aSeo(),
    tags:
      overrides && overrides.hasOwnProperty('tags')
        ? overrides.tags!
        : ['odit'],
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : 'vero',
    totalInventory:
      overrides && overrides.hasOwnProperty('totalInventory')
        ? overrides.totalInventory!
        : 9021,
    updatedAt:
      overrides && overrides.hasOwnProperty('updatedAt')
        ? overrides.updatedAt!
        : 'ex',
    variantBySelectedOptions:
      overrides && overrides.hasOwnProperty('variantBySelectedOptions')
        ? overrides.variantBySelectedOptions!
        : aProductVariant(),
    variants:
      overrides && overrides.hasOwnProperty('variants')
        ? overrides.variants!
        : aProductVariantConnection(),
    vendor:
      overrides && overrides.hasOwnProperty('vendor')
        ? overrides.vendor!
        : 'numquam',
  }
}

export const aProductConnection = (
  overrides?: Partial<ProductConnection>,
): ProductConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [aProductEdge()],
    filters:
      overrides && overrides.hasOwnProperty('filters')
        ? overrides.filters!
        : [aFilter()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const aProductEdge = (overrides?: Partial<ProductEdge>): ProductEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'et',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : aProduct(),
  }
}

export const aProductFilter = (
  overrides?: Partial<ProductFilter>,
): ProductFilter => {
  return {
    available:
      overrides && overrides.hasOwnProperty('available')
        ? overrides.available!
        : false,
    price:
      overrides && overrides.hasOwnProperty('price')
        ? overrides.price!
        : aPriceRangeFilter(),
    productMetafield:
      overrides && overrides.hasOwnProperty('productMetafield')
        ? overrides.productMetafield!
        : aMetafieldFilter(),
    productType:
      overrides && overrides.hasOwnProperty('productType')
        ? overrides.productType!
        : 'optio',
    productVendor:
      overrides && overrides.hasOwnProperty('productVendor')
        ? overrides.productVendor!
        : 'qui',
    variantMetafield:
      overrides && overrides.hasOwnProperty('variantMetafield')
        ? overrides.variantMetafield!
        : aMetafieldFilter(),
    variantOption:
      overrides && overrides.hasOwnProperty('variantOption')
        ? overrides.variantOption!
        : aVariantOptionFilter(),
  }
}

export const aProductOption = (
  overrides?: Partial<ProductOption>,
): ProductOption => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'a2a93730-be14-4ca9-850c-362f740ad857',
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'qui',
    values:
      overrides && overrides.hasOwnProperty('values')
        ? overrides.values!
        : ['doloremque'],
  }
}

export const aProductPriceRange = (
  overrides?: Partial<ProductPriceRange>,
): ProductPriceRange => {
  return {
    maxVariantPrice:
      overrides && overrides.hasOwnProperty('maxVariantPrice')
        ? overrides.maxVariantPrice!
        : aMoneyV2(),
    minVariantPrice:
      overrides && overrides.hasOwnProperty('minVariantPrice')
        ? overrides.minVariantPrice!
        : aMoneyV2(),
  }
}

export const aProductVariant = (
  overrides?: Partial<ProductVariant>,
): ProductVariant => {
  return {
    availableForSale:
      overrides && overrides.hasOwnProperty('availableForSale')
        ? overrides.availableForSale!
        : true,
    barcode:
      overrides && overrides.hasOwnProperty('barcode')
        ? overrides.barcode!
        : 'corrupti',
    compareAtPrice:
      overrides && overrides.hasOwnProperty('compareAtPrice')
        ? overrides.compareAtPrice!
        : 'ratione',
    compareAtPriceV2:
      overrides && overrides.hasOwnProperty('compareAtPriceV2')
        ? overrides.compareAtPriceV2!
        : aMoneyV2(),
    currentlyNotInStock:
      overrides && overrides.hasOwnProperty('currentlyNotInStock')
        ? overrides.currentlyNotInStock!
        : true,
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'dd49ff0e-9e0e-418a-8f2c-b8370e39dc01',
    image:
      overrides && overrides.hasOwnProperty('image')
        ? overrides.image!
        : anImage(),
    metafield:
      overrides && overrides.hasOwnProperty('metafield')
        ? overrides.metafield!
        : aMetafield(),
    metafields:
      overrides && overrides.hasOwnProperty('metafields')
        ? overrides.metafields!
        : aMetafieldConnection(),
    price:
      overrides && overrides.hasOwnProperty('price') ? overrides.price! : 'ab',
    priceV2:
      overrides && overrides.hasOwnProperty('priceV2')
        ? overrides.priceV2!
        : aMoneyV2(),
    product:
      overrides && overrides.hasOwnProperty('product')
        ? overrides.product!
        : aProduct(),
    quantityAvailable:
      overrides && overrides.hasOwnProperty('quantityAvailable')
        ? overrides.quantityAvailable!
        : 3629,
    requiresShipping:
      overrides && overrides.hasOwnProperty('requiresShipping')
        ? overrides.requiresShipping!
        : true,
    selectedOptions:
      overrides && overrides.hasOwnProperty('selectedOptions')
        ? overrides.selectedOptions!
        : [aSelectedOption()],
    sellingPlanAllocations:
      overrides && overrides.hasOwnProperty('sellingPlanAllocations')
        ? overrides.sellingPlanAllocations!
        : aSellingPlanAllocationConnection(),
    sku: overrides && overrides.hasOwnProperty('sku') ? overrides.sku! : 'sunt',
    storeAvailability:
      overrides && overrides.hasOwnProperty('storeAvailability')
        ? overrides.storeAvailability!
        : aStoreAvailabilityConnection(),
    title:
      overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'et',
    unitPrice:
      overrides && overrides.hasOwnProperty('unitPrice')
        ? overrides.unitPrice!
        : aMoneyV2(),
    unitPriceMeasurement:
      overrides && overrides.hasOwnProperty('unitPriceMeasurement')
        ? overrides.unitPriceMeasurement!
        : aUnitPriceMeasurement(),
    weight:
      overrides && overrides.hasOwnProperty('weight')
        ? overrides.weight!
        : 4.06,
    weightUnit:
      overrides && overrides.hasOwnProperty('weightUnit')
        ? overrides.weightUnit!
        : WeightUnit.Grams,
  }
}

export const aProductVariantConnection = (
  overrides?: Partial<ProductVariantConnection>,
): ProductVariantConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [aProductVariantEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const aProductVariantEdge = (
  overrides?: Partial<ProductVariantEdge>,
): ProductVariantEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'sint',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : aProductVariant(),
  }
}

export const aQueryRoot = (overrides?: Partial<QueryRoot>): QueryRoot => {
  return {
    articles:
      overrides && overrides.hasOwnProperty('articles')
        ? overrides.articles!
        : anArticleConnection(),
    blog:
      overrides && overrides.hasOwnProperty('blog') ? overrides.blog! : aBlog(),
    blogByHandle:
      overrides && overrides.hasOwnProperty('blogByHandle')
        ? overrides.blogByHandle!
        : aBlog(),
    blogs:
      overrides && overrides.hasOwnProperty('blogs')
        ? overrides.blogs!
        : aBlogConnection(),
    cart:
      overrides && overrides.hasOwnProperty('cart') ? overrides.cart! : aCart(),
    collection:
      overrides && overrides.hasOwnProperty('collection')
        ? overrides.collection!
        : aCollection(),
    collectionByHandle:
      overrides && overrides.hasOwnProperty('collectionByHandle')
        ? overrides.collectionByHandle!
        : aCollection(),
    collections:
      overrides && overrides.hasOwnProperty('collections')
        ? overrides.collections!
        : aCollectionConnection(),
    customer:
      overrides && overrides.hasOwnProperty('customer')
        ? overrides.customer!
        : aCustomer(),
    localization:
      overrides && overrides.hasOwnProperty('localization')
        ? overrides.localization!
        : aLocalization(),
    locations:
      overrides && overrides.hasOwnProperty('locations')
        ? overrides.locations!
        : aLocationConnection(),
    node:
      overrides && overrides.hasOwnProperty('node') ? overrides.node! : aNode(),
    nodes:
      overrides && overrides.hasOwnProperty('nodes')
        ? overrides.nodes!
        : [aNode()],
    page:
      overrides && overrides.hasOwnProperty('page') ? overrides.page! : aPage(),
    pageByHandle:
      overrides && overrides.hasOwnProperty('pageByHandle')
        ? overrides.pageByHandle!
        : aPage(),
    pages:
      overrides && overrides.hasOwnProperty('pages')
        ? overrides.pages!
        : aPageConnection(),
    product:
      overrides && overrides.hasOwnProperty('product')
        ? overrides.product!
        : aProduct(),
    productByHandle:
      overrides && overrides.hasOwnProperty('productByHandle')
        ? overrides.productByHandle!
        : aProduct(),
    productRecommendations:
      overrides && overrides.hasOwnProperty('productRecommendations')
        ? overrides.productRecommendations!
        : [aProduct()],
    productTags:
      overrides && overrides.hasOwnProperty('productTags')
        ? overrides.productTags!
        : aStringConnection(),
    productTypes:
      overrides && overrides.hasOwnProperty('productTypes')
        ? overrides.productTypes!
        : aStringConnection(),
    products:
      overrides && overrides.hasOwnProperty('products')
        ? overrides.products!
        : aProductConnection(),
    publicApiVersions:
      overrides && overrides.hasOwnProperty('publicApiVersions')
        ? overrides.publicApiVersions!
        : [anApiVersion()],
    shop:
      overrides && overrides.hasOwnProperty('shop') ? overrides.shop! : aShop(),
  }
}

export const aSeo = (overrides?: Partial<Seo>): Seo => {
  return {
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'sint',
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : 'architecto',
  }
}

export const aScriptDiscountApplication = (
  overrides?: Partial<ScriptDiscountApplication>,
): ScriptDiscountApplication => {
  return {
    allocationMethod:
      overrides && overrides.hasOwnProperty('allocationMethod')
        ? overrides.allocationMethod!
        : DiscountApplicationAllocationMethod.Across,
    targetSelection:
      overrides && overrides.hasOwnProperty('targetSelection')
        ? overrides.targetSelection!
        : DiscountApplicationTargetSelection.All,
    targetType:
      overrides && overrides.hasOwnProperty('targetType')
        ? overrides.targetType!
        : DiscountApplicationTargetType.LineItem,
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : 'sunt',
    value:
      overrides && overrides.hasOwnProperty('value')
        ? overrides.value!
        : aMoneyV2(),
  }
}

export const aSelectedOption = (
  overrides?: Partial<SelectedOption>,
): SelectedOption => {
  return {
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'sint',
    value:
      overrides && overrides.hasOwnProperty('value') ? overrides.value! : 'sit',
  }
}

export const aSelectedOptionInput = (
  overrides?: Partial<SelectedOptionInput>,
): SelectedOptionInput => {
  return {
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'est',
    value:
      overrides && overrides.hasOwnProperty('value')
        ? overrides.value!
        : 'rerum',
  }
}

export const aSellingPlan = (overrides?: Partial<SellingPlan>): SellingPlan => {
  return {
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'sed',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'a1cc2131-1915-47f8-a503-022b58859a64',
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : 'reiciendis',
    options:
      overrides && overrides.hasOwnProperty('options')
        ? overrides.options!
        : [aSellingPlanOption()],
    priceAdjustments:
      overrides && overrides.hasOwnProperty('priceAdjustments')
        ? overrides.priceAdjustments!
        : [aSellingPlanPriceAdjustment()],
    recurringDeliveries:
      overrides && overrides.hasOwnProperty('recurringDeliveries')
        ? overrides.recurringDeliveries!
        : false,
  }
}

export const aSellingPlanAllocation = (
  overrides?: Partial<SellingPlanAllocation>,
): SellingPlanAllocation => {
  return {
    priceAdjustments:
      overrides && overrides.hasOwnProperty('priceAdjustments')
        ? overrides.priceAdjustments!
        : [aSellingPlanAllocationPriceAdjustment()],
    sellingPlan:
      overrides && overrides.hasOwnProperty('sellingPlan')
        ? overrides.sellingPlan!
        : aSellingPlan(),
  }
}

export const aSellingPlanAllocationConnection = (
  overrides?: Partial<SellingPlanAllocationConnection>,
): SellingPlanAllocationConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [aSellingPlanAllocationEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const aSellingPlanAllocationEdge = (
  overrides?: Partial<SellingPlanAllocationEdge>,
): SellingPlanAllocationEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'ad',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : aSellingPlanAllocation(),
  }
}

export const aSellingPlanAllocationPriceAdjustment = (
  overrides?: Partial<SellingPlanAllocationPriceAdjustment>,
): SellingPlanAllocationPriceAdjustment => {
  return {
    compareAtPrice:
      overrides && overrides.hasOwnProperty('compareAtPrice')
        ? overrides.compareAtPrice!
        : aMoneyV2(),
    perDeliveryPrice:
      overrides && overrides.hasOwnProperty('perDeliveryPrice')
        ? overrides.perDeliveryPrice!
        : aMoneyV2(),
    price:
      overrides && overrides.hasOwnProperty('price')
        ? overrides.price!
        : aMoneyV2(),
    unitPrice:
      overrides && overrides.hasOwnProperty('unitPrice')
        ? overrides.unitPrice!
        : aMoneyV2(),
  }
}

export const aSellingPlanConnection = (
  overrides?: Partial<SellingPlanConnection>,
): SellingPlanConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [aSellingPlanEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const aSellingPlanEdge = (
  overrides?: Partial<SellingPlanEdge>,
): SellingPlanEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'exercitationem',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : aSellingPlan(),
  }
}

export const aSellingPlanFixedAmountPriceAdjustment = (
  overrides?: Partial<SellingPlanFixedAmountPriceAdjustment>,
): SellingPlanFixedAmountPriceAdjustment => {
  return {
    adjustmentAmount:
      overrides && overrides.hasOwnProperty('adjustmentAmount')
        ? overrides.adjustmentAmount!
        : aMoneyV2(),
  }
}

export const aSellingPlanFixedPriceAdjustment = (
  overrides?: Partial<SellingPlanFixedPriceAdjustment>,
): SellingPlanFixedPriceAdjustment => {
  return {
    price:
      overrides && overrides.hasOwnProperty('price')
        ? overrides.price!
        : aMoneyV2(),
  }
}

export const aSellingPlanGroup = (
  overrides?: Partial<SellingPlanGroup>,
): SellingPlanGroup => {
  return {
    appName:
      overrides && overrides.hasOwnProperty('appName')
        ? overrides.appName!
        : 'eos',
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'id',
    options:
      overrides && overrides.hasOwnProperty('options')
        ? overrides.options!
        : [aSellingPlanGroupOption()],
    sellingPlans:
      overrides && overrides.hasOwnProperty('sellingPlans')
        ? overrides.sellingPlans!
        : aSellingPlanConnection(),
  }
}

export const aSellingPlanGroupConnection = (
  overrides?: Partial<SellingPlanGroupConnection>,
): SellingPlanGroupConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [aSellingPlanGroupEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const aSellingPlanGroupEdge = (
  overrides?: Partial<SellingPlanGroupEdge>,
): SellingPlanGroupEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'maxime',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : aSellingPlanGroup(),
  }
}

export const aSellingPlanGroupOption = (
  overrides?: Partial<SellingPlanGroupOption>,
): SellingPlanGroupOption => {
  return {
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'iure',
    values:
      overrides && overrides.hasOwnProperty('values')
        ? overrides.values!
        : ['maxime'],
  }
}

export const aSellingPlanOption = (
  overrides?: Partial<SellingPlanOption>,
): SellingPlanOption => {
  return {
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : 'maiores',
    value:
      overrides && overrides.hasOwnProperty('value')
        ? overrides.value!
        : 'deserunt',
  }
}

export const aSellingPlanPercentagePriceAdjustment = (
  overrides?: Partial<SellingPlanPercentagePriceAdjustment>,
): SellingPlanPercentagePriceAdjustment => {
  return {
    adjustmentPercentage:
      overrides && overrides.hasOwnProperty('adjustmentPercentage')
        ? overrides.adjustmentPercentage!
        : 4622,
  }
}

export const aSellingPlanPriceAdjustment = (
  overrides?: Partial<SellingPlanPriceAdjustment>,
): SellingPlanPriceAdjustment => {
  return {
    adjustmentValue:
      overrides && overrides.hasOwnProperty('adjustmentValue')
        ? overrides.adjustmentValue!
        : aSellingPlanFixedAmountPriceAdjustment(),
    orderCount:
      overrides && overrides.hasOwnProperty('orderCount')
        ? overrides.orderCount!
        : 5105,
  }
}

export const aShippingRate = (
  overrides?: Partial<ShippingRate>,
): ShippingRate => {
  return {
    handle:
      overrides && overrides.hasOwnProperty('handle')
        ? overrides.handle!
        : 'ut',
    price:
      overrides && overrides.hasOwnProperty('price')
        ? overrides.price!
        : 'rerum',
    priceV2:
      overrides && overrides.hasOwnProperty('priceV2')
        ? overrides.priceV2!
        : aMoneyV2(),
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : 'quis',
  }
}

export const aShop = (overrides?: Partial<Shop>): Shop => {
  return {
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'culpa',
    metafield:
      overrides && overrides.hasOwnProperty('metafield')
        ? overrides.metafield!
        : aMetafield(),
    metafields:
      overrides && overrides.hasOwnProperty('metafields')
        ? overrides.metafields!
        : aMetafieldConnection(),
    moneyFormat:
      overrides && overrides.hasOwnProperty('moneyFormat')
        ? overrides.moneyFormat!
        : 'unde',
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'velit',
    paymentSettings:
      overrides && overrides.hasOwnProperty('paymentSettings')
        ? overrides.paymentSettings!
        : aPaymentSettings(),
    primaryDomain:
      overrides && overrides.hasOwnProperty('primaryDomain')
        ? overrides.primaryDomain!
        : aDomain(),
    privacyPolicy:
      overrides && overrides.hasOwnProperty('privacyPolicy')
        ? overrides.privacyPolicy!
        : aShopPolicy(),
    refundPolicy:
      overrides && overrides.hasOwnProperty('refundPolicy')
        ? overrides.refundPolicy!
        : aShopPolicy(),
    shippingPolicy:
      overrides && overrides.hasOwnProperty('shippingPolicy')
        ? overrides.shippingPolicy!
        : aShopPolicy(),
    shipsToCountries:
      overrides && overrides.hasOwnProperty('shipsToCountries')
        ? overrides.shipsToCountries!
        : [CountryCode.Ac],
    subscriptionPolicy:
      overrides && overrides.hasOwnProperty('subscriptionPolicy')
        ? overrides.subscriptionPolicy!
        : aShopPolicyWithDefault(),
    termsOfService:
      overrides && overrides.hasOwnProperty('termsOfService')
        ? overrides.termsOfService!
        : aShopPolicy(),
  }
}

export const aShopPolicy = (overrides?: Partial<ShopPolicy>): ShopPolicy => {
  return {
    body:
      overrides && overrides.hasOwnProperty('body') ? overrides.body! : 'et',
    handle:
      overrides && overrides.hasOwnProperty('handle')
        ? overrides.handle!
        : 'quod',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '28c9f4da-391a-4214-a645-eb860b936603',
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : 'vero',
    url: overrides && overrides.hasOwnProperty('url') ? overrides.url! : 'in',
  }
}

export const aShopPolicyWithDefault = (
  overrides?: Partial<ShopPolicyWithDefault>,
): ShopPolicyWithDefault => {
  return {
    body:
      overrides && overrides.hasOwnProperty('body') ? overrides.body! : 'ut',
    handle:
      overrides && overrides.hasOwnProperty('handle')
        ? overrides.handle!
        : 'consequatur',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'e1d391be-cba0-4441-9648-c62575582dc4',
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : 'numquam',
    url:
      overrides && overrides.hasOwnProperty('url')
        ? overrides.url!
        : 'recusandae',
  }
}

export const aStoreAvailability = (
  overrides?: Partial<StoreAvailability>,
): StoreAvailability => {
  return {
    available:
      overrides && overrides.hasOwnProperty('available')
        ? overrides.available!
        : false,
    location:
      overrides && overrides.hasOwnProperty('location')
        ? overrides.location!
        : aLocation(),
    pickUpTime:
      overrides && overrides.hasOwnProperty('pickUpTime')
        ? overrides.pickUpTime!
        : 'quia',
  }
}

export const aStoreAvailabilityConnection = (
  overrides?: Partial<StoreAvailabilityConnection>,
): StoreAvailabilityConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [aStoreAvailabilityEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const aStoreAvailabilityEdge = (
  overrides?: Partial<StoreAvailabilityEdge>,
): StoreAvailabilityEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'qui',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : aStoreAvailability(),
  }
}

export const aStringConnection = (
  overrides?: Partial<StringConnection>,
): StringConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [aStringEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const aStringEdge = (overrides?: Partial<StringEdge>): StringEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'est',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : 'facere',
  }
}

export const aTokenizedPaymentInput = (
  overrides?: Partial<TokenizedPaymentInput>,
): TokenizedPaymentInput => {
  return {
    amount:
      overrides && overrides.hasOwnProperty('amount')
        ? overrides.amount!
        : 'corrupti',
    billingAddress:
      overrides && overrides.hasOwnProperty('billingAddress')
        ? overrides.billingAddress!
        : aMailingAddressInput(),
    idempotencyKey:
      overrides && overrides.hasOwnProperty('idempotencyKey')
        ? overrides.idempotencyKey!
        : 'est',
    identifier:
      overrides && overrides.hasOwnProperty('identifier')
        ? overrides.identifier!
        : 'et',
    paymentData:
      overrides && overrides.hasOwnProperty('paymentData')
        ? overrides.paymentData!
        : 'unde',
    test:
      overrides && overrides.hasOwnProperty('test') ? overrides.test! : true,
    type:
      overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'et',
  }
}

export const aTokenizedPaymentInputV2 = (
  overrides?: Partial<TokenizedPaymentInputV2>,
): TokenizedPaymentInputV2 => {
  return {
    billingAddress:
      overrides && overrides.hasOwnProperty('billingAddress')
        ? overrides.billingAddress!
        : aMailingAddressInput(),
    idempotencyKey:
      overrides && overrides.hasOwnProperty('idempotencyKey')
        ? overrides.idempotencyKey!
        : 'iusto',
    identifier:
      overrides && overrides.hasOwnProperty('identifier')
        ? overrides.identifier!
        : 'maxime',
    paymentAmount:
      overrides && overrides.hasOwnProperty('paymentAmount')
        ? overrides.paymentAmount!
        : aMoneyInput(),
    paymentData:
      overrides && overrides.hasOwnProperty('paymentData')
        ? overrides.paymentData!
        : 'recusandae',
    test:
      overrides && overrides.hasOwnProperty('test') ? overrides.test! : false,
    type:
      overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'ea',
  }
}

export const aTokenizedPaymentInputV3 = (
  overrides?: Partial<TokenizedPaymentInputV3>,
): TokenizedPaymentInputV3 => {
  return {
    billingAddress:
      overrides && overrides.hasOwnProperty('billingAddress')
        ? overrides.billingAddress!
        : aMailingAddressInput(),
    idempotencyKey:
      overrides && overrides.hasOwnProperty('idempotencyKey')
        ? overrides.idempotencyKey!
        : 'possimus',
    identifier:
      overrides && overrides.hasOwnProperty('identifier')
        ? overrides.identifier!
        : 'qui',
    paymentAmount:
      overrides && overrides.hasOwnProperty('paymentAmount')
        ? overrides.paymentAmount!
        : aMoneyInput(),
    paymentData:
      overrides && overrides.hasOwnProperty('paymentData')
        ? overrides.paymentData!
        : 'aut',
    test:
      overrides && overrides.hasOwnProperty('test') ? overrides.test! : false,
    type:
      overrides && overrides.hasOwnProperty('type')
        ? overrides.type!
        : PaymentTokenType.ApplePay,
  }
}

export const aTransaction = (overrides?: Partial<Transaction>): Transaction => {
  return {
    amount:
      overrides && overrides.hasOwnProperty('amount')
        ? overrides.amount!
        : 'et',
    amountV2:
      overrides && overrides.hasOwnProperty('amountV2')
        ? overrides.amountV2!
        : aMoneyV2(),
    kind:
      overrides && overrides.hasOwnProperty('kind')
        ? overrides.kind!
        : TransactionKind.Authorization,
    status:
      overrides && overrides.hasOwnProperty('status')
        ? overrides.status!
        : TransactionStatus.Error,
    statusV2:
      overrides && overrides.hasOwnProperty('statusV2')
        ? overrides.statusV2!
        : TransactionStatus.Error,
    test:
      overrides && overrides.hasOwnProperty('test') ? overrides.test! : false,
  }
}

export const aUnitPriceMeasurement = (
  overrides?: Partial<UnitPriceMeasurement>,
): UnitPriceMeasurement => {
  return {
    measuredType:
      overrides && overrides.hasOwnProperty('measuredType')
        ? overrides.measuredType!
        : UnitPriceMeasurementMeasuredType.Area,
    quantityUnit:
      overrides && overrides.hasOwnProperty('quantityUnit')
        ? overrides.quantityUnit!
        : UnitPriceMeasurementMeasuredUnit.Cl,
    quantityValue:
      overrides && overrides.hasOwnProperty('quantityValue')
        ? overrides.quantityValue!
        : 9.35,
    referenceUnit:
      overrides && overrides.hasOwnProperty('referenceUnit')
        ? overrides.referenceUnit!
        : UnitPriceMeasurementMeasuredUnit.Cl,
    referenceValue:
      overrides && overrides.hasOwnProperty('referenceValue')
        ? overrides.referenceValue!
        : 6918,
  }
}

export const aUserError = (overrides?: Partial<UserError>): UserError => {
  return {
    field:
      overrides && overrides.hasOwnProperty('field')
        ? overrides.field!
        : ['tenetur'],
    message:
      overrides && overrides.hasOwnProperty('message')
        ? overrides.message!
        : 'libero',
  }
}

export const aVariantOptionFilter = (
  overrides?: Partial<VariantOptionFilter>,
): VariantOptionFilter => {
  return {
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : 'voluptates',
    value:
      overrides && overrides.hasOwnProperty('value')
        ? overrides.value!
        : 'vitae',
  }
}

export const aVideo = (overrides?: Partial<Video>): Video => {
  return {
    alt:
      overrides && overrides.hasOwnProperty('alt')
        ? overrides.alt!
        : 'cupiditate',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'db07d5c1-507d-4558-8702-cc05813b5bca',
    mediaContentType:
      overrides && overrides.hasOwnProperty('mediaContentType')
        ? overrides.mediaContentType!
        : MediaContentType.ExternalVideo,
    previewImage:
      overrides && overrides.hasOwnProperty('previewImage')
        ? overrides.previewImage!
        : anImage(),
    sources:
      overrides && overrides.hasOwnProperty('sources')
        ? overrides.sources!
        : [aVideoSource()],
  }
}

export const aVideoSource = (overrides?: Partial<VideoSource>): VideoSource => {
  return {
    format:
      overrides && overrides.hasOwnProperty('format')
        ? overrides.format!
        : 'qui',
    height:
      overrides && overrides.hasOwnProperty('height')
        ? overrides.height!
        : 3111,
    mimeType:
      overrides && overrides.hasOwnProperty('mimeType')
        ? overrides.mimeType!
        : 'nesciunt',
    url: overrides && overrides.hasOwnProperty('url') ? overrides.url! : 'ab',
    width:
      overrides && overrides.hasOwnProperty('width') ? overrides.width! : 2268,
  }
}
