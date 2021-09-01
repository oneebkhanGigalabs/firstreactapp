import React from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import useStyles from "../styles";
import { withRouter } from "react-router-dom";
import CryptoJS from "crypto-js";
import { useState } from "react";

function Login(props) {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = (values) => {
    values.preventDefault();
    console.log(email);
    console.log(password);
    var encryptedAES = CryptoJS.AES.encrypt(password, email).toString();
    console.log(encryptedAES);
    localStorage.setItem(
      email,
      JSON.stringify({ email: email, password: encryptedAES })
    );
    props.history.push("/dashboard");
  };

  return (
    <div className="Home">
      <div className="Form">
        <div className="FormDiv">
          <div className="LoginDiv">Login</div>
          <div className="LoginFormDiv">
            <form
              className="LoginFormMaterial"
              noValidate
              autoComplete="off"
              onSubmit={onFinish}
            >
              <TextField
                id="email"
                label="Email"
                type="email"
                value={email}
                variant="filled"
                className={classes.TextField}
                InputProps={{ disableUnderline: true }}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <br />
              <div className="space"></div>
              <br />
              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                value={password}
                variant="filled"
                className={classes.TextField}
                InputProps={{ disableUnderline: true }}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <br />
              <div className="space"></div>
              <br />
              <Button variant="contained" color="primary" type="submit">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="Picture">
        <img
          className="ImagePicture"
          src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
          alt="https://www.nicepng.com/png/detail/135-1358116_error-png.png"
        />
      </div>
    </div>
  );
}

export default withRouter(Login);
