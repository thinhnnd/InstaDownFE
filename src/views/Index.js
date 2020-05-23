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
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DefaultNavbar from "components/Navbars/DefaultNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import MainFooter from "components/Footers/MainFooter.js";

// index sections
// import SectionButtons from "views/index-sections/SectionButtons.js";
// import SectionNavbars from "views/index-sections/SectionNavbars.js";
// import SectionNavigation from "views/index-sections/SectionNavigation.js";
// import SectionProgress from "views/index-sections/SectionProgress.js";
// import SectionNotifications from "views/index-sections/SectionNotifications.js";
// import SectionTypography from "views/index-sections/SectionTypography.js";
// import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
// import SectionCarousel from "views/index-sections/SectionCarousel.js";
// import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
// import SectionDark from "views/index-sections/SectionDark.js";
// import SectionLogin from "views/index-sections/SectionLogin.js";
// import SectionExamples from "views/index-sections/SectionExamples.js";
// import SectionDownload from "views/index-sections/SectionDownload.js";

import HomeGallery from "components/Home/HomeGallery";

function Index() {
  const [searchInput, setSearchInput] = useState('');
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }
  
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <div className="instadown">
      <IndexNavbar searchInput={searchInput} handleSearchChange={ (e) => handleChange(e)} />
      <IndexHeader searchInput={searchInput} handleSearchChange={ (e) => handleChange(e)} />
      <div className="main">
        <HomeGallery />
        <MainFooter />
      </div>
    </div>
  );
}

export default Index;
