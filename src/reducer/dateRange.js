import {HANDLE_DAY_CLICK} from '../constants'

export default (dateRange = {from: null, to: null}, action) => {
    const {type, payload} = action;
    return type == HANDLE_DAY_CLICK ? payload.dateRange : dateRange;
}