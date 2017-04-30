import React, {Component} from 'react'
import Article from './Article'
import toggleArticle from '../decorators/toggleArticle'
import PropTypes from 'prop-types'

class ArticleList extends Component {

    render() {
        const elements = this.props.articles.map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id == this.props.openArticleId}
                     toggleOpen={this.props.toggleArticle(article.id)}/>
        </li>)
        return (
            <ul>
                {elements}
            </ul>
        )
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array,
    //from toggleOpen decorator
    openArticleId: PropTypes.string,
    toggleArticle: PropTypes.func
}

export default toggleArticle(ArticleList);