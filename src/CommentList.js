import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
    }

    render() {
        const {comments} = this.props;
        let elements;
        if (comments) {
            elements = comments.map(comment => <div key={comment.id}><Comment comment={comment}/></div>);
        };

        return (
            <div className="comment-list">
                {/*не пиши много кода внутри JSX, очень быстро становится нечитабельным*/}
                {elements && <h4 onClick={this.toggleOpen}>
                    {this.state.isOpen ? 'Hide comments' : 'Show comments'}
                </h4>}
                {this.state.isOpen && <div>
                    <ul>
                        {elements}
                    </ul>
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
