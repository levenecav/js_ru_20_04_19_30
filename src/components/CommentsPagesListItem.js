import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadComments} from '../AC'
import Loader from './Loader'

class CommentsPagesListItem extends Component {

    componentWillReceiveProps({number, limit, offset, comments}) {
        if(number !== this.props.number && !comments) {
            this.props.loadComments(limit, limit * (number - 1));
        }
    }

    render() {
        const {comments, loading} = this.props;
        if(!comments) return <Loader />

        const elements = comments.map(comment => <li key={comment.id}>
            <p>{comment.text} <b>by {comment.user}</b></p>
        </li>)

        return (
            <ul>{elements}</ul>
        )
    }
}

CommentsPagesListItem.propTypes = {
    limit: PropTypes.number.isRequired,
    offset: PropTypes.number.isRequired,
    loading: PropTypes.bool
}

export default connect((state, {number}) => ({
    comments: state.pagination.getIn(['entities', number]),
    limit: state.pagination.limit,
    offset: state.pagination.offset,
    loading: state.pagination.loading
}), {loadComments})(CommentsPagesListItem)