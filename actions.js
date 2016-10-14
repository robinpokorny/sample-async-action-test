export const FETCH_TODOS_ERROR = 'FETCH_TODOS_REJECTED'
export const FETCH_TODOS_START = 'FETCH_TODOS_PENDING'
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_FULFILLED'

export const loadTodos = () => ({ getState, reqwest }) => {
  const { todos } = getState()
  const url = todos.get('serverUrl')

  return ({
    type: 'FETCH_TODOS',
    payload: reqwest({
      url,
      type: 'json'
    })
  })
}
