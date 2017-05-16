import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article/index'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'

class ArticleList extends Component {
    componentDidMount() {
        const ref = this.refs[this.props.articles[0].id]
        // console.log('---', ref, findDOMNode(ref))
    }


    render() {
        const {articles, toggleOpenItem, isItemOpened, selection, dateRange} = this.props;
        const {from, to} = dateRange;
        if(from) {console.log('--from.toISOString()--', from.toISOString())};
        const {date} = articles;

        

        // console.log('--from, to--', from, to);
        // console.log('--articles--', articles);

        const filteredArticles = articles.filter(article => {
            let approval;
            if(!selection.length) {

                console.log('--article.date--', article.date);



                return true;
            } else {
                selection.forEach(item => {
                    if(item.value === article.id) approval = true;
                });
            };
            return approval;
        });

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
    isItemOpened: PropTypes.func.isRequired
}

export default connect((state) => ({
   articles: state.articles,
   selection: state.select,
   dateRange: state.dateRange
}))(accordion(ArticleList))