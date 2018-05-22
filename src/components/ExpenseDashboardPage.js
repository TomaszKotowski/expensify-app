import React from 'react';
import ExpenseList from './ExpenseList'
import ExpneseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpneseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;