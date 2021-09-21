import React from "react";
import { withRouter } from "react-router-dom";
import CryptoJS from "crypto-js";
import LoginForm from "../components/LoginForm";
import { useState } from "react";

const LoginContainer = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = (email) => {
    console.log(email);
    console.log(email["email"]);
    console.log(email["password"]);
    console.log(password);
    var encryptedAES = CryptoJS.AES.encrypt(
      email["password"],
      email["email"]
    ).toString();
    console.log(encryptedAES);
    localStorage.setItem(
      email["email"],
      JSON.stringify({ email: email["email"], password: encryptedAES })
    );
    props.history.push("/dashboard");
  };

  return (
    <LoginForm
      onFinish={(event) => onFinish({ email, password })}
      email={email["email"]}
      password={email["password"]}
      setEmail={setEmail}
      setPassword={setPassword}
    ></LoginForm>
  );
};

export default withRouter(LoginContainer);
