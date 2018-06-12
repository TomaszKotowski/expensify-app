import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filtes';

class ExpneseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChanged = (calendarFocused) => {
        this.setState(()=> ({ calendarFocused }))
    };
    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.props.filters.text}
                    onChange={(event) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                        console.log(e.target.value);
                    }} />
                <select
                    value={this.props.filters.sortBY}
                    onChange={(event) => {
                        if (event.target.value === 'date') {
                            this.props.dispatch(sortByDate());
                            console.log(event.target.value)
                        } else if (event.target.value === 'amount') {
                            this.props.dispatch(sortByAmount());
                            console.log(event.target.value)
                        }
                    }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChanged}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={ () => false } 
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpneseListFilters); 