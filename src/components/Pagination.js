import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {increment} from '../AC/index'
import {connect} from 'react-redux'
import {mapToArr} from '../utils'

class Pagination extends Component {
    static propTypes = {

    };

    render() {
        // const elements = comments.map(article => <li key={article.id}>
        //     <NavLink to = {`${match.url}/${article.id}`} activeStyle={{color: 'red'}}>{article.title}</NavLink>
        // </li>)

        const {comments, total, match} = this.props;
        console.log('--comments, total--', comments, total)

        return (
            <div>
                Pagination Component
                {/*elements*/}
            </div>
        )
    }
}

export default connect((state) => ({
    comments: mapToArr(state.pagination.entities),
    total: state.pagination.total
}))(Pagination)