import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

import { phoneRegExp } from "../../../util/regExp.js";
import "./Register.scss";
import { Alert } from "react-bootstrap";

function FormRegister({ handlerFormSubmit, errorsMsg }) {
  const SignupSchema = yup.object().shape({
    fullName: yup
      .string("Fullname must be  string")
      .required("Please enter your fullname"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(8, "minium passwork must be 8"),

    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email"),

    phonenumber: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(3, "Please"),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(SignupSchema),
    defaultValues: {
      fullName: "",
      password: "",
      email: "",
      phonenumber: "",
    },
  });

  useEffect(() => {
    for (let key in errorsMsg) {
      setError(key, { type: "nodeValidate", message: errorsMsg[key] });
    }
  }, [errorsMsg, setError]);

  const onSubmit = async (data) => {
    await handlerFormSubmit(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form__register">
      <h1 className="page-title">Sign Up</h1>
      <div>
        <input
          placeholder="Full Name"
          className="form-control"
          {...register("fullName")}
        />
        {errors.fullName && (
          <Alert variant="danger">{errors.fullName.message}</Alert>
        )}
      </div>
      <div>
        <input
          placeholder="Email"
          className="form-control"
          autoComplete="current-email"
          {...register("email")}
        />
        {errors.email && <Alert variant="danger">{errors.email.message}</Alert>}
      </div>

      <div>
        <input
          placeholder="Password"
          className="form-control"
          autoComplete="current-password"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <Alert variant="danger">{errors.password.message}</Alert>
        )}
      </div>
      <div>
        <input
          placeholder="Phone"
          className="form-control"
          {...register("phonenumber")}
        />
        {errors.phonenumber && (
          <Alert variant="danger">{errors.phonenumber.message}</Alert>
        )}
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Registering..." : "Sign Up"}
      </button>
      <Link to="/auth/login">
        <span>Login?</span>
        <span>Click</span>
      </Link>
    </form>
  );
}

export default FormRegister;
