import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { selectIsLoggedIn } from "@/redux/auth/authSlice";

const Authorization = ({ roles }) => {
  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userRole = useSelector((state) => state.auth.user.role);
  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
    return () => {};
  }, [isLoggedIn, navigate]);
  return (
    <>
      {roles.includes(userRole) ? (
        <>
          <Outlet />
        </>
      ) : (
        <>
          <h1>Your role cant access this page</h1>
          <div>
            <Link to="/service/chat">Back to chat page</Link>
          </div>
          <span>Or</span>
          <div>
            <Link to="/logout">Logout</Link>
          </div>
        </>
      )}
    </>
  );
};

Authorization.propTypes = {
  roles: PropTypes.array,
};

export default Authorization;
