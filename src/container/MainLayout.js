import React from 'react';
import MainFooter from "components/Footers/MainFooter";
import DefaultNavbar from "components/Navbars/DefaultNavbar.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IndexNavbar from 'components/Navbars/IndexNavbar';


export default function MainLayout(props) {
    
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("index");
      return function cleanup() {
        document.body.classList.remove("index");
      };
    });

    let nav = null;

    if(props.mainLayoutNav) {
        nav = props.index ? <IndexNavbar/> : <DefaultNavbar />
    }

    return (
        
        <div className="instadown">
            {nav}
            {props.children}
            <ToastContainer autoClose={2000} />
            <MainFooter />
        </div>
    )
}
