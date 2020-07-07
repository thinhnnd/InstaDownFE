/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages

import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "store/reducers/rootReducer";

import { logoutUser, getCurrentUser } from './store/actions/authAction'
import App from "components/App";
// others

const middleware = [thunk];

if (process.env.NODE_ENV !== `prod`) {
  const {logger} = require('redux-logger')
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
