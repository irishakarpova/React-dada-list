import { combineReducers } from 'redux'
import articles from './articles'
import filters from './filters'
import rangeArticles from './range'

export default combineReducers({
  articles,
  filters,
  rangeArticles
})
