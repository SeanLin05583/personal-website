import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie9';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import reducers from 'reducers';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import Home from 'components/pages/homePage';
import GitRepoSearch from 'projects/git-repo-search';
import './normalize.css';
import './style.css';

const store = createStore(reducers, applyMiddleware(logger));
addLocaleData([...en, ...zh]);

export default class App extends Component {
  render() {
    return (
      <Router basename="/seanlin-profile">
        <Switch>
          <Route exact path="/">
            <Provider store={store}>
              <Home />
            </Provider>
          </Route>
          <Route path="/git-repo-search" component={GitRepoSearch} />
        </Switch>
      </Router>
    );
  }
}
