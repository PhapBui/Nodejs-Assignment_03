import React, { useState } from "react";
import Register from "../../components/Form/Register/Register.jsx";
import authApi from "../../app/authApi.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const handlerRegisterForm = async (data) => {
    try {
      const res = await authApi.signup(data);
      console.log(res);
      if (res.status === 1) {
        toast.success(res.message);
        navigate("/auth/login");
      } else {
        const error = res.result.reduce((init, curr) => {
          init[curr.path] = curr.msg;
          return init;
        }, {});
        console.log(error);
        setErrors((prev) => error);
        toast.error(res.message);
        throw new Error(res.message);
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <Register handlerFormSubmit={handlerRegisterForm} errorsMsg={errors} />
  );
};

export default RegisterPage;
