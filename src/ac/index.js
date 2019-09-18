import {CHANGE_SELECTION, ADD_ARTICLE, LOAD_ALL_ARTICLES } from '../constants'

export default function changeSelection(selected){
  return{
    type: CHANGE_SELECTION,
    payload: { selected }
  }
}

export function addArticle(article, articleId){
	return{
		type: ADD_ARTICLE,
		payload: { article, articleId },
		generateId: true
	}
}
export function loadAllArticles(){
  return{
    type: LOAD_ALL_ARTICLES,
    callAPI: '/api/article'
  }
}
