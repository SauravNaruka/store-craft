import {getNavigationsHandler} from './fetchNavigations.mock'
import {getCollectionHandler} from './fetchCollection.mock'
import {getGlobalConfig} from './fetchGlobalConfig.mock'
import {getFooter} from './fetchFooter.mock'

const handlers = [
  getNavigationsHandler,
  getCollectionHandler,
  getGlobalConfig,
  getFooter,
]

export {handlers}
