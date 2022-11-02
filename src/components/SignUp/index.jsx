import { message } from "antd";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generics";
import { Container, Main } from "./style";
const SignUpComponent = () => {
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
    fetch("https://houzing-app.herokuapp.com/api/public/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        message.error("Email is already taken");
      }).catch(err => message.success("Verification code was sent to your email."))
  };
  return (
    <Main>
      <Container>
        <h2>Sign up</h2>
        <Input
          onChange={onchange}
          placeholder="email"
          type="email"
          margin="0 0 20px 0"
        />
        <Input
          onChange={onchange}
          placeholder="firstname"
          type="email"
          margin="0 0 20px 0"
        />
        <Input
          onChange={onchange}
          placeholder="lastname"
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
          You have an account ? <span onClick={() => navigate('/signin')}>Sign In</span>
        </h3>
      </Container>
    </Main>
  );
};

export default SignUpComponent;
