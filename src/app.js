import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers}  from 'redux';
import * as reducers from './reducers';
import App from './components/App';
import Sidebar from './components/Sidebar';
import { Provider } from 'react-redux';

const store = createStore(combineReducers(reducers));

function run() {
    let state = store.getState();
    console.log(state);
    ReactDOM.render((
        <Provider store={store}>
        <App>
            <Sidebar/>
        </App>
        </Provider>
        ),
        document.getElementById('root')
    )
}

run();

store.subscribe(run);

