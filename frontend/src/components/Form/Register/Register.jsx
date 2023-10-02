import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import {
  authActions,
  selectUserList,
} from "../../../features/auth/loginSlice.js";

import { phoneRegExp } from "../../../util/regExp.js";
import "./Register.scss";

function FormRegister() {
  const [isValidEmail, setIsValidEmail] = useState({
    isValid: true,
    message: "",
  });

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
      .email("Please enter a valid email")
      .when("checkEmail", {
        is: true,
        then: yup.string().test({
          message: () => "Email already exists",
          test: async (values) => {
            console.log(values);
          },
        }),
      }),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(3, "Please")
      .required("Please enter your phonenumber"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = watch("email");
  const userArray = useSelector(selectUserList);

  //check a product in your shopping cart.
  const checkAnUserIsExist = (userArr, email) => {
    if (!userArr) return;
    return userArr.find((p) => p.email === email);
  };

  useEffect(() => {
    const validEmail = setTimeout(() => {
      const isValidEmail = checkAnUserIsExist(userArray, email);
      if (isValidEmail) {
        setIsValidEmail((prev) => ({
          isValid: false,
          message: "Email already use plz try a new email",
        }));
      } else {
        setIsValidEmail((prev) => ({
          isValid: true,
          message: "",
        }));
      }
    }, 500);

    return () => clearTimeout(validEmail);
  }, [email, userArray]);

  const onSubmit = (data) => {
    if (isValidEmail.isValid) {
      dispatch(authActions.registerNewUser(data));
      navigate("/login");
    } else {
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form__register"
    >
      <h1 className="page-title">Sign Up</h1>
      <div>
        <input
          placeholder="Full Name"
          className="form-control"
          {...register("fullName")}
        />
        {errors.fullName && <p>{errors.fullName.message}</p>}
      </div>
      <div>
        <input
          placeholder="Email"
          className="form-control"
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}
        {!isValidEmail.isValid && <p>{isValidEmail.message}</p>}
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
      <div>
        <input
          placeholder="Phone"
          className="form-control"
          {...register("phone")}
        />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>
      <button type="submit">Sign Up</button>
      <Link to="/login">
        <span>Login?</span>
        <span>Click</span>
      </Link>
    </form>
  );
}

export default FormRegister;
