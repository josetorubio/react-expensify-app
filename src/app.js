import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRoute'
import configureStore from './stores/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore();

const expenseOne = store.dispatch(addExpense({description:'Water bill', amount: 4500 }));
const expenseTwo = store.dispatch(addExpense({description:'Gas bill', createdAt:1000}));
const expenseThree = store.dispatch(addExpense({description:'Rent', amount: 109500 }));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));