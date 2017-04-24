import React from 'react'

export default (props) => {
	const {article} = props;
	return (
		<section>
			<h2>{article.title}</h2>
			<div>{article.text}</div>
		</section>
	)
}