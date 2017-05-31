import React from 'react'
import PropTypes from 'prop-types'
import globalTranslations from '../locale'

export default (CustomComponent) => class LocaleDecorator extends React.Component {
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

    setLang = (lang) => this.setState({ lang })

    render() {
        return <CustomComponent setLang={this.setLang} lang={this.state.lang} />
    }
}