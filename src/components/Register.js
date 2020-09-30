import React, { Fragment, useState, useContext } from "react";
import {
  FormControl,
  Input,
  Button,
  Container,
  Typography,
} from "@material-ui/core";
import Axios from "axios";
import { TokenContext } from "../context/TokenContext";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setToken } = useContext(TokenContext);

  const onRegister = () => {
    Axios.post("https://reqres.in/api/register", { email, password })
      .then((res) => {
        if (res.status == 200) {
          window.alert("Success");
          setToken(res.data.token);
        } else window.alert("Failed");
      })
      .catch((err) => window.alert(err.message));
  };

  return (
    <Fragment>
      <main>
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Register
          </Typography>
        </Container>
        <center>
          <FormControl>
            <Input
              style={{ marginTop: 30 }}
              onChange={(val) => setEmail(val.target.value)}
              placeholder="Email Address"
              id="email"
            />
            <Input
              style={{ marginTop: 30 }}
              onChange={(val) => setPassword(val.target.value)}
              placeholder="Password"
              id="password"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={onRegister}
              style={{ marginTop: 30 }}
            >
              Register
            </Button>
          </FormControl>
        </center>
      </main>
    </Fragment>
  );
};

export default Register;
