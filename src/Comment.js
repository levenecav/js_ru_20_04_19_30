import React, {Component} from 'react'

//Это можно сделать Functional Component, по возможности используй их
export default class Comment extends Component {
    
    render() {
        const {comment} = this.props;
        return (
            <div className="comment">
                <h5>{comment.user}</h5>
                <div>{comment.text}</div>
            </div>
        )
    }
}
