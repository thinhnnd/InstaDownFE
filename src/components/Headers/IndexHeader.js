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
/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Container,
  FormGroup,
  Input,
  Label,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
  Form
} from "reactstrap";
import { useDispatch } from "react-redux";
import { getUserPhotoAlbum } from "store/actions/searchAction";
import { useHistory } from "react-router";
import checkSearchInput from "services/searchServices";


// core components

function IndexHeader(props) {

  const dispatch = useDispatch();
  const history = useHistory();

  // const checkSearchInput = (searchInput) => {
  //   let base = 'www.instagram.com';
  //   if(searchInput.includes(`${base}`)) {
  //     if(searchInput.includes(`${base}/p/`)) {
  //       var splitUrl = searchInput.split('/p/');
  //       history.push('/post/'+ splitUrl[1]);

  //     }
  //     else {
  //       let splitUrl = searchInput.split('www.instagram.com/');
  //       history.push('/user/'+ splitUrl[1]);
  //     }
  //   }
  //   else {
  //     history.push('/user/'+searchInput);
  //   }
  // }

  const handleSubmit = () => {
    if (props.searchInput != '') {
      //dispatch(getUserPhotoAlbum(props.searchInput))
      checkSearchInput(history, props.searchInput);
      //history.push('/user/'+props.searchInput)
    }
  }

  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>

            <div className="title-brand thinhnnd">
              <Form onSubmit={() => handleSubmit()}>
                <InputGroup>
                  <Input id="search-input" onChange={(e) => props.handleSearchChange(e)} value={props.searchInput} placeholder="Instagram username or post" type="text" />
                  <InputGroupAddon addonType="append">
                    <Button type="submit" color="danger" >
                      <i aria-hidden={true} className="fa fa-arrow-right" />
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </Form>
            </div>
            <h2 className="presentation-subtitle text-center">
              All Instagram images is here!
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
      </div>
    </>
  );
}

export default IndexHeader;
