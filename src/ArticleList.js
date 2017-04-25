import React, {Component} from 'react'
import Article from './Article'

export default class ArticleList extends Component {

    render() {
    	const {articles} = this.props;
        const elements = articles.map(article => <li key={article.id}><Article article={article}/></li>);
        return (
        	<div className="article-list">
            	<ul>{elements}</ul>
            </div>
        )
    }
}