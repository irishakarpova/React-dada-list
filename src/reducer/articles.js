import { Record } from 'immutable'
import { ADD_ARTICLE, LOAD_ALL_ARTICLES } from '../constants'
import { arrToMap } from './utils'

const ArticleRecord = Record({
	id: null,
	title: null,
	text: null,
	location: null,
	members: null
})

export default (articles = arrToMap([], ArticleRecord), action) =>{

  const { type, payload, randomId, response } = action

  switch (type){

	case ADD_ARTICLE:
		  return articles.set(randomId, {
			  ...payload.article, id:randomId })

	case LOAD_ALL_ARTICLES:
			return arrToMap(response, ArticleRecord)

    default:
        return articles
  }

}
