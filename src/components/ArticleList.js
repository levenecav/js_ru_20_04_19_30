import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article/index'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'

class ArticleList extends Component {
    componentDidMount() {
        const ref = this.refs[this.props.articles[0].id]
    }

    filterBySelection = (list) => {
        const {selection} = this.props;
        return list.filter(listItem => {
            let approval;
            if(!selection.length) {
                return true;
            } else {
                selection.forEach(selectionItem => {
                    if(selectionItem.value === listItem.id) approval = true;
                });
            };
            return approval;
        });
    }

    filterByDateRange = (list) => {
        const {dateRange} = this.props;
        return list.filter(listItem => {
            let {from, to} = dateRange;
            if(from != null) from = from.toISOString();
            if(to != null) to = to.toISOString();
            if((listItem.date > from || from === null) && (listItem.date < to || to === null)) return true;
        });
    }

    render() {
        const {articles, toggleOpenItem, isItemOpened, selection, dateRange} = this.props;
        const filteredArticles = this.filterByDateRange(this.filterBySelection(articles));

        const elements = filteredArticles.map(article => <li key={article.id}>
            <Article article = {article}
                     isOpen = {isItemOpened(article.id)}
                     toggleOpen = {toggleOpenItem(article.id)}
                     ref = {article.id} />
        </li>)
        return (
            <ul ref={this.getContainerRef}>
                {elements}
            </ul>
        )
    }

    getContainerRef = ref => {
        this.list = ref
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array,
    //from accordion decorator
    toggleOpenItem: PropTypes.func.isRequired,
    isItemOpened: PropTypes.func.isRequired,
    selection: PropTypes.array.isRequired,
    dateRange: PropTypes.shape({
        from: React.PropTypes.oneOfType([
            React.PropTypes.any,
            React.PropTypes.string
        ]),
        to: React.PropTypes.oneOfType([
            React.PropTypes.any,
            React.PropTypes.string
        ])
    })
}

export default connect((state) => ({
   articles: state.articles,
   selection: state.selection,
   dateRange: state.dateRange
}))(accordion(ArticleList))