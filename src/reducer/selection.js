import {SELECT_ARTICLE} from '../constants'
//не дроби редюсеры слишком сильно: объедини селект и календарь в один
export default (selection = [], action) => {
    const {type, payload} = action;
    return type == SELECT_ARTICLE ? payload.selection : selection;
}
