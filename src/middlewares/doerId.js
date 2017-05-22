export default store => next => action => {
	// console.log('--action.type--', action.type)
    //через мидлвары будет проходить каждый экшин, они должны быть максимально общими, завязывать на конкретные экшины - не лучшее решение
    if(action.type == 'ADD_COMMENT') action.payload.id = Math.random().toString(36).substr(2, 9);
    next(action);
}
