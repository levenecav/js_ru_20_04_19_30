import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticlesPage from '../route_handlers/ArticlesPage'
import UserForm from './UserForm'
import Language from './Language'
import Filters from './Filters/index'
import Counter from './Counter'
import T from './T'
import ErrorPage from './ErrorPage'
import CommentsPage from '../route_handlers/CommentsPage'
import NotFoundPage from '../route_handlers/NotFoundPage'
import {Redirect, Route, NavLink, Switch} from 'react-router-dom'
import {ConnectedRouter as Router} from 'react-router-redux'
import history from '../history'
import Locale from '../decorators/locale'

class App extends Component {
    static propTypes = {
        
    };

    state = {
        username: ''
    }

    static childContextTypes = {
        user: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.username
        }
    }

    handleUserChange = (username) => this.setState({ username })

    render() {
        return (
            <Router history = {history}>
                <div>
                    <Language setLang={this.props.setLang} lang={this.props.lang} />
                    <UserForm value = {this.state.username} onChange = {this.handleUserChange} />
                    <ul>
                        <li><NavLink to = '/counter' activeStyle = {{color: 'red'}}><T>{'COUNTER'}</T></NavLink></li>
                        <li><NavLink to = '/articles' activeStyle = {{color: 'red'}}><T>{'ARTICLES'}</T></NavLink></li>
                        <li><NavLink to = '/filters' activeStyle = {{color: 'red'}}><T>{'FILTERS'}</T></NavLink></li>
                    </ul>
                    <Switch>
                        <Route path = '/counter' component = {Counter} exact />
                        <Route path = '/filters' component = {Filters} />
                        <Route path = '/articles/new' render = {this.getSomeArticleText} />
                        <Route path = '/articles' component = {ArticlesPage} />
                        <Route path = '/comments' component = {CommentsPage} />
                        <Route path = '/error' component = {ErrorPage} />
                        <Route path = '*' component = {NotFoundPage}/>
                    </Switch>
                </div>
            </Router>
        )
    }

    getSomeArticleText = () => {
        return <h1>New Article Place</h1>
    }
}

export default Locale(App)