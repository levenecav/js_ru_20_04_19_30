export default store => next => action => {
    if(action.type == 'CREATE_COMMENT') action.payload.id = Math.random().toString(36).substr(2, 9);
    next(action);
}