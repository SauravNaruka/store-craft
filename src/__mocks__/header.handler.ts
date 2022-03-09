import {graphql} from 'msw'
import {buildHeaderResponse} from './header.mock'

export const getHeader = graphql.query('Header', (req, res, ctx) => {
  return res(ctx.data(buildHeaderResponse()))
})
