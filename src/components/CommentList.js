import React, {Component} from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm/index'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadComments} from '../AC/index'

class CommentList extends Component {
    static propTypes = {
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        article: PropTypes.object
    }

    // componentWillReceiveProps({article: {id, comments = []}, loadComments, isOpen}) {
    //     if (isOpen && !this.props.isOpen) loadComments(id)
    // }

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
        const {article: {id, comments = []}, isOpen} = this.props;
        if (!isOpen) return null
        if (!comments.length) return <div><p>No comments yet</p><CommentForm articleId = {id}/></div>
        return (
            <div>
                <ul>
                    {comments.map(id => <li key={id}><Comment id={id}/></li>)}
                </ul>
                <CommentForm articleId = {id} />
            </div>
        )
    }
}

export default connect(null, { loadComments })(toggleOpen(CommentList))