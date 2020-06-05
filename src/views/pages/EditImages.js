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
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DefaultNavbar from "components/Navbars/DefaultNavbar.js";
import MainFooter from "components/Footers/MainFooter";
import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';
import queryString from 'query-string';
import ImageWaterMark from "components/ImageWaterMark";

function EditImages(props) {

  let parsedQuery = queryString.parse(props.location.search);
  const {link, _nc_cat, _nc_ohc, oh, oe} = parsedQuery;
  let templateImageUrl = `${link}&_nc_cat=${_nc_cat}&_nc_ohc=${_nc_ohc}&oh=${oh}&oe=${oe}`
  console.table(link, _nc_cat, _nc_ohc, oh, oe);
  //console.log(props.location)

  document.documentElement.classList.remove("nav-open");

  React.useEffect(() => {
    const param = props.param;
  });

  //const [currentImage, setCurrentImage] = useState('https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/84250295_202500184323985_8879656637528356808_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=101&_nc_ohc=59NTZVAOt8kAX9TbYt-&oh=20d58123ff88d9d371d1d50b2c8cda8f&oe=5EF6B744')
  const [currentImage, setCurrentImage] = useState(templateImageUrl)

  const [searchInput, setSearchInput] = useState('');
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }
  return (
    <div className="instadown">
      <DefaultNavbar searchInput={searchInput} handleSearchChange={ (e) => handleChange(e)} />
      <div className="main" style={{ marginTop: 100}}>
        <ImageWaterMark mainImageUrl={templateImageUrl} />
        <MainFooter />
      </div>
    </div>
  );
}

export default EditImages;
