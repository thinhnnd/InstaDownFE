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
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import HomeGallery from "components/Home/HomeGallery";
import MainLayout from "container/MainLayout";

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
    <MainLayout mainLayoutNav = {false}>
      <IndexNavbar searchInput={searchInput} handleSearchChange={ (e) => handleChange(e)} />
      <IndexHeader searchInput={searchInput} handleSearchChange={ (e) => handleChange(e)} />
      <div className="main">
        <HomeGallery />
      </div>
    </MainLayout>

  );
}

export default Index;
