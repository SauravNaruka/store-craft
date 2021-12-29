export function isUrl(url: string) {
  return /^https?:\/\//.test(`${url}`)
}
