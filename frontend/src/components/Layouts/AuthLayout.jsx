import React from "react";
import Container from "react-bootstrap/esm/Container.js";
import { images } from "../../assets/img";

import "./AuthLayout.scss";
import { Outlet } from "react-router-dom";

const AuthLayout = ({ children }) => {
  return (
    <Container
      as="main"
      fluid
      style={{
        backgroundImage: `url(${images.banner})`,
        minHeight: "100vh",
      }}
      className="auth__container"
    >
      <Outlet />
    </Container>
  );
};

export default AuthLayout;
