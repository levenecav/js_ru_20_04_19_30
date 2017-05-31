import React, {Component} from 'react'
import CommnetList from '../CommentList'
import PropTypes from 'prop-types'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Loader from '../Loader'
import T from '../T'
import './style.css'
import {connect} from 'react-redux'
import {deleteArticle, loadArticle} from '../../AC/index'

class Article extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        article: PropTypes.shape({
            title: PropTypes.string,
            text: PropTypes.string,
            comments: PropTypes.array
        }),
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    static contextTypes = {
        user: PropTypes.string
    }

    componentDidMount() {
        const {article, id, loadArticle} = this.props;
        if(!article || (article && !article.text)) loadArticle(id);
    }

    componentWillUpdate() {
        console.log('---', 'updating')
    }

    render() {
        console.log('---', 3)
        const {article, toggleOpen} = this.props
        if (article && article.loading) return <Loader />
        if (!article || (article && !article.text)) return null

        return (
            <section>
                <h2 onClick={toggleOpen}>
                    {article.title}
                </h2>
                <h3>
                    User: {this.context.user}
                </h3>
                <a href = "#" onClick = {this.handleDelete}><T>{'DELETE_ME'}</T></a>
                <CSSTransitionGroup
                    transitionName = "article"
                    transitionEnterTimeout = {500}
                    transitionLeaveTimeout = {300}
                >
                    {this.getBody()}
                </CSSTransitionGroup>
            </section>
        )
    }

    handleDelete = ev => {
        ev.preventDefault()
        const { deleteArticle, article } = this.props
        deleteArticle(article.id)
    }

    getBody() {
        const {isOpen, article} = this.props
        if (!isOpen) return null;
        return (
            <div>
                {this.props.article.text}
                <CommnetList article = {this.props.article}/>
            </div>
        )
    }
}

export default connect((state, {id}) => ({
    article: state.articles.getIn(['entities', id])
}), { deleteArticle, loadArticle }, null, {pure: false})(Article)