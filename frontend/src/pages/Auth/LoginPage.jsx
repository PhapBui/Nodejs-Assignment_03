import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authApi from "../../app/authApi.js";
import FormLogin from "../../components/Form/Login/Login.jsx";
import {
  authActions,
  selectIsLoggedIn,
} from "../../features/auth/authSlice.js";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  // Navigate when user login
  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [navigate, isLoggedIn]);

  const handlerLogin = async (user) => {
    try {
      setLoading(true);
      const res = await authApi.login(user);
      if (res.status === 0) throw new Error(res.message);
      dispatch(authActions.login(res.result));
      setLoading(false);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return <FormLogin handlerFormSubmit={handlerLogin} loading={loading} />;
};

export default LoginPage;
