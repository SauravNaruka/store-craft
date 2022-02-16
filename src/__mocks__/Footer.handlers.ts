import {graphql} from 'msw'
import {buildFooterResponse} from './Footer.mock'

export const getFooter = graphql.query('Footer', (req, res, ctx) => {
  return res(ctx.data(buildFooterResponse()))
})
