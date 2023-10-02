import React from "react";
import NavBar from "../components/NavBar/NavBar.jsx";

const ErrorPage = () => {
  return (
    <>
      <NavBar />
      <main
        style={{
          textAlign: "center",
        }}
      >
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
};

export default ErrorPage;
