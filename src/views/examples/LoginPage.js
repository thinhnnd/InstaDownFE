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
import React, {useState} from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from '../../store/actions/authAction'
import DefaultNavbar from "components/Navbars/DefaultNavbar.js";
import IndexNavbar from "components/Navbars/IndexNavbar";


function LoginPage(props) {
  document.documentElement.classList.remove("nav-open");
  const auth = useSelector(state => state.auth)
  console.log('user ', auth)
  if(auth.isAuthenticated)
    props.history.push('/');
  React.useEffect(() => {

    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };

  }, []);
  
  const dispatch = useDispatch();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    const formData = {
      username: username,
      password: password,

    }
    console.log('login', formData)
    dispatch(loginUser(formData))
    // const localToken = localStorage.getItem("token")
    // dispatch(getUserInfo(localToken))
  }

  return (
    <div className="instadown">
      <IndexNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Login</h3>
                {/* <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="facebook"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="twitter"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div> */}
                <Form className="register-form">
                  <label>Username</label>
                  <Input placeholder="Username" 
                    type="text" 
                    onChange={ e => setUsername(e.target.value) }/>
                  <label>Password</label>
                  <Input placeholder="Password" 
                    type="password"
                    onChange={ e => setPassword(e.target.value) } />
                  <Button onClick={handleLogin} block className="btn-round" color="danger">
                    login
                  </Button>
                </Form>
                <div className="forgot">
                <Button
                    outline 
                    block
                    className="btn-round "
                    color="success"
                    href="/register"
                  >
                    Register new account
                  </Button>
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by Group 08
          </h6>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
