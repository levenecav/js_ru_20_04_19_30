import {createSelector} from 'reselect'

export const articlesGetter = state => state.articles
export const filtersGetter = state => state.filters
export const commentsGetter = state => state.comments
export const idGetter = (state, props) => props.id
export const articleIdGetter = (state, props) => props.id

export const filteredArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    // console.log('---', 'recalculate articles')
    const {selected, dateRange: {from, to}} = filters
    const newArticles = {...articles};
    for (let key in newArticles) {
        const published = Date.parse(newArticles[key].date);
        if(
            (selected.length && !selected.includes(key)) ||
            (from && to && (published < from || published > to)) ||
            (from && !to && (published < from))
        ) delete newArticles[key];
    }
    return newArticles;
})

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    // console.log('---', 'recalc comment', id)
    return comments[id]
})

export const articleSelectorFactory = () => createSelector(articlesGetter, articleIdGetter, (articles, id) => {
    // console.log('---', 'recalc comment', id)
    return articles[id]
})