import {
    INCREMENT,
    DELETE_ARTICLE,
    SELECT_ARTICLE,
    HANDLE_DAY_CLICK
} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }
    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload : { id }
    }
}

export function selectArticle(selection) {
    return {
        type: SELECT_ARTICLE,
        payload : { selection }
    }
}

export function handleDayClick(dateRange) {
    // console.log("~~~selection~~~", selection);
    return {
        type: HANDLE_DAY_CLICK,
        payload : { dateRange }
    }
}