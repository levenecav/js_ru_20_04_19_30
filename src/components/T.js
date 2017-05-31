import React, { Component } from 'react'
import PropTypes from 'prop-types'
import globalTranslations from '../locale'

console.log('--globalTranslations--', globalTranslations)

class T extends Component {
    static contextTypes = {
        locale: PropTypes.object
    }

    render() {
        return (
            <span>{this.context.locale[this.props.children.toLowerCase()]}</span>
        )
    }
}

export default T