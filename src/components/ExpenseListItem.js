import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// load a locale
numeral.register('locale', 'pl', {
    delimiters: {
        thousands: ' ',
        decimal: ','
    },
    currency: {
        symbol: 'zł'
    }
});

// switch between locales
numeral.locale('pl');

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`} >
            <h3>{description}</h3>
        </Link>
        <p>Amount: {numeral(amount / 100).format('0,0[.]00 $')}</p>
        <p>Created at: {moment(createdAt).format('MMMM Do, YYYY')}</p>
    </div>
);

export default ExpenseListItem;