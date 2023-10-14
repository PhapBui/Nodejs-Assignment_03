import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { MainBody, Wrapper } from "./MainLayoutStyled";
import PageContentWrapper from "../components/UI/PageContentWrapper";
import { useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import { authActions } from "../redux/auth/authSlice";
import { getFromStorage } from "../utils/localStorage";

const MainLayout = () => {
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
    <Wrapper maxWidth={false}>
      <Header />
      <MainBody component="main">
        <Sidebar />
        <PageContentWrapper>
          <Outlet />
        </PageContentWrapper>
      </MainBody>
    </Wrapper>
  );
};

export default MainLayout;
