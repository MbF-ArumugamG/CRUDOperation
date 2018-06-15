import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import postReducer from './reducers/postReducer';

const initialState = [];

const store = createStore(
  postReducer, initialState,
  applyMiddleware(thunk)
);

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
