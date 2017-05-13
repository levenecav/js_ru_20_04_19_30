import React, {Component} from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './article.css'

class Article extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isOpen != this.props.isOpen
    }

    render() {
        const {article, toggleOpen} = this.props
        return (
            <section>
                <h2 onClick={toggleOpen}>
                    {article.title}
                </h2>
                <CSSTransitionGroup
                    transitionName="article"
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1300}>
                    {this.getBody()}
                </CSSTransitionGroup>
            </section>
        )
    }

    getBody() {
        return this.props.isOpen && (
            <div>
                {this.props.article.text}
                <CommentList comments={this.props.article.comments}/>
            </div>
        )
    }
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        comments: PropTypes.array
    }),
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}

export default Article