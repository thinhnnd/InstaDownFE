import React, { useState, useEffect } from "react";
import { Container, Button, Modal, Row, Col } from "reactstrap";
import Gallery from "react-photo-gallery";
import { data } from "../../test/fakedata";
import ImageWrapper from "components/HoverImage";
import axios from 'axios';
import {downloadFromLink, downloadFromLinkWithWatermark} from "services/downImageFromUrl";
import { CONSTANTS } from '../../constants';

import API_HELPERS from '../../api';
import { useSelector, useDispatch } from "react-redux";
import { getUserPhotoAlbum, } from "store/actions/searchAction";
import Loading from "components/Utils/Loading";

function PhotosGallery(props) {

  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPhoto, setCurrentPhoto] = useState(undefined)
  const listPhotos = useSelector(state => state.search.photos);
  const loading = useSelector(state => state.search.isLoading)
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getUserPhotoAlbum('https://www.instagram.com/traveljetter/'));

    //console.log('user name', props.match.params.username);
    handleLoading();

  }, [props.username, props.postId]);

  const handleLoading = () => {
    
    setIsLoading(true);
    if (props.type == "user") {
      let url = 'https://www.instagram.com/' + props.username;
      console.log(url);
      props.getOwner(null);
      API_HELPERS.getUserImages(url).then(res => {
        setPhotos(res.data);
        props.getOwner(res.owner);
        setIsLoading(false);
      }).catch(err => {
        setIsLoading(false);
        console.log(err);
      })
    }
    if (props.type == "post") {
      let url = 'https://www.instagram.com/p/' + props.postId + '/';
      console.log(url);
      props.getOwner(null);
      API_HELPERS.getPostImage(url).then(res => {
        setPhotos(res.data);
        props.getOwner(res.owner);
        setIsLoading(false);
      }).catch(err => {
        setIsLoading(false);
        console.log(err);
      })
    }

  }
  const imageRenderer =
    ({ index, left, top, key, photo }) => (
      <ImageWrapper
        key={key}
        margin={"2px"}
        index={index}
        photo={photo}
        left={left}
        top={top}
        handleClick={(photo) => { console.log('photo 53', photo); setCurrentPhoto(photo); toggleModal(); }}
      />
    );


  // Convert array to JSX items
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="mt-3 section">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md={photos.length < 10 ? "8": "12"}>
              {isLoading ? <Loading /> : <Gallery className="my-gallery" photos={photos} renderImage={imageRenderer} />}
            </Col>
          {
            !currentPhoto ? null : <Modal isOpen={modal} toggle={toggleModal}>
              <div className="modal-header">
                <button
                  aria-label="Close"
                  className="close"
                  type="button"
                  onClick={toggleModal}
                >
                  <span aria-hidden={true}>×</span>
                </button>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
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
                    onClick={() => { downloadFromLinkWithWatermark(currentPhoto.url, currentPhoto.shortcode) }}
                    download={true}
                  >
                    Download Free
                </button>
                </div>


              </div>
              <div className="modal-body">
                <div style={{ maxWidth: '525px', height: 'auto', margin: '0 auto' }}>
                  <img style={{ width: "100%", height: 'auto' }} src={currentPhoto.url} />

                </div>
              </div>
              {/* <div className="modal-footer">
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
              </div> */}
            </Modal>
          }
          </Row>
        </Container>

      </div>
    </>
  );
}

export default PhotosGallery;
