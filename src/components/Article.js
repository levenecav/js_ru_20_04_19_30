import React, {Component} from 'react'
import CommnetList from './CommentList'
import {deleteArticle} from '../AC/articles'
import PropTypes from 'prop-types'

class Article extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isOpen != this.props.isOpen
    }

    render() {
        const {article, toggleOpen} = this.props
        return (
            <div>
                <h2 onClick={toggleOpen}>
                    {article.title}

                </h2>
                <a href="#" onClick={this.handleDelete}>Delete me</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        return this.props.isOpen && (
            <div>
                {this.props.article.text}
                <CommnetList comments={this.props.article.comments}/>
            </div>
        )
    }

    handleDelete = (ev) => {
        ev && ev.preventDefault && ev.preventDefault();
        deleteArticle(this.props.article.id);
        // console.log('--this.props.article.id--')
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