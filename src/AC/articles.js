import AppDispatcher from '../dispatcher'

export function deleteArticle(id) {
	const action = {
		type: 'DELETE_ARTICLE',
		payload: {
			id
		}
	}
	AppDispatcher.dispatch(action);
	console.log('--id action--', id)
	// console.log('--action--', action)
}