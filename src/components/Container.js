import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {articleStore} from '../stores'
import ArticleList from './ArticleList'

console.log('--articleStore--', articleStore)

class Container extends Component {
    constructor() {
        super()
        this.state = {
            articles: articleStore.getAll()
        }
    }

    componentDidMount() {
        articleStore.addChangeListener(this.handleChange)
    }

    componentWillUnmount() {
        articleStore.removeChangeListener(this.handleChange)
    }

    handleChange = () => {
        this.setState({
            articles: articleStore.getAll()
        })
    }

    render() {
        return <ArticleList articles={this.state.articles} />
    }
}

export default Container;