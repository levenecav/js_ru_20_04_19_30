import React, { Component } from 'react'
import PropTypes from 'prop-types'
import globalTranslations from '../locale'

console.log('--globalTranslations--', globalTranslations)

class Language extends Component {
    static propTypes = {

    };

    state = {
        lang: 'en'
    }

    static childContextTypes = {
        locale: PropTypes.object
    }

    getChildContext() {
        return {
            locale: globalTranslations[this.state.lang]
        }
    }

    render() {
        const {value} = this.props
        return (
            <div>
                <button onClick={this.setLang('en')}>English</button> <button onClick={this.setLang('ru')}>Русский</button>
            </div>
        )
    }

    setLang = (lang) => {
        // this.setState({lang});
    }
}

export default Language