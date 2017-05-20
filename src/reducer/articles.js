import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE} from '../constants'

const articlesMap = defaultArticles.reduce((acc, article) => ({
    ...acc, [article.id]: article
}), {})

export default (articles = articlesMap, action) => {
    const {type, payload} = action
    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)
    }

    return articles
}
