import React from 'react'
import AboutPage from "views/pages/AboutPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import LoginPage from "views/examples/LoginPage.js";
import UserPage from "views/pages/ShowPhotosPage";
import EditImages from "views/pages/EditImages";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Index from "views/Index.js";
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from 'store/actions/authAction';
import { getCurrentUser } from 'store/actions/authAction';

import jwt_decode from 'jwt-decode'
import setAuthHeader from 'utils/setAuthHeader';

export default function App() {
    const dispatch = useDispatch();
    if(localStorage.getItem('jwtToken')) {
        const currentTime = Date.now() / 1000
        const decode = jwt_decode(localStorage.getItem('jwtToken'))
      
        if(currentTime > decode.exp) {
          dispatch(logoutUser())
        } else {
          console.log('userlogin')
          setAuthHeader(localStorage.getItem('jwtToken'))
          dispatch(getCurrentUser())
        }
      }
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={props => <Index {...props} />} />
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
                    path="/signup"
                    render={props => <RegisterPage {...props} />}
                />
                <Route
                    path="/login"
                    render={props => <LoginPage {...props} />}
                />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
}
