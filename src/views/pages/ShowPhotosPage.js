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
import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DefaultNavbar from "components/Navbars/DefaultNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import MainFooter from "components/Footers/MainFooter";
import HomeGallery from "components/Home/HomeGallery";
import PhotosGallery from "components/Home/PhotosGallery";
import MainLayout from 'container/MainLayout';
import MainImage from "components/WaterMarkEditor/MainImage";
import Userinfo from 'components/Profile/UserInfo';
import UserInfo from "components/Profile/UserInfo";

function UserPage(props) {
  document.documentElement.classList.remove("nav-open");

  const [owner, setOwner] = useState(null);

  React.useEffect(() => {
    const param = props.param;
  });

  const handleGetOwner = (owner) => {
    console.log('owner', owner);
    setOwner(owner);
  }
  
  return (
    <MainLayout>
      <div className="main">
        { owner ? <UserInfo owner={owner} /> : null}
        <PhotosGallery getOwner={ (o) => handleGetOwner (o)} type={props.type} username={props.match.params.username} postId={props.match.params.postId} />
     </div>
    </MainLayout>
  );
}

export default UserPage;
