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
import MainLayout from "container/MainLayout";
import { Link } from "react-router-dom";


function LoginPage(props) {
  document.documentElement.classList.remove("nav-open");
  const auth = useSelector(state => state.auth)
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

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = {
      username: username,
      password: password,

    }
    dispatch(loginUser(formData))
    // const localToken = localStorage.getItem("token")
    // dispatch(getUserInfo(localToken))
  }

  return (
    <MainLayout mainLayoutNav={true} index={true}>
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
                <Form className="register-form" onSubmit={ (e) => handleLogin(e)}>
                  <label>Username</label>
                  <Input placeholder="Username" 
                    type="text" 
                    onChange={ e => setUsername(e.target.value) }/>
                  <label>Password</label>
                  <Input placeholder="Password" 
                    type="password"
                    onChange={ e => setPassword(e.target.value) } />
                  <Button type="submit"  block className="btn-round" color="danger">
                    login
                  </Button>
                </Form>
                <div className="forgot">
                  <Link className="btn-round btn btn-outline-success btn-block btn-block" to={`/signup`} >
                  Register new account
                  </Link>
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
        {/* <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by Group 08
          </h6>
        </div> */}
      </div>
    </MainLayout>
  );
}

export default LoginPage;
