import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.css'

class NewCommentForm extends Component {
    static propTypes = {
        
    }

    state = {
        name: '',
        comment: ''
    }

    render() {
        const {name, comment} = this.state;
        const textAreaCls = comment.length > 0 && comment.length < 5 ?
              'new-comment-form__textarea new-comment-form__textarea--error' :
              'new-comment-form__textarea';

        return (
            <div>
                <div className="new-comment-form__name">
                    <div className="new-comment-form__label">Name</div>
                    <input
                        className="new-comment-form__input"
                        type="text"
                        value={name}
                        onChange={this.handleChangeName} />
                </div>
                <div className="new-comment-form__comment">
                    <div className="new-comment-form__label">Text</div>
                    <textarea
                        className={textAreaCls}
                        rows="10"
                        cols="45"
                        name="text"
                        value={comment}
                        onChange={this.handleChangeComment}></textarea>
                </div>
                <div className="new-comment-form__button">
                    <button>Добавить комментарий</button>
                </div>
            </div>
        )
    }

    handleChangeName = ev => {
        if (ev.target.value.length > 20) return;
        this.setState({
            name: ev.target.value
        })
    }

    handleChangeComment = ev => {
        if (ev.target.value.length > 20) return;
        this.setState({
            comment: ev.target.value
        })
    }
}

export default NewCommentForm