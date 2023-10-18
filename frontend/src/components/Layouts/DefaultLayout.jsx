import { memo, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import "./DefaultLayout.scss";
import { authActions } from "../../features/auth/authSlice.js";
import { getFromStorage } from "../../util/localStorage.js";
import ChatPopup from "../LiveChat/ClientChat.jsx";

const DefaultLayout = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const setAutoLogout = useCallback(
    (time) =>
      setTimeout(() => {
        dispatch(authActions.logout());
      }, time),
    [dispatch]
  );

  // auto scroll top after page loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  //auto logout
  useEffect(() => {
    const timeExpired = getFromStorage("timeExpired", null);
    const timeRemaining =
      new Date(timeExpired).getTime() - new Date().getTime();
    setAutoLogout(timeRemaining);
  }, [setAutoLogout]);

  return (
    <>
      <NavBar />
      <Outlet />
      {ChatPopup()}
      <Footer />
    </>
  );
};

export default memo(DefaultLayout);
