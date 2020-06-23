import React from 'react';
import MainFooter from "components/Footers/MainFooter";
import DefaultNavbar from "components/Navbars/DefaultNavbar.js";

export default function MainLayout(props) {
    return (
        <div className="instadown">
            <DefaultNavbar />
            {props.children}
            <MainFooter />
        </div>
    )
}
