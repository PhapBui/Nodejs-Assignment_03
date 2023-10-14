import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions, selectIsLoggedIn } from "../../redux/auth/authSlice.js";
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

  return <div></div>;
};

export default LogoutPage;
