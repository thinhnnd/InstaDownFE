import React from 'react'
import AboutPage from "views/pages/AboutPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import LoginPage from "views/examples/LoginPage.js";
import UserPage from "views/pages/ShowPhotosPage";
import EditImages from "views/pages/EditImages";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Index from "views/Index.js";
import { useSelector } from 'react-redux';


export default function App() {
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
