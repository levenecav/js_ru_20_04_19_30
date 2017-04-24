import React from 'react'
import Article from './Article'

export default (props) => {
	const {articles} = props;
	const {elements} = map.articles(element => {
		<li><Article article={element}/></li>
	});
	return (
		<ul>
			{elements}
		</ul>
	)
}