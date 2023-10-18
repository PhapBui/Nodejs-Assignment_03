import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

import "./Login.scss";
import { Alert } from "react-bootstrap";

const SignupSchema = yup.object().shape({
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "minium passwork must be 8"),

  email: yup
    .string()
    .required("Please enter your password")
    .email("Please enter a valid email"),
});

function FormLogin({ handlerFormSubmit, logging }) {
  // init react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(SignupSchema),
  });

  //send data from form to login page
  const onSubmit = (data) => {
    handlerFormSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form__login">
      <h1 className="page-title">Sign In</h1>
      <div>
        <input
          placeholder="Email"
          type="email"
          className="form-control"
          {...register("email")}
        />
        {errors.email && <Alert variant="danger">{errors.email.message}</Alert>}
      </div>
      <div>
        <input
          placeholder="Password"
          className="form-control"
          type="password"
          autoComplete="username"
          {...register("password")}
        />
        {errors.password && (
          <Alert variant="danger">{errors.password.message}</Alert>
        )}
      </div>

      <button type="submit" disabled={logging}>
        {logging ? "Logging in..." : "Sign In"}
      </button>
      <Link to="/auth/register">
        <span>Create an account?</span>
        <span>Sign up</span>
      </Link>
    </form>
  );
}

export default FormLogin;
