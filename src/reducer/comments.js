// import {normalizedComments as defaultComments} from '../fixtures'
import {ADD_COMMENT, LOAD_ALL_COMMENTS, LOAD_COMMENTS, START, SUCCESS} from '../constants'
import {arrayToMap} from '../utils'
import {Map, OrderedMap, Record} from 'immutable'

const CommentModel = Record({
    id: null,
    user: '',
    text: ''
})

const DefaultReducerState = Record({
    entities: new OrderedMap({}),
    loading: false,
    loaded: false
})

export default (comments = new DefaultReducerState(), action) => {
    const {type, payload, response, randomId} = action
    switch (type) {
        // case ADD_COMMENT:
        //     return comments.setIn(['entities', randomId], new CommentModel({
        //         ...payload.comment,
        //         id: randomId
        //     }))

        case LOAD_ALL_COMMENTS + START:
            return comments.set('loading', true)

        case LOAD_ALL_COMMENTS + SUCCESS:
            return comments
                //каждый раз перезатираешь комменты, используй mergeIn
                .set('entities', arrayToMap(response.records, CommentModel))
                //здесь так просто уже не выйдет, ведь ты загружаешь не все комменты сразу, а отдельно для каждой статьи
                .set('loading', false)
                .set('loaded', true)

        // case LOAD_COMMENTS + START:
        //     return comments.setIn(['entities', payload.id, 'loading'], true)

        // case LOAD_COMMENTS + SUCCESS:
        //     return comments.setIn(['entities', payload.id], new ArticleModel(payload.response))
    }

    return comments
}
