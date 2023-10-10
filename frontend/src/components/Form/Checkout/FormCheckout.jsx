import { yupResolver } from "@hookform/resolvers/yup";
import { memo } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";

import { phoneRegExp } from "../../../util/regExp.js";
import "./FormCheckout.scss";

function FormCheckout({ currentUser, handlerSubmit }) {
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .min(3, "Please enter your name")
      .required("Please enter your name"),
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Please enter your email"),
    phonenumber: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(3, "Please")
      .required("Please enter your phonenumber"),
    address: yup
      .string()
      .min(8, "Must be a valid address")
      .required("Please enter your address"),
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: currentUser,
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const handleLoginSubmit = (data) => {
    handlerSubmit(data);
  };
  return (
    <form onSubmit={handleSubmit(handleLoginSubmit)} className="form__checkout">
      <label htmlFor="fullname">
        <span>Full Name:</span>
        <input
          placeholder="Full Name"
          className="form-control"
          id="fullname"
          {...register("fullName")}
        />
        {errors.customer_name && <p>{errors.customer_name.message}</p>}
      </label>

      <label htmlFor="email">
        <span>Email:</span>
        <input
          placeholder="Email"
          className="form-control"
          id="email"
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </label>

      <label htmlFor="phonenumber">
        <span>Phone Number:</span>
        <input
          placeholder="Phone number"
          className="form-control"
          type="text"
          autoComplete="username"
          id="phonenumber"
          {...register("phonenumber")}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </label>

      <label htmlFor="address">
        <span>Address:</span>
        <input
          placeholder="Address"
          className="form-control"
          id="address"
          {...register("address")}
        />
        {errors.phone && <p>{errors.phone.message}</p>}
      </label>
      <button type="submit">Place order</button>
    </form>
  );
}
export default memo(FormCheckout);
