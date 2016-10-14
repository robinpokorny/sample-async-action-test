import { applyMiddleware, createStore } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

import fetch from 'fetch'
import otherDependency from '../utils/example'

import injectMiddleware from './injectMiddleware'
import reducer from './reducer'

export default (initialState) => {
  const middleware = [
    injectMiddleware({
      fetch,
      otherDependency
    }),
    promiseMiddleware()
  ]

  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
  )

  return store
}
