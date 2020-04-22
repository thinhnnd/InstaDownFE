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
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
//import { useLocation } from 'react-router';

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  InputGroupText,
  InputGroupAddon,
  InputGroup,
  Input
} from "reactstrap";



function DefaultHeader() {
    let location = window.location.pathname;
    let nav = "";
    let navSearch = "";

    location.includes("index") ?  nav = "navbar-transparent" : nav="";
    location.includes("index") ?  navSearch = "hide" : navSearch="show";

    const [navbarColor, setNavbarColor] = React.useState(nav);
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);
    const [navbarSearch, setNavbarSearch] = React.useState(navSearch);
  
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
         
          if(location.includes("index")) {
            setNavbarColor("");
            setNavbarSearch("show");
          }
        } else if (
          document.documentElement.scrollTop < 300 ||
          document.body.scrollTop < 300
        ) {
            setNavbarSearch("show");
            if(location.includes("index")) {
                setNavbarColor("navbar-transparent");
                setNavbarSearch("hide");
          }
 
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
            <NavbarBrand
              data-placement="bottom"
              href="/index"
              title="InstaDown"
            >
              InstaDown
            </NavbarBrand>
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
         
              <InputGroup>
                <Input id="search-input-header" placeholder="Instagram username or post" type="text" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i aria-hidden={true} className="fa fa-arrow-right" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </div>
          <Collapse
            className="justify-content-end"
            navbar
            isOpen={navbarCollapse}
          >
            
  
            <Nav navbar>
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  href="https://twitter.com"
                  target="_blank"
                  title="Follow us on Twitter"
                >
                  <i className="fa fa-twitter" />
                  <p className="d-lg-none">Twitter</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  href="https://facebook.com"
                  target="_blank"
                  title="Like us on Facebook"
                >
                  <i className="fa fa-facebook-square" />
                  <p className="d-lg-none">Facebook</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  href="https://www.instagram.com/"
                  target="_blank"
                  title="Follow us on Instagram"
                >
                  <i className="fa fa-instagram" />
                  <p className="d-lg-none">Instagram</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  href="https://github.com/thinhnnd"
                  target="_blank"
                  title="Star on GitHub"
                >
                  <i className="fa fa-github" />
                  <p className="d-lg-none">GitHub</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/about"
                  target=""
                >
                  <i className="nc-icon nc-book-bookmark" /> About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/about"
                  target=""
                >
                  <i className="nc-icon nc-book-bookmark" /> How to use
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }

export default DefaultHeader;
