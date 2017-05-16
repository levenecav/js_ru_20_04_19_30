import {SELECT_ARTICLE} from '../constants'

export default (selection = null, action) => {
    const {type, payload} = action;
    return type == SELECT_ARTICLE ? payload.selection : selection;
}