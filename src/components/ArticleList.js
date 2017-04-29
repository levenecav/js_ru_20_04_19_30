import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'

class ArticleList extends Component {
	state = {
		openArticleId: null
	}

    render() {
    	const elements = this.props.articles.map(article => <li key={article.id}>
    		<Article
    			article={article}
    			isOpen={article.id == this.state.openArticleId}
    			toggleOpen={this.toggleArticle.bind(this, article.id)} />
    	</li>);

	    return (
	    	<ul>
	    		{elements}
	    	</ul>
	    )
    }

    toggleArticle(id) {
    	this.setState({
    		openArticleId: id
    	})
    }
}

ArticleList.propTypes = {
	articles: PropTypes.array
}

export default ArticleList