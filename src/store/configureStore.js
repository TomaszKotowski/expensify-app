// Store creation
import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses.js'
import filterReducer from '../reducers/filters.js'

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer
        })
    );
    return store;
};

