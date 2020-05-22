import React, { useState, useEffect } from "react";
import downloadFromLink from '../services/downImageFromUrl';

const imgStyle = {
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative"
};

const ImageWrapper = ({
  index,
  photo,
  margin,
  direction,
  top,
  left,
  selected,
  handleClick
}) => {
  // to hide add watermark button
  let addWatermark = true;

  addWatermark = photo.width < 230 ? false: true;

  return (
    <div
      style={{ margin, height: photo.height, width: photo.width, ...cont }}
      className="hovereffect"
    >
      <img
        alt={photo.title}
        style={{ ...imgStyle }}
        {...photo}
        src={photo.url}
        onClick={() => handleClick(photo)}
      />
      <div className="overlay">
        <h2 style={!addWatermark? { display: "none" }: {}} className="btn-add-wm"><span className="fa fa-edit"></span> Watermark</h2>
        <h2 style={addWatermark? { display: "none" }: {}} className="btn-add-wm"><span className="fa fa-edit"></span></h2>
        <p className="icon-links">
          <a onClick={ () => { downloadFromLink(photo.url, photo.shortcode) }} >
            <span className="fa fa-download"></span>
          </a>
          <a href="#">
            <span className="fa fa-heart"></span>
            <span className="ml-2">{photo.countLike}</span>

          </a>

        </p>
      </div>
    </div>
  );
};

export default ImageWrapper;
