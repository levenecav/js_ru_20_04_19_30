export default store => next => action => {
	// console.log('--action.type--', action.type)
    if(action.type == 'ADD_COMMENT') action.payload.id = Math.random().toString(36).substr(2, 9);
    next(action);
}