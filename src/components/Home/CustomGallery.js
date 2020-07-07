import React, { useState, useEffect } from "react";
import { Button, Modal } from "reactstrap";
import Gallery from "react-photo-gallery";
import { data } from "../../test/fakedata";
import ImageWrapper from "components/HoverImage";
import {downloadFromLink, downloadFromLinkWithWatermark} from "services/downImageFromUrl";

function CustomGallery(props) {

  const photoList = props.photos;
  const [currentPhoto, setCurrentPhoto] = useState(data.data[0])

  const imageRenderer =
    ({ index, left, top, key, photo }) => (
      <ImageWrapper
        key={key}
        margin={"2px"}
        index={index}
        photo={photo}
        left={left}
        top={top}
        handleClick={(photo) => { setCurrentPhoto(photo); toggleModal(); }}
      />
    );

    

  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
        <Gallery className="my-gallery" photos={photoList} renderImage={imageRenderer} />
        <Modal isOpen={modal} toggle={toggleModal}>
            <div className="modal-header">
              <button
                aria-label="Close"
                className="close"
                type="button"
                onClick={toggleModal}
              >
                <span aria-hidden={true}>×</span>
              </button>
              <div style = {{ display: 'flex', flexDirection: 'row'}}>
               <Button active={false} outline className="ml-1 mr-1" color="danger" type="button">
                  <i className="fa fa-heart mr-1" />
                  {
                    currentPhoto.countLike
                  }
                </Button>
                <button
                  download
                  title="ImageName"
                  className="btn btn-success mr-1"
                  onClick={ () => { downloadFromLinkWithWatermark(currentPhoto.url, currentPhoto.id)}}
                  download={true}
                >
                  Download Free
                </button>
              </div>


            </div>
            <div className="modal-body">
              <div style={{maxWidth: '525px', height:'auto', margin: '0 auto'}}>
                <img style={{  width:"100%", height: 'auto'}} src={currentPhoto.url} />

              </div>
            </div>
        </Modal>
    </>
  );
}

export default CustomGallery;
