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
import React, { useState } from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Form
} from "reactstrap";
import { useHistory } from "react-router";
import checkSearchInput from "services/searchServices";
import { useSelector } from "react-redux";
import UserMenu from "./UserMenu";
import LoginSignupMenu from "./LoginSignupMenu";
import { Link } from "react-router-dom";


function IndexNavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [navbarSearch, setNavbarSearch] = React.useState("hide");
  const [searchInput, setSearchInput] = useState('');
  const history = useHistory();
  const auth = useSelector(state=>state.auth);
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.searchInput != '') {
      //dispatch(getUserPhotoAlbum(props.searchInput))
      checkSearchInput(history, props.searchInput);
    }
  }

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbar = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
        setNavbarSearch("show");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
        setNavbarSearch("hide");
      }
    };

    window.addEventListener("scroll", updateNavbar);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbar);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <Link
            data-placement="bottom"
            className="navbar-brand"
            to="/index"
            title="Instadown"
          >
            InstaDown
          </Link>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >

            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <div className={classnames("header-search", navbarSearch)}>
        <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Input id="searchInput" onChange={(e) => props.handleSearchChange(e)} value={props.searchInput} placeholder="Instagram username or post" type="text" />
              <InputGroupAddon addonType="append">
                <Button type="submit" className="nav-search-btn" >
                  <i aria-hidden={true} className="fa fa-arrow-right" />
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >


          <Nav navbar>
            <NavItem>
              <NavLink
                type="button"
               onClick={(e) => { e.preventDefault(); history.push('/about') }}
              >
                <i className="nc-icon nc-book-bookmark" /> About Us
              </NavLink>
            </NavItem>
            { auth.isAuthenticated ? <UserMenu />  : <LoginSignupMenu /> }

          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
