import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'
import CommentsPagesList from '../components/CommentsPagesList'
import CommentsPagesListItem from '../components/CommentsPagesListItem'

class CommentsPaginatorPage extends Component {

    render() {
        const {match} = this.props;

        return (
            <div>
                {<CommentsPagesList match={match} />}
                {<Route path={`${match.url}/:number`} render={this.getActivePage} />}
            </div>
        )
    }

    getActivePage = ({match}) => {
        const {number} = match.params;
        return <CommentsPagesListItem number={number} />
    }
}

export default CommentsPaginatorPage