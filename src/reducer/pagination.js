import {LOAD_COMMENTS, START, SUCCESS} from '../constants'
import {arrayToNumberMap} from '../utils'
import {OrderedMap, Record, Map} from 'immutable'

const CommentModel = Record({
    id: null,
    text: '',
    user: ''
})

const DefaultReducerState = Record({
    entities: new OrderedMap({}),
    total: 0,
    limit: 5,
    offset: 0,
    loading: false,
    pagesArray: []
})

export default (comments = new DefaultReducerState(), action) => {
    const {type, offset, payload, response} = action
    switch (type) {

        case LOAD_COMMENTS + START: {
            return comments.set('loading', true)
        }

        case LOAD_COMMENTS + SUCCESS: {
            const {limit} = comments;
            const pagesArray = [];
            let pageNumber = 0;
            for (let i = 0; i < response.total; i += limit) {
                pageNumber += 1;
                pagesArray.push({limit, offset: i, pageNumber});
            };

            return comments
                .mergeIn(['entities'], Map({
                    [`${offset/limit + 1}`]: response.records.map(el => new CommentModel(el))
                }))
                .set('total', response.total)
                .set('loading', false)
                .set('pagesArray', pagesArray)
        }
    }

    return comments
}
