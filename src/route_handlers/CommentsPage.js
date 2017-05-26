import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
// import Article from '../components/Article'
import {Route} from 'react-router-dom'
import {loadComments} from '../AC'
import {mapToArr} from '../utils'
import Pagination from '../components/Pagination'


class CommentsPage extends Component {
    static propTypes = {

    };

    componentDidMount() {
        const {limit, offset} = this.props;
        this.props.loadComments(limit, offset);
    }

    componentWillReceiveProps({total}) {
        if(total) this.setState({total});
    }

    render() {
        const {comments, total, match} = this.props;
        // console.log('--comments, total--', comments, total)
        return (
            <div>
                <Pagination />
            </div>
        )
    }
}

export default connect((state) => ({
    comments: mapToArr(state.pagination.entities),
    total: state.pagination.total,
    limit: state.pagination.limit,
    offset: state.pagination.offset
}), {loadComments})(CommentsPage)