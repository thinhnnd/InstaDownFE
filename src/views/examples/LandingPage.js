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
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DefaultNavbar from "components/Navbars/DefaultNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import MainFooter from "components/Footers/MainFooter";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <div className="instadown">
      <DefaultNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Our Project</h2>
                <h5 className="description">
                  Instadown is a project that you can get all images from Instagram. You can simply add watermark to an image and download to your devices.
                  This project is build from python with django framework as BE and ReactJS library as FE.   
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  See Details
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Beautiful Images</h4>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum elit sed est vulputate condimentum.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Free forever</h4>
                    <p>
                      Praesent fringilla tincidunt turpis, ultrices feugiat ipsum elementum ut. Pellentesque orci velit, tempus in euismod eget, mattis quis magna.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Really Fast</h4>
                    <p>
                      Praesent fringilla tincidunt turpis, ultrices feugiat ipsum elementum ut. Pellentesque orci velit, tempus in euismod eget, mattis quis magna
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Security</h4>
                    <p>
                      Fringilla tincidunt turpis, ultrices feugiat ipsum elementum ut. Pellentesque orci velit, tempus in euismod
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Let's talk about us</h2>
            <Row>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/hung_mai.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Mai V. Hung</CardTitle>
                        <h6 className="card-category">BE - Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      More than 1 year experience in Python.
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                    >
                      <a target="blank" href="https://www.facebook.com/maihung123">
                        <i className="fa fa-facebook" />
                      </a>
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                    >
                      <a target="blank" href="https://github.com/maivanhung33/">
                        <i className="fa fa-github" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/hung_hoang.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Hoang N. Hung</CardTitle>
                        <h6 className="card-category">BE - Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Main language: Python, C++
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                    >
                      <a target="blank" href="https://www.facebook.com/hunghoang59">
                        <i className="fa fa-facebook" />
                      </a>
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                    >
                      <a target="blank" href="https://github.com/thinhnnd">
                        <i className="fa fa-github" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/hao_nguyen.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Nguyen T. Hao</CardTitle>
                        <h6 className="card-category">BE Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                    >
                      <a target="blank" href="https://www.facebook.com/WestlifeNo2">
                        <i className="fa fa-facebook" />
                      </a>
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                    >
                      <a target="blank" href="https://github.com/thinhnnd">
                        <i className="fa fa-github" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/thinhnnd.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Nguyen Nie D. Thinh</CardTitle>
                        <h6 className="card-category">FE Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Skills: NodeJS, ReactJS
                      Together we will make it better.
                      Share knowledge is the key to success.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                    >
                      <a target="blank" href="https://fb.com/nieducthinh">
                        <i className="fa fa-facebook" />
                      </a>
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                    >
                      <a target="blank" href="https://github.com/thinhnnd">
                        <i className="fa fa-github" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <MainFooter />
    </div>
  );
}

export default LandingPage;
