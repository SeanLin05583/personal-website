import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from 'reducers';
import { Home } from 'components/pages/homePage';
import './style.css';

const store = createStore(reducers, applyMiddleware(logger));

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Home />
			</Provider>
		);
	}
}