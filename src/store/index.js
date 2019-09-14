import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import randomId from '../middlewares/randomid'

const enhancer = applyMiddleware(
  randomId
)

const store = createStore(reducer, enhancer)
window.store = store
export default store
