import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {handleDayClick} from '../../AC'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {

    state = {
        from: null,
        to: null
    }

    handleDayClick = (day) => {
        // console.log("~~~day~~~", day);
        const {dateRange} = this.props;
        this.props.handleDayClick(DateUtils.addDayToRange(day, this.props.dateRange))
        // this.setState(DateUtils.addDayToRange(day, this.state));
    }

    render() {
        const { from, to } = this.props.dateRange;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`

        // console.log("~~~from, to~~~", from, to);
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick } />
                {selectedRange}
            </div>
        );
    }

}

export default connect((state) => ({
   articles: state.articles,
   dateRange: state.dateRange
}), { handleDayClick })(DateRange)