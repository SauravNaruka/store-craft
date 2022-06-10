export function isUrl(url: string) {
  return /^https?:\/\//.test(`${url}`)
}

export function getRelativeProductURL(slug: string) {
  return `/products/${slug}`
}
