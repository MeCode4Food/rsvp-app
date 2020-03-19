/*global process*/
import { createBrowserHistory } from 'history'
import _ from 'lodash'

const browserHistory = createBrowserHistory({ basename: process.env.REACT_APP_BASE_URL })

const routeTo = ({ path }) => {
  browserHistory.push(path)
}

/**
 * splits path into an array of strings based on '/' e.g. a/b/c => [a, b, c]
 */
export const splitPathFromLocation = ({ location: { pathname = '' } = {} }) => {
  if (pathname[0] === '/') pathname = pathname.substr(1)
  return pathname.split('/')
}
export const splitPathFromHistory = ({ history }) => {
  return splitPathFromLocation(history)
}
export const rootPath = location => {
  return _.first(splitPathFromLocation({ location }))
}
export const lastPath = location => {
  return _.last(splitPathFromLocation({ location }))
}

export default browserHistory
export { routeTo }
