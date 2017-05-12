import React, {Component} from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import PropTypes from 'prop-types'
import Select from 'react-select'

class App extends Component {

	state = {
		counter: 0
	}

	updateCounter = (ev) => {
		ev.preventDefault();
		this.setState({
			counter: this.state.counter + 1
		})
	}

    render() {
    	const options = this.props.articles.map(article => ({
    		label: article.title,
    		value: article.id
    	}))
        return (
            <div>
            	<Select options={options} />
            	<a href="#" onClick={this.updateCounter}>update chart</a>
                <ArticleList articles={this.props.articles} />
                <Chart articles={this.props.articles} />
            </div>
        )
    }
}

export default App