import {LOAD_COMMENTS, START, SUCCESS} from '../constants'
import {arrayToMap} from '../utils'
import {OrderedMap, Record} from 'immutable'

const CommentModel = Record({
    id: null,
    text: '',
    user: ''
})

const DefaultReducerState = Record({
    entities: new OrderedMap({}),
    total: null,
    limit: 5,
    offset: 0
})

export default (comments = new DefaultReducerState(), action) => {
    const {type, payload, response} = action
    switch (type) {

        case LOAD_COMMENTS + SUCCESS: {
            return comments
                .mergeIn(['entities'], arrayToMap(response.records, CommentModel))
                .set('total', response.total);
        }
    }

    return comments
}
