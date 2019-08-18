import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie9';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from 'reducers';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import Home from 'components/pages/homePage';
import './style.css';

const store = createStore(reducers, applyMiddleware(logger));
addLocaleData([...en, ...zh]);

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Home />
			</Provider>
		);
	}
}
