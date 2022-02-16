import {build, fake} from '@jackfranklin/test-data-bot'
import type {GlobalConfigQuery} from '@generated/cms.types'

export const buildGlobalConfigsResponse = build<GlobalConfigQuery>({
  fields: {
    GlobalConfig: {
      theme: {
        headerMenu: {
          _id: fake(f => f.datatype.uuid()),
        },
        footerMenu: {
          _id: fake(f => f.datatype.uuid()),
        },
      },
      stagingTheme: {
        headerMenu: {
          _id: fake(f => f.datatype.uuid()),
        },
        footerMenu: {
          _id: fake(f => f.datatype.uuid()),
        },
      },
    },
  },
})
