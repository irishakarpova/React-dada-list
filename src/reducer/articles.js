import { Record } from 'immutable'
import defaultArticles from '../fixtures'
import { arrToMap } from './utils'

const ArticleRecord = Record({
	id:null,
	title:null,
	text: null
})

export default (articles = arrToMap(defaultArticles, ArticleRecord), action) =>{

  const { type, payload, randomId } = action
  
  switch (type){
		  
	case 'ADD_ARTICLE':
		  return articles.set(randomId, {
			  ...payload.article, id:randomId })

    default:
        return articles
  }

}


