import React, {Component} from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class App extends Component {

	state = {
		counter: 0,
        selection: null
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
            	<Select options={options} value={this.state.selection} onChange={this.changeSelection} multi={true} />
            	<a href="#" onClick={this.updateCounter}>update chart</a>
                <ArticleList articles={this.props.articles} />
                <Chart articles={this.props.articles} />
            </div>
        )
    }

    changeSelection = selection => this.setState({selection})
}

export default App