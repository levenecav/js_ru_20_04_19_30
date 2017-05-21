import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addComment} from '../../AC/index'
import './style.css'

class CommentForm extends Component {
    static propTypes = {

    };

    state = {
        user: '',
        comment: ''
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                user: <input value = {this.state.user}
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')} />
                comment: <input value = {this.state.comment}
                                onChange = {this.handleChange('comment')}
                                className = {this.getClassName('comment')} />
                <input disabled={this.getDisabled()} type = "submit" value = "submit"/>
            </form>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault()
        console.log('---', this.state);

        this.props.addComment(this.props.articleId, this.state.user, this.state.comment);

        this.setState({
            user: '',
            comment: ''
        });
    }

    getClassName = type => this.state[type].length && this.state[type].length < 10 ? 'form-input__error' : ''
    getDisabled = () => {
        const {user, comment} = this.state;
        return (user.length && comment.length && user.length > 0 && comment.length > 0) ? false : true
    }

    handleChange = type => ev => {
        const {value} = ev.target
        if (value.length > 20) return
        this.setState({
            [type]: value
        })
    }
}

export default connect(null, { addComment })(CommentForm)