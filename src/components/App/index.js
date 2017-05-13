import React, { Component } from 'react'
import ArticleList from '../ArticleList'
import Chart from '../Chart'
import UserForm from '../UserForm'
import Select from 'react-select'
import DayPicker, { DateUtils } from 'react-day-picker'
import moment from 'moment'

import 'react-select/dist/react-select.css'
import 'react-day-picker/lib/style.css'
import './style.css'

class App extends Component {
    static propTypes = {

    };

    state = {
        counter: 0,
        selection: null,
        from: null,
        to: null
    }

    updateCounter = (ev) => {
        ev.preventDefault()
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        const {from, to} = this.state;

        return (
            <div>
                <UserForm />
                <a href = "#" onClick = {this.updateCounter}>update chart</a>
                <Select options = {options} value = {this.state.selection}
                        onChange = {this.handleSelectionChange}
                        multi = {true} />
                <ArticleList articles = {this.props.articles} />
                <Chart articles = {this.props.articles} key={this.state.counter}/>

                // DAY PICKER
                <div className="day-picker">
                    {this.getFirstDayScript()}
                    {this.getSecondDayScript()}
                    {this.getRangeScript()}
                    <DayPicker
                        numberOfMonths={1}
                        selectedDays={[from, { from, to }]}
                        onDayClick={this.handleDayClick} />
                </div>
            </div>
        )
    }

    getFirstDayScript() {
        return !this.state.from && !this.state.to && <p>Укажите первую дату.</p>
    }

    getSecondDayScript() {
        return this.state.from && !this.state.to && <p>Укажите вторую дату.</p>
    }

    getRangeScript() {
        const {from, to} = this.state;
        return from && to && <div>
            Выбран диапазон с {moment(from).format('DD.MM.YYYY')} по {moment(to).format('DD.MM.YYYY')}. <a href="." onClick={this.handleResetClick}>Сбросить</a>
        </div>
    }

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };

    handleResetClick = ev => {
        ev.preventDefault();
        this.setState({
            from: null,
            to: null
        });
    };

    handleSelectionChange = selection => this.setState({ selection })
}

export default App