import React, { useState, useEffect } from "react";
import { Container, Button, Modal } from "reactstrap";
import Gallery from "react-photo-gallery";
import { data } from "../../test/fakedata";
import ImageWrapper from "components/HoverImage";
import axios from 'axios';
import downloadFromLink from "services/downImageFromUrl";


// reactstrap components
// import {
//   Card,
//   Container,
//   Row,
//   Col,
//   Carousel,
//   CarouselItem,
//   CarouselIndicators,
//   CarouselCaption
// } from "reactstrap";

function HomeGallery() {

  const [photos, setPhotos] = useState(data.data);
  const [currentPhoto, setCurrentPhoto] = useState(data.data[0])
  let url1 = 'https://insta-down.azurewebsites.net/download/album';
  let url2 = 'https://insta-scrapy--thinhnnd.repl.co/download/album';
  useEffect(() => {
    axios.post(url1, { url: "https://www.instagram.com/beautyplus.girl" })
      .then((res) => {
        let photos = res.data.data.map(function (item) {
          let src = item.url;

          return {
            ...item,
            src: item.url
          }
        })
        console.log(photos);

        setPhotos(photos);
        setCurrentPhoto(photos[0]);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);
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


  // Convert array to JSX items
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="section">
        <Container>
          <h3>Selected by Instadown</h3>
          <Gallery photos={photos} renderImage={imageRenderer} />
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
                  onClick={ () => { downloadFromLink(currentPhoto.src, currentPhoto.shortcode)}}
                  download={true}
                >
                  Download Free
                </button>
              </div>


            </div>
            <div className="modal-body">
              <div style={{maxWidth: '626px', margin: '0 auto'}}>
                <img style={{  width:"100%"}} src={currentPhoto.src} />

              </div>
            </div>
            <div className="modal-footer">
              <div className="left-side">
                <Button
                  className="btn-link"
                  color="default"
                  type="button"
                  onClick={toggleModal}
                >
                  Never mind
                    </Button>
              </div>
              <div className="divider" />
              <div className="right-side">
                <Button className="btn-round" color="danger" type="button">
                  Delete
                </Button>
              </div>
            </div>
          </Modal>
        </Container>

      </div>
    </>
  );
}

export default HomeGallery;
