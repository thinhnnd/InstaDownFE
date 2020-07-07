import React from 'react';
import MainFooter from "components/Footers/MainFooter";
import DefaultNavbar from "components/Navbars/DefaultNavbar.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IndexNavbar from 'components/Navbars/IndexNavbar';


export default function MainLayout(props) {
    return (
        <div className="instadown">
            {props.index ? <IndexNavbar/> : <DefaultNavbar />}
            {props.children}
            <ToastContainer autoClose={2000} />
            <MainFooter />
        </div>
    )
}
