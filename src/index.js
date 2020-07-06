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
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import AboutPage from "views/pages/AboutPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import LoginPage from "views/examples/LoginPage.js";
import SingleImagePage from "views/pages/SingleImagePage";
import { createStore, applyMiddleware } from 'redux';
import { create } from "nouislider";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "store/reducers/rootReducer";
import UserPage from "views/pages/ShowPhotosPage";
import EditImages from "views/pages/EditImages";
// others

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={props => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={props => <NucleoIcons {...props} />}
        />
        <Route
          path="/about"
          render={props => <AboutPage {...props} />}
        />
        <Route
          path="/post/:postId"
          render={props => <UserPage type="post" {...props} />}
        />
        <Route
          path="/register-page"
          render={props => <RegisterPage {...props} />}
        />
        <Route
          path="/user/:username"
          render={props => <UserPage type="user" {...props} />}
        />
        <Route
          path="/edit-image"
          
          render={props => <EditImages type="edit-image" {...props} />}
        />
        <Route
          path="/profile"
          
          render={props => <ProfilePage type="edit-image" {...props} />}
        />
        <Route
          path="/register"         
          render={props => <RegisterPage {...props} />}
        />
        <Route
          path="/login"         
          render={props => <LoginPage {...props} />}
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
