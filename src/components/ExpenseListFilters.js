import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filtes';

const ExpneseListFilters = (props) => (
    <div>
        <input
            type='text'
            value={props.filters.text}
            onChange={(event) => {
                props.dispatch(setTextFilter(e.target.value));
                console.log(e.target.value);
            }} />
        <select
            value={props.filters.sortBY}
            onChange={(event) => {
                if (event.target.value === 'date') {
                    props.dispatch(sortByDate());
                    console.log(event.target.value)
                } else if (event.target.value === 'amount') {
                    props.dispatch(sortByAmount());
                    console.log(event.target.value)
                }
            }}>
            <option value="date">Date</option>
            <option value="amount" >Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpneseListFilters); 