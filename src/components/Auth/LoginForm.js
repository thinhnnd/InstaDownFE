import React from "react";

import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap";

const LoginForm = () => {
  return (
    <form>
      <FormGroup>
        <Label for="email">Email address</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
        />
        <FormText color="muted">
          We'll never share your email with anyone else.
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          autoComplete="off"
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Check me out
          <span className="form-check-sign">
            <span className="check"></span>
        </span>
        </Label>
      </FormGroup>
      <Button color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default LoginForm;