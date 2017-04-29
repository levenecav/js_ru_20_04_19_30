import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

function CommentList (props) {
    const {
        isOpen,
        toggleOpen
    } = props;
    const linkText = isOpen ? 'Hide comments' : 'Show comments';

    return (
        <div>
            <a href="#" onClick={toggleOpen}>{linkText}</a>
            {getBody(props)}
        </div>
    )
}

function getBody(props) {
    const {
        comments = [],
        isOpen
    } = props;

    if (!isOpen) return null;
    if (!comments || !comments.length) return <p>No comments</p>;
    return (
        <ul>
            {comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)}
        </ul>
    )
}

export default toggleOpen(CommentList)