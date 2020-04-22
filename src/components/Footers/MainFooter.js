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

function MainFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  InstaDown
                </a>
              </li>
              <li>
                <a
                  href="https://fb.com/nieducthinh"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/profile-page"
                  target=""
                >
                  About us
                </a>
              </li>
            </ul>
          </nav>
          <div className="teacher-credits">
            <span>A product of <a href="https://dungtran.top" target="_blank">dungtran.top</a></span>
          </div>
          <div className="credits">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Group 08
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default MainFooter;
