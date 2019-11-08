import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/';
import App from './components/App.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const store = createStore(reducers);

const Hello = () => (
    <div>Hello</div>
);

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/hello'component={Hello} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
