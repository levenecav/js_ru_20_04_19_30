import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {handleDayClick} from '../../AC'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {
    static propTypes = {
        articles: PropTypes.array,
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
    };

    state = {
        from: null,
        to: null
    }

    handleDayClick = (day) => {
        const {dateRange} = this.props;
        this.props.handleDayClick(DateUtils.addDayToRange(day, this.props.dateRange))
    }

    render() {
        const { from, to } = this.props.dateRange;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`

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