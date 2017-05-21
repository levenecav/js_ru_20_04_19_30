import cloneDeep from 'lodash/cloneDeep';
import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'

const articlesMap = defaultArticles.reduce((acc, article) => ({
    ...acc, [article.id]: article
}), {})

export default (articles = articlesMap, action) => {
    const {type, payload} = action;
    const newArticles = cloneDeep(articles);
    switch (type) {
        case DELETE_ARTICLE:
        	delete newArticles[payload.id];
            return newArticles;

        case ADD_COMMENT: {
            newArticles[payload.articleId].comments.push(payload.id);
            return newArticles;
    	}
    }

    return articles
}
