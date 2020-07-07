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
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import DefaultNavbar from "components/Navbars/DefaultNavbar.js";
import MainFooter from "components/Footers/MainFooter";
import { useSelector, useDispatch } from "react-redux";
import MainLayout from "container/MainLayout";
import CustomGallery from "components/Home/CustomGallery";


function ProfilePage(props) {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const auth = useSelector(state => state.auth)
  console.log('user  profile', auth)
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  let user = {
    username: "guest",
    fullname: "GuestGuest",
    birthday: "1234567890",
    phone: "0568899881",
    email: "maihung303@gmail.com",
    instaLike: null
  }

  let photos= []

  if(auth.isAuthenticated){
    user = auth.user
    if(user.instaLike != null)
      if(user.instaLike.length != 0)
        photos = user.instaLike.filter( item => { 
          if(item){
            console.log('item', item)

            item.width= 240; 
            item.height= 240; 
            item.src = item.url;
            item.thumbnail = item.url;
            return item
          }
        })
        console.log(photos)
  }
    
  return (
    <MainLayout mainLayoutNav={true} index={false} >
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={`https://api.adorable.io/avatars/285/${user.username}`}
              />
            </div>
            <div className="name">
              <h4 className="title">
                {user.fullname}
              </h4>
              <h6 className="description">Info</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                <b>Email: </b> {user.email}
              </p>
              <p>
                <b>Birthdate: </b> {user.birthday}
              </p>
              <br />
            </Col>
          </Row>
          <br />
          <div>

          </div>
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    <b>Likes Photo</b>
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Following
                  </NavLink>
                </NavItem> */}
              </Nav>
            </div>
          </div>

          {/* Tab panes */}
          <TabContent className="" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto text-center" md="12">
                { photos.length == 0 ? 'You has 0 like photo': <CustomGallery photos={photos} />}

                </Col>
              </Row>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="following">
              <h3 className="text-muted">Not following anyone yet :(</h3>
              <Button className="btn-round" color="warning">
                Find artists
              </Button>
            </TabPane>
          </TabContent>
        </Container>
      </div>
    </MainLayout>
  );
}

export default ProfilePage;
