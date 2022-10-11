import { message } from "antd";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generics";
import { Container, Main } from "./style";
const SignInComponent = () => {
  const [body, setBody] = useState();
  const navigate = useNavigate()
  const onchange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };

  localStorage.setItem("authenticationToken", '');
  const onSubmit = () => {
    fetch("https://houzing-app.herokuapp.com/api/public/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        if(res.authenticationToken){
          localStorage.setItem("token", res.authenticationToken);
          navigate('/home')
          message.success("Login was done successfully");
        }else{
          localStorage.removeItem("authenticationToken");
          message.error("Login was not done successfully");
        }
      });
  };
  return (
    <Main>
      <Container>
        <h2>Sign in</h2>
        <p>Login</p>
        <Input
          onChange={onchange}
          placeholder="email"
          type="email"
          margin="0 0 20px 0"
        />
        <Input
          onChange={onchange}
          placeholder="password"
          type="password"
          margin="0 0 20px 0"
        />
        <Button width="%" onClick={onSubmit}>
          Login
        </Button>
      </Container>
    </Main>
  );
};

export default SignInComponent;
