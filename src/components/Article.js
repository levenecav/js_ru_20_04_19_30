import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }),
        // from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func.isRequired
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isOpen != this.props.isOpen;
    }

    componentWillUpdate() {
        console.log('~~~ updating')
    }

    render() {
        const {
            article,
            toggleOpen
        } = this.props;

        return (
            <div className="article">
                <h2 onClick={toggleOpen}>
                    Some title {article.title}
                </h2>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        return this.props.isOpen && <div>
            <div>{this.props.article.text}</div>
            <CommentList comments={this.props.article.comments} />
        </div>
    }
}

export default Article