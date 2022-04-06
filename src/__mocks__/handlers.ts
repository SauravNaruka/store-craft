import {getNavigationsHandler} from './Navigations.handlers'
import {
  getCollectionHandler,
  getCollectionShortInfoHandler,
} from './Collection.handlers'
import {getGlobalConfig} from './GlobalConfig.handlers'
import {getFooter} from './Footer.handlers'
import {getHeader} from './header.handler'
import {getProductQuickSearchHandler} from './search.handler'

const handlers = [
  getNavigationsHandler,
  getCollectionHandler,
  getCollectionShortInfoHandler,
  getGlobalConfig,
  getFooter,
  getHeader,
  getProductQuickSearchHandler,
]

export {handlers}
