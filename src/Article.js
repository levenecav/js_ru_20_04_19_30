import React, {Component} from 'react'

export default class Article extends Component {
/*
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }
*/
    state = {
        isOpen: false,
        foo: 'bar'
    }

    render() {
        const {article} = this.props
        return (
            <section>
                <h2 onClick={this.toggleOpen}>
                    {article.title}
                </h2>
                {this.getBody()}
            </section>
        )
    }

    getBody() {
        return this.state.isOpen && <div>{this.props.article.text}</div>
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

/*
export default function Article(props) {
    const {article} = props
    return (
        <section>
            <h2>
                {article.title}
            </h2>
            <div>
                {article.text}
            </div>
        </section>
    )
}*/
