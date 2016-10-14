// Taken from este
// https://github.com/este/este/blob/5bb6d0dcd3e3d436005b16129b8e9127b1842977/src/common/configureMiddleware.js#L13
export default deps => ({ dispatch, getState }) => next => action =>
  next(typeof action === 'function'
    ? action({ ...deps, dispatch, getState })
    : action
  )
