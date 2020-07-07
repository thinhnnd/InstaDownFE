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
import { Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

function MainFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <Link
                  to="/"
                >
                  InstaDown
                </Link>
              </li>
              <li>
                <Link
                  to="/about/"
                >
                  About us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="teacher-credits">
            <b>A product of <a href="https://dungtran.top" style={{  fontWeight: 550}} target="_blank">dungtran.top</a></b>
          </div>
          <div className="credits">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by <b>Group 08</b>
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default MainFooter;
