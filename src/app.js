import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmounte, setStartDate, setEndtDate } from './actions/filtes';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses)
});
store.dispatch(addExpense({ description: 'Water bill' }));
store.dispatch(addExpense({ description: 'Gas bill' }));
store.dispatch(setTextFilter('Water'));
setTimeout(() => {
    store.dispatch(setTextFilter('Red'))
}, 5000)

// Gives access to the store to all the componets from AppRouter
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// console.log(getVislible())

// console.log(store.getState());
ReactDOM.render(jsx, document.getElementById('app'))     