import {getNavigationsHandler} from './Navigations.handlers'
import {getCollectionHandler} from './Collection.handlers'
import {getGlobalConfig} from './GlobalConfig.handlers'
import {getFooter} from './Footer.handlers'

const handlers = [
  getNavigationsHandler,
  getCollectionHandler,
  getGlobalConfig,
  getFooter,
]

export {handlers}
