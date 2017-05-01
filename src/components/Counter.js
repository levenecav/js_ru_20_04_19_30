import React, {Component} from 'react'
// import store from '../store'
import {increment, dicrement} from '../AC'
import connect from '../decorators/connect'

class Counter extends Component {

    render() {
        return (
            <div>
                <h2>{this.props.count}</h2>
                <a href="#" onClick={this.handleIncrement}>increment</a>&nbsp;
                <a href="#" onClick={this.handleDicrement}>dicrement</a>
            </div>
        )
    }

    handleIncrement = ev => {
        // console.log('--ev--', ev)
        ev.preventDefault();
        // console.log('--this.props--', this.props)
        this.props.increment();
        // const action = increment();
        // store.dispatch(action);
    }

    handleDicrement = ev => {
        // console.log('--ev--', ev)
        ev.preventDefault();
        // console.log('--this.props--', this.props)
        this.props.dicrement();
        // const action = increment();
        // store.dispatch(action);
    }
}

export default connect(
    (state) => ({count: state.count}),
    {increment, dicrement}
)(Counter)