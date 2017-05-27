import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticlesPage from '../route_handlers/ArticlesPage'
import CommentsPaginatorPage from '../route_handlers/CommentsPaginatorPage'
import UserForm from './UserForm'
import Filters from './Filters/index'
import Counter from './Counter'
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from 'react-router-dom'

class App extends Component {
    static propTypes = {
    };

    state = {
        counter: 0
    }

    render() {
        return (
            <Router>
                <div>
                    <UserForm />
                    <ul>
                        <li><NavLink to = '/counter' activeStyle = {{color: 'red'}}>Counter</NavLink></li>
                        <li><NavLink to = '/articles' activeStyle = {{color: 'red'}}>Articles</NavLink></li>
                        <li><NavLink to = '/filters' activeStyle = {{color: 'red'}}>Filters</NavLink></li>
                        <li><NavLink to = '/comments' activeStyle = {{color: 'red'}}>Comments</NavLink></li>
                    </ul>
                    <Switch>
                        <Route path = '/counter' component = {Counter} exact />
                        <Route path = '/filters' component = {Filters} />
                        <Route path = '/articles/new' render = {this.getSomeArticleText} />
                        <Route path = '/articles' component = {ArticlesPage} />
                        <Route path='/comments' component={CommentsPaginatorPage}/>
                    </Switch>
                </div>
            </Router>
        )
    }

    getSomeArticleText = () => {
        return <h1>New Article Place</h1>
    }
}

export default App