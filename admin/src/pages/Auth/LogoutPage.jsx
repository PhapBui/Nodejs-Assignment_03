import { authActions, selectIsLoggedIn } from "@/redux/auth/authSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const LogoutPage = () => {
  const dispatch = useDispatch();
  const isLoggined = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggined) {
      dispatch(authActions.logout());
    } else {
      navigate("/login");
    }
  }, [dispatch, isLoggined, navigate]);

  return <></>;
};

export default LogoutPage;
