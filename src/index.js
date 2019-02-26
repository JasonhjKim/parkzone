import { AppRegistry } from 'react-native';
import { name as appName } from '../app.json';
import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from './reducers';
import AppNavigation from './navigations';

const logger = createLogger({
    timestamps: true,
    duration: true,
})

const store = createStore(reducers, applyMiddleware(reduxThunk, logger))

class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        )
    }
}

AppRegistry.registerComponent(appName, () => Main);
