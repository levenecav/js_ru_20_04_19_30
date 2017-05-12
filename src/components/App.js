import React, {Component} from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import PropTypes from 'prop-types'

class App extends Component {

    render() {
        return (
            <div>
                <ArticleList articles={this.props.articles} />
                <Chart articles={this.props.articles} />
            </div>
        )
    }
}

export default App