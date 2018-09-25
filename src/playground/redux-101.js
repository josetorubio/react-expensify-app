import { createStore } from 'redux';

// Reducers
// 1. Reducers are pure functions (output depends only on input parameters)
// 2. Never change state or action


const countReducer = ( state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1 ;
            return {count: state.count + incrementBy};
            break;
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1 ;
            return {count: state.count - decrementBy};
            break;
        case 'SET':
        const count = typeof action.decrementBy === 'number' ? action.count : 0 ;
            return {count: action.count};
        break;
        case 'RESET':
            return {count: 0}
            break;
        default:
            return state;
            break;
    }
};

const store = createStore(countReducer);

// Action generators - functions that return action objects


const incrementCount = ( { incrementBy = 1 } = {} ) => ({
    type: 'INCREMENT' ,
    incrementBy
});

const decrementCount = ( { decrementBy = 1} = {} ) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count = 0} = {} ) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET',
    count: 0
});


const unsuscribe = store.subscribe(()=>{
    console.log(store.getState());
});

console.log(store.getState());

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());
store.dispatch(incrementCount());
console.log(store.getState());

store.dispatch(resetCount());
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(setCount({count: 1000}));
console.log(store.getState());
