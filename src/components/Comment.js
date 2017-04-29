import React, {Component} from 'react'

export default function Comment({comment = {}}) {

    return (
        <div className="comment">
            <h5>{comment.user}</h5>
            <div>{comment.text}</div>
        </div>
    )
}
