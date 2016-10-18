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

    it('has correct data', () => {
      expect(action(deps)).toMatchSnapshot()
    })

    it('fetches todos from the server', () => {
      action(deps)

      expect(deps.fetch).toHaveBeenCalledTimes(1)
      expect(deps.fetch.mock.calls[0]).toMatchSnapshot()
    })
  })
})
