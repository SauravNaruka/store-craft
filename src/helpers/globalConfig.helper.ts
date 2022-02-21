import type {GlobalConfig, Theme} from '@generated/cms.types'

export function getTheme(config: GlobalConfig): Theme {
  let theme
  if (process.env.NODE_ENV === 'production') {
    console.log('------------- Theme Production -------------')
    theme = config.theme
  } else {
    console.log('------------- Theme Staging -------------')
    theme = config.stagingTheme
  }

  if (theme) {
    return theme
  }

  throw new Error('Global theme missing from the config')
}

export function getFooterID(theme: Theme): string {
  const footerID = theme.footerMenu?._id ?? null
  if (footerID) {
    return footerID
  }

  throw new Error('Missing footer id')
}
