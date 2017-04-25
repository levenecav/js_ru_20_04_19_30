import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        };
    }

    render() {
        const {article} = this.props;
        return (
            <div className="article">
                <h2 onClick={this.toggleOpen}>
                    {article.title}
                </h2>
                {this.state.isOpen && <div>
                    <div>{this.props.article.text}</div>
                    <CommentList comments={article.comments} />
                </div>}
            </div>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}
