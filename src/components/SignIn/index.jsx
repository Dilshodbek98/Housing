import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generics";
import { Container, Main, Wrapper } from "./style";

const SignInComponent = () => {
  const [body, setBody] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  // useEffect(() => {
  //   fetch("https://houzing-app.herokuapp.com/api/v1/houses/list")
  //     .then((response) => response.json())
  //     .then((response) => setData(response?.data || []));
  // }, []);

  const onchange = ({target: {value, placeholder}}) => {
    setBody({
      ...body,
      [placeholder] : value,
    })
  }

  const onSubmit = () => {
    console.log(body);
  }
  return (
    <Main>
      <Container>
        <h2>Sign in</h2>
        <p>Login</p>
        <Input onChange={onchange} placeholder="email" type="email" margin="0 0 20px 0" />
        <Input onChange={onchange} placeholder="password" type="password" margin="0 0 20px 0" />
        <Button width="%">Login</Button>
      </Container>
    </Main>
  );
};

export default SignInComponent;
