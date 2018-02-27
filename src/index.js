import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise'
import App from './components/app';
import Pick from './components/pick';
import Todo from './components/todo'
import Forcast from './components/Forcast';
import SearchVideos from './components/SearchVideos'
import reducers from './reducers';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <Switch>
          <Route path="/pick" component={Pick} /> 
          <Route path="/forcast" component={Forcast} />
          <Route path="/SearchVideos" component={SearchVideos} />
          <Route path="/todo" component={Todo} />  
          <Route path="/" component={App} exact={true} />
        </Switch>
    </BrowserRouter> 
  </Provider>
  , document.getElementById('root'));
