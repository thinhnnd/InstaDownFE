import React from "react";
import MainFooter from "components/Footers/MainFooter.js";
import DefaultNavbar from "components/Navbars/DefaultNavbar";
// import Img from 'react-image';

import {
    Container,
    Row,
//    Button,
    Col
} from "reactstrap";


function SingleImagePage(props) {
    let  link = props.match.params.link; 
    console.log(link);

    return (
        <div className="instadown" style={{ backgroundColor: '#fefefe' }}>
            <div className="section section-media mt-5">
                <DefaultNavbar />

                <Container>
                    <Row>
                        <Col md="9">
                            <div className="text-center">
                                <div class="img-wrapper">
                                    <img src="https://cdn.pixabay.com/photo/2012/10/25/23/52/wolf-62898_960_720.jpg" />
                                    {/* <img src="https://cdn.pixabay.com/photo/2016/03/09/09/39/shoes-1245920_1280.jpg" /> */}
                                </div>
                            </div>

                        </Col>
                        <Col md="3" className="side-function">
                            <button class="btn btn-primary btn-fullwith">
                                <i class="fa fa-download"></i> DownLoad Free
                            </button>
                            <div>
                                <button class="btn btn-secondary btn-fullwith">
                                    <i class="fa fa-pencil-square"></i> Add WaterMark
                                </button>
                            </div>
                            <div className="share text-center">
                                <button class="btn btn-danger btn-just-icon">
                                    <i class="fa fa-heart"></i>
                                </button>
                                <button class="btn btn-info btn-just-icon">
                                    <i class="fa fa-facebook"></i>
                                </button>
                                <button class="btn btn-success btn-just-icon">
                                    <i class="fa fa-link"></i>
                                </button>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
            <MainFooter />

        </div>
    );
}

export default SingleImagePage;