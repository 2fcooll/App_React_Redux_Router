import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/';
import App from './containers/App.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import thunk from 'redux-thunk';
import ProfileContainer from './containers/ProfileContainer.jsx';

const store = createStore(reducers, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/page/:page/' component={App} />
        <Route path='/users/:id/' component={ProfileContainer} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
