import { message } from "antd";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generics";
import { Container, Main } from "./style";
const SignInComponent = () => {
  const [body, setBody] = useState();
  const navigate = useNavigate();
  const onchange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };

  localStorage.setItem("authenticationToken", "");
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
        if (res.authenticationToken) {
          console.log(res);
          localStorage.setItem("token", res.authenticationToken);
          navigate("/home");
          message.success("Welcome to Houzing");
        } else {
          console.log(res);
          message.error("Login or password wrong");
        }
      })
      .catch((err) => {
        message.error("Login or password wrong");
      });
  };
  return (
    <Main>
      <Container>
        <h2>Sign in</h2>
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
        <h3>
          You don't have an account ? <span onClick={() => navigate('/signup')}>Register</span>
        </h3>
      </Container>
    </Main>
  );
};

export default SignInComponent;
