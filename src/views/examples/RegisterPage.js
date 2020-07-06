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

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col, FormGroup, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ReactDatetime from "react-datetime";
import IndexNavbar from "components/Navbars/IndexNavbar";
import { useSelector, useDispatch } from "react-redux";

function RegisterPage(props) {
  const auth = useSelector(state => state.auth)
  console.log('user ', auth)
  if(auth.isAuthenticated)
    props.history.push('/');

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });

  const initialRegData = {
    fullname:"MaiVanHung",
    username:"hung",
    password:"123",
    birthday:"1234567890",
    email:"maihung303@gmail.com",
    phone:"0568899881",
  }

  const [fullname, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [birthdate, setBirthDate] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  const handleRegister = () => {
    const formData = {
      fullname: fullname,
      email: email,
      birthdate: birthdate,
      username: username,
      passsword: password,
      phone: phone,
    }
    console.log(formData)
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
                <h3 className="title mx-auto">Register</h3>
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
                  <label for="fullname">Full Name</label>
                  <Input name="fullname" placeholder="Full Name" onChange={ e => setFullName(e.target.value) } value={fullname} type="text" />
                  <label for="birthday">Birth Date</label>
                  <FormGroup>
                    <InputGroup className="date" id="datetimepicker">
                      <ReactDatetime
                        timeFormat={false}
                        inputProps={{
                          placeholder: "Datetime Picker Here"
                        }}
                        onChange = { date => setBirthDate(date._d) }
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <span className="glyphicon glyphicon-calendar">
                            <i aria-hidden={true} className="fa fa-calendar" />
                          </span>
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>  
                  <label for="email">Email</label>
                  <Input name="email" placeholder="Email" value={email}  onChange={ e => setEmail(e.target.value) } type="email" />  
                  <label for="phone">Phone</label>
                  <Input name="phone" 
                    placeholder="Phone" 
                    type="text" 
                    value={phone}  
                    onChange={ e => setPhone(e.target.value) } />
                  <label for="username">Username</label>
                  <Input name="username" 
                    placeholder="Username" 
                    type="text" 
                    value={username}  
                    onChange={ e => setUsername(e.target.value) } />
                  <label for="password">Password</label>
                  <Input name="password" 
                    placeholder="Password" 
                    type="password" 
                    value={password}  
                    onChange={ e => setPassword(e.target.value) } />
                  <Button onClick={ handleRegister} block className="btn-round" color="danger">
                    Register
                  </Button>
                </Form>
                <Button
                    outline 
                    block
                    className="btn-round "
                    color="success"
                    href="/login"
                  >
                    Have account? Login now
                  </Button>

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

export default RegisterPage;
