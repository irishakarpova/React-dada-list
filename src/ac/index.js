import {CHANGE_SELECTION, ADD_ARTICLE } from '../constants'

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
