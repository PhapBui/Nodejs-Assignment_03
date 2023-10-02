import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

import { useDispatch, useSelector } from "react-redux";

import {
  authActions,
  selectIsLoggedIn,
  selectUserList,
} from "../../../features/auth/loginSlice.js";
import "./Login.scss";

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

function FormLogin() {
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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userArray = useSelector(selectUserList);

  // Navigate when user login
  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [navigate, isLoggedIn]);

  //check a product in your shopping cart.
  const checkAnUserIsExist = (userArr, email) => {
    if (!userArr) return;
    return userArr.find((p) => p.email === email);
  };
  // Get user list from localstorage

  const onSubmit = (data) => {
    const currentUser = checkAnUserIsExist(userArray, data.email);
    if (currentUser) {
      if (currentUser.password === data.password) {
        dispatch(authActions.login(currentUser));
      } else {
        alert("incorrect password");
      }
    } else {
      alert("Your email is invalid");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form__login"
    >
      <h1 className="page-title">Sign In</h1>

      <div>
        <input
          placeholder="Email"
          type="email"
          className="form-control"
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <input
          placeholder="Password"
          className="form-control"
          type="password"
          autoComplete="username"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit">Sign In</button>
      <Link to="/register">
        <span>Create an account?</span>
        <span>Sign up</span>
      </Link>
    </form>
  );
}

export default FormLogin;
