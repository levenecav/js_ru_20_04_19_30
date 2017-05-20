import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'

const articlesMap = defaultArticles.reduce((acc, article) => ({
    ...acc, [article.id]: article
}), {})

export default (articles = articlesMap, action) => {
    const {type, payload} = action
    switch (type) {
        case DELETE_ARTICLE:
        	delete articles[payload.id];
            return articles;

        case ADD_COMMENT: {
        	// console.log('--articles[payload.articleId].comments--', articles[payload.articleId].comments)
        	articles[payload.articleId].comments.push(payload.id);
        	// console.log('--articles[payload.articleId].comments--', articles[payload.articleId].comments)
    		return {...articles};
    	}
    }

    return articles
}
