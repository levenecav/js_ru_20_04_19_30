import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {loadComments} from '../../AC'
import Loader from '../Loader'

import './style.css'

class CommentsPagesList extends Component {

    componentDidMount() {
        const {limit, offset, total} = this.props;
        if(!total) this.props.loadComments(limit, offset);
    }

    render() {
        const {total, match, loading, pagesArray} = this.props;
        if(loading && !total) return <Loader />
        if(!pagesArray) return null;
        
        const elements = pagesArray.map(page => <NavLink className="page-button" key={page.pageNumber} to={`${match.url}/${page.pageNumber}`} activeStyle={{color: 'red'}}>{page.pageNumber}</NavLink>)

        return (
            <div>{elements}</div>
        )
    }
}

CommentsPagesList.propTypes = {
    total: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    offset: PropTypes.number.isRequired,
    loading: PropTypes.bool,
    pagesArray: PropTypes.array.isRequired
}

export default connect((state) => ({
    total: state.pagination.total,
    limit: state.pagination.limit,
    offset: state.pagination.offset,
    loading: state.pagination.loading,
    pagesArray: state.pagination.pagesArray
}), {loadComments})(CommentsPagesList)