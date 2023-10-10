import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { MainBody, Wrapper } from "./MainLayoutStyled";
import PageContentWrapper from "../components/UI/PageContentWrapper";

const MainLayout = () => {
  return (
    <Wrapper>
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
