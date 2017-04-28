import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
    state = {
        isOpen: false
    }

    render() {
        const linkText = this.state.isOpen ? 'Hide comments' : 'Show comments';

        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{linkText}</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;
        const {comments} = this.props;
        if (!comments || !comments.length) return <p>No comments</p>;
        return (
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)}
            </ul>
        )
    }

    toggleOpen = ev=> {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

export default CommentList