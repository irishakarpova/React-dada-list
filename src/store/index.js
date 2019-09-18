import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import randomId from '../middlewares/randomid'
import api from '../middlewares/api'
import logger from '../middlewares/logger'

const enhancer = applyMiddleware(
  randomId, api, logger
)

const store = createStore(reducer, enhancer)

window.store = store
export default store
