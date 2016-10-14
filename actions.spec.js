/* eslint-env jest */
import { isFSA } from 'flux-standard-action'
import { fromJS } from 'immutable'

import * as actions from './actions'

describe('Todo action', () => {
  describe('loadTodos', () => {
    const action = actions.loadTodos()

    const state = {
      todos: fromJS({
        serverUrl: 'XURL'
      })
    }
    const deps = {
      fetch: jest.fn(() => Promise.resolve()),
      getState: () => state
    }

    beforeEach(() => {
      deps.fetch.mockClear()
    })

    it('is a valid FSA', () => {
      expect(isFSA(action(deps))).toBe(true)
    })

    it('passes on a promise', () => {
      expect(action(deps).payload.promise).toBeDefined()
    })

    it('have a type of "FETCH_TODOS"', () => {
      expect(action(deps).type).toEqual('FETCH_TODOS')
    })

    it('fetches todos from the server', () => {
      action(deps)

      expect(deps.fetch).toHaveBeenCalledTimes(1)
      expect(deps.fetch).toBeCalledWith('XURL', {
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    })
  })
})
