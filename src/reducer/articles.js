import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE, START, SUCCESS, LOAD_COMMENTS} from '../constants'
import {arrayToMap} from '../utils'
import {Map, OrderedMap, Record, List} from 'immutable'

const ArticleModel = Record({
    id: null,
    date: null,
    title: null,
    text: '',
    comments: List([]),
    loading: false,
    loaded: false,
    commentsloading: false,
    commentsloaded: false
})

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

export default (articles = new DefaultReducerState(), action) => {
    const {type, payload, response, randomId} = action
    switch (type) {
        case DELETE_ARTICLE:
            return articles.deleteIn(['entities', payload.id])

        case ADD_COMMENT:
            return articles.updateIn(
                ['entities', payload.articleId, 'comments'],
                (comments) => comments.concat(new CommentModel({
                    ...payload.comment,
                    id: randomId
                }))
            )
            // return articles.updateIn(
            //     ['entities', payload.articleId, 'comments'],
            //     (comments) => comments.concat(randomId)
            // )

        case LOAD_ALL_ARTICLES + START:
            return articles.set('loading', true)

        case LOAD_ALL_ARTICLES + SUCCESS:
            return articles
                .set('entities', arrayToMap(response, ArticleModel))
                .set('loading', false)
                .set('loaded', true)

        case LOAD_ARTICLE + START:
            return articles.setIn(['entities', payload.id, 'loading'], true)

        case LOAD_ARTICLE + SUCCESS:
            return articles.setIn(['entities', payload.id], new ArticleModel({...payload.response, comments: [], loaded: true}))

        case LOAD_COMMENTS + START:
            return articles.setIn(['entities', payload.articleId, 'commentsloading'], true)

        case LOAD_COMMENTS + SUCCESS:
            return articles
                .setIn(['entities', payload.articleId, 'comments'], payload.response)
                .setIn(['entities', payload.articleId, 'commentsloaded'], true)
                .setIn(['entities', payload.articleId, 'commentsloading'], false)
            // return articles.updateIn(
            //     ['entities', payload.articleId, 'comments'],
            //     (comments) => comments.concat(payload.response)
            // ).setIn(['entities', payload.articleId, 'commentsloaded'], true)
            // return comments.setIn(['entities', payload.id], new ArticleModel(payload.response))
    }

    return articles
}
