import React, { useState } from "react";
import 'tui-image-editor/dist/tui-image-editor.css';
import queryString from 'query-string';
import ImageWaterMark from "components/ImageWaterMark";
import MainLayout from 'container/MainLayout';

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
    <MainLayout mainLayoutNav={true} index={false}>
      <div className="main" style={{ marginTop: 100}}>
        <ImageWaterMark mainImageUrl={templateImageUrl} />
      </div>
    </MainLayout>
  );
}

export default EditImages;
