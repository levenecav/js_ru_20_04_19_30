import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {selectArticle} from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    state = {
        /*selection: null*/
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <Select options={options}
                    value={this.props.selection}
                    onChange={this.handleSelectionChange}
                    multi={true} />
        )
    }

    handleSelectionChange = selection => {
        this.props.selectArticle(selection);
        // this.setState({ selection });
    }
}

export default connect((state) => ({
   articles: state.articles,
   selection: state.select
}), { selectArticle })(SelectFilter)