import React, { useState, useEffect } from "react";

const imgStyle = {
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
const selectedImgStyle = {
  transform: "translateZ(0px) scale3d(0.9, 0.9, 1)",
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative"
};

const HoverImage = ({
  index,
  photo,
  margin,
  direction,
  top,
  left,
  selected
}) => {
  const [isSelected, setIsSelected] = useState(selected);
  //calculate x,y scale
  const sx = (100 - (30 / photo.width) * 100) / 100;
  const sy = (100 - (30 / photo.height) * 100) / 100;
  selectedImgStyle.transform = `translateZ(0px) scale3d(${sx}, ${sy}, 1)`;

  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }

  const handleOnClick = e => {
    setIsSelected(!isSelected);
  };

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

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
      />
      <div class="overlay">
        <h2 style={!addWatermark? { display: "none" }: {}} className="btn-add-wm"><span class="fa fa-edit"></span> Watermark</h2>
        <p class="icon-links">
          <a href="#">
            <span class="fa fa-download"></span>
          </a>
          <a href="#">
            <span class="fa fa-heart"></span>
          </a>

        </p>
      </div>
    </div>
  );
};

export default HoverImage;
