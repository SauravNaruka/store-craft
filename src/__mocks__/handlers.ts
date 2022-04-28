import {getFooter} from './Footer.handlers'
import {getHeader} from './header.handler'
import {getGlobalConfig} from './GlobalConfig.handlers'
import {getNavigationsHandler} from './Navigations.handlers'
import {
  getCollectionProductsByHandleHandler,
  getCollectionProductsWithFiltersByHandleHandler,
  getCollectionsBySearchQueryHandler,
  getCollectionWithImageByIDHandler,
} from './Collection.handlers'
import {getProductShortInfoBySearchQueryHandler} from './Product.handlers'

const handlers = [
  // Sanity handlers
  getFooter,
  getHeader,
  getGlobalConfig,
  getNavigationsHandler,

  // shopify handler
  getCollectionsBySearchQueryHandler,
  getCollectionProductsByHandleHandler,
  getCollectionProductsWithFiltersByHandleHandler,
  getCollectionWithImageByIDHandler,
  getProductShortInfoBySearchQueryHandler,
]

export {handlers}
