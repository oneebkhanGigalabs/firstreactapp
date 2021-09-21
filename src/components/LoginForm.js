import React from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import useStyles from "../styles";

const LoginForm = (props) => {
  const classes = useStyles();

  return (
    <div className="Home">
      <div className="Form">
        <div className="FormDiv">
          <div className="LoginDiv">Login</div>
          <div className="LoginFormDiv">
            <form
              className="LoginFormMaterial"
              validate
              autoComplete="off"
              onSubmit={(event) => {
                event.preventDefault();
                props.onFinish(props.email, props.password);
              }}
            >
              <TextField
                id="email"
                label="Email"
                type="email"
                value={props.email}
                variant="filled"
                className={classes.TextField}
                InputProps={{ disableUnderline: true }}
                onChange={(event) => {
                  props.setEmail(event.target.value);
                }}
              />
              <br />
              <div className="space"></div>
              <br />
              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                value={props.password}
                variant="filled"
                className={classes.TextField}
                InputProps={{ disableUnderline: true }}
                onChange={(event) => {
                  props.setPassword(event.target.value);
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
};

export default LoginForm;
