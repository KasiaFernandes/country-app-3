import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';
import DevTools from './DevTools';

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
);

/*
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';
import { getCountries } from './actions/actions-countries.js';

render(
    <div>
        <h1>Inicjalizacja projektu</h1>
        <Provider store={store}>
            <DevTools />
        </Provider>
    </div>,
    document.getElementById('root')
);

store.dispatch(getCountries());
*/