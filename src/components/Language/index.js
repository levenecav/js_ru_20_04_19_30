import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Language extends Component {
    static propTypes = {
        setLang: PropTypes.func.isRequired,
    };

    // state = {
    //     lang: null
    // }

    onClick = (lang) => {
        this.props.setLang(lang);
        
    }

    render() {
        return (
            <div>
                <button className={"lang lang--en lang--global-" + this.props.lang} onClick={this.onClick.bind(this, 'en')}>English</button>
                <button className={"lang lang--ru lang--global-" + this.props.lang} onClick={this.onClick.bind(this, 'ru')}>Русский</button>
                <br/><br/>
            </div>
        )
    }
}

export default Language