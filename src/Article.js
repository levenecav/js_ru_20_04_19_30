import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    state = {
        isOpen: false
    }

    render() {
        const {article} = this.props;
        return (
            <div className="article">
                <h2 onClick={this.toggleOpen}>
                    {article.title}
                </h2>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        return this.state.isOpen && <div>
            <div>{this.props.article.text}</div>
            <CommentList comments={this.props.article.comments} />
        </div>
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}
