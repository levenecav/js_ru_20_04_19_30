import React, {Component} from 'react'
import Article from './Article/index'
import Loader from './Loader'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'
import {filteredArticlesSelector} from '../selectors'
import {loadAllArticles, loadAllComments} from '../AC'

class ArticleList extends Component { 
    componentDidMount() {
        const {
            isArticlesLoaded,
            isArticlesLoading,
            loadAllArticles,

            isCommentsLoaded,
            isCommentsLoading,
            loadAllComments
        } = this.props
        if (!isArticlesLoaded && !isArticlesLoading) loadAllArticles();
        // if (!isCommentsLoaded && !isCommentsLoading) loadAllComments();
    }


    render() {
        const {articles, isArticlesLoading, isCommentsLoading, toggleOpenItem, isItemOpened} = this.props
        if (isArticlesLoading) return <Loader text="articles list" />

        const elements = articles.map(article => <li key={article.id}>
            <Article article = {article}
                     isOpen = {isItemOpened(article.id)}
                     toggleOpen = {toggleOpenItem(article.id)}
                     ref = {article.id}
            />
        </li>)
        return (
            <ul ref={this.getContainerRef}>
                {elements}
            </ul>
        )
    }

    getContainerRef = ref => {
        this.list = ref
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array,
    //from accordion decorator
    toggleOpenItem: PropTypes.func.isRequired,
    isItemOpened: PropTypes.func.isRequired
}

export default connect((state) => ({
    articles: filteredArticlesSelector(state),
    isArticlesLoaded: state.articles.loaded,
    isArticlesLoading: state.articles.loading,
    isCommentsLoaded: state.comments.loaded,
    isCommentsLoading: state.articles.loading,
}), {loadAllArticles, loadAllComments})(accordion(ArticleList))