import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormLogin from "../../components/Form/Login/Login.jsx";
import { authActions, selectIsLoggedIn } from "../../redux/auth/authSlice.js";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  // Navigate when user login
  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [navigate, isLoggedIn]);

  const handlerLogin = async (user) => {
    dispatch(authActions.loginStart(user));
  };
  console.log(import.meta.env.VITE_BACKEND_URL);
  return <FormLogin handlerFormSubmit={handlerLogin} />;
};

export default LoginPage;
