import React, {Component} from 'react'
import store from '../store'

// console.log('--store--', store)

export default (mapStateToProps, actionCreators) => (Component) => class Connected extends Component {
    constructor(props) {
        super()

                                            // [increment]
        this.actionCreatorsWithDispatch = Object.keys(actionCreators).reduce((acc, key) => {
            return {
                ...acc,
                [key]: (...args) => store.dispatch(actionCreators[key](...args))
            }
        }, {})

        this.state = mapStateToProps(store.getState())
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(this.handleStoreChange)
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleStoreChange = () => {
        this.setState(mapStateToProps(store.getState()))
    }



    render() {
        return <Component {...this.props} {...this.state}  {...this.actionCreatorsWithDispatch} />
    }
}