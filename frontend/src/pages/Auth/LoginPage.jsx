import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authApi from "../../app/authApi.js";
import FormLogin from "../../components/Form/Login/Login.jsx";
import {
  authActions,
  selectIsLoggedIn,
} from "../../features/auth/authSlice.js";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  // Navigate when user login
  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [navigate, isLoggedIn]);

  const handlerLogin = async (user) => {
    try {
      const res = await authApi.login(user);
      console.log(res);
      if (res.status === 0) throw new Error(res.message);
      dispatch(authActions.login(res.result));
      toast.success(res.message);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return <FormLogin handlerFormSubmit={handlerLogin} />;
};

export default LoginPage;
