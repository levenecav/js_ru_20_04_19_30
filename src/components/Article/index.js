import React, {Component} from 'react'
import CommnetList from '../CommentList'
import PropTypes from 'prop-types'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './style.css'
import {connect} from 'react-redux'
import {deleteArticle} from '../../AC/index'
import {articleSelectorFactory} from '../../selectors'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            comments: PropTypes.array.isRequired,
            date: PropTypes.string,
            id: PropTypes.string,
            text: PropTypes.string,
            title: PropTypes.string
        }),
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

/*
    componentWillMount() {
        console.log('---', 'mounting')
    }
*/
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isOpen != this.props.isOpen
    }

    componentWillUpdate() {
        // console.log('---', 'updating')
    }

    render() {
        const {article, toggleOpen} = this.props
        // console.log("~~~article~~~", article);
        return (
            <section>
                <h2 onClick={toggleOpen}>
                    {article.title}
                </h2>
                <a href = "#" onClick = {this.handleDelete}>delete me</a>
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
        return this.props.isOpen && (
            <div>
                {this.props.article.text}
                <CommnetList comments={this.props.article.comments}/>
            </div>
        )
    }
}

function createMapStateToProps() {
    const articleSelector = articleSelectorFactory()

    return function mapStateToProps(state, ownProps) {
        return {
            article: articleSelector(state, ownProps)
        }
    }
}

export default connect(createMapStateToProps, { deleteArticle })(Article)