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

// core components

import PhotosGallery from "components/Home/PhotosGallery";
import MainLayout from 'container/MainLayout';
import UserInfo from "components/Profile/UserInfo";

function UserPage(props) {
  document.documentElement.classList.remove("nav-open");

  const [owner, setOwner] = useState(null);

  React.useEffect(() => {
    const param = props.param;
  });

  const handleGetOwner = (owner) => {
    setOwner(owner);
  }
  
  return (
    <MainLayout mainLayoutNav={true} index={false}>
      <div className="main">
        { owner ? <UserInfo owner={owner} /> : null}
        <PhotosGallery getOwner={ (o) => handleGetOwner (o)} type={props.type} username={props.match.params.username} postId={props.match.params.postId} />
     </div>
    </MainLayout>
  );
}

export default UserPage;
