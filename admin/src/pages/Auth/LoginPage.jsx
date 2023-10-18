import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormLogin from "../../components/Form/Login/Login.jsx";
import {
  authActions,
  selectIsLoggedIn,
  selectLoading,
} from "../../redux/auth/authSlice.js";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userRole = useSelector((state) => state.auth.user.role);
  const isLoading = useSelector(selectLoading);

  // Navigate when user login
  useEffect(() => {
    if (isLoggedIn) {
      userRole === "Admin" ? navigate("/") : navigate("/service/chat");
    }
  }, [navigate, isLoggedIn, userRole]);

  const handlerLogin = async (user) => {
    dispatch(authActions.loginStart(user));
  };
  return <FormLogin handlerFormSubmit={handlerLogin} loading={isLoading} />;
};

export default LoginPage;
