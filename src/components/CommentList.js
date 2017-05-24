import React, {Component} from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm/index'
import toggleOpen from '../decorators/toggleOpen'
import Loader from './Loader'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadComments} from '../AC/index'

class CommentList extends Component {
    static propTypes = {
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        article: PropTypes.object
    }

    componentWillReceiveProps({article: {id, comments = [], commentsloaded}, loadComments, isOpen}) {
        if ((isOpen && !this.props.isOpen) && !commentsloaded) loadComments(id)
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const linkText = isOpen ? 'hide comments' : 'show comments'

        return (
            <div>
                <a href="#" onClick={toggleOpen}>{linkText}</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {article: {id, comments = [], commentsloading: isLoading}, isOpen} = this.props;
        if (!isOpen) return null
        if (isLoading) return <Loader text="comments" />
        if (!comments.length) return <div><p>No comments yet</p><CommentForm articleId = {id}/></div>
        
        return (
            <div>
                <ul>
                    {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
                </ul>
                <CommentForm articleId = {id} />
            </div>
        )
    }
}

export default connect(null, { loadComments })(toggleOpen(CommentList))