import { Button } from "@mui/material";
import { HeaderWrapper, PageLogo } from "./HeaderStyled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSlice";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <HeaderWrapper>
      <PageLogo>Header</PageLogo>
      <Button>
        <Link to={`/${isLoggedIn ? "logout" : "login"}`}>
          {isLoggedIn ? "Logout" : "Login"}
        </Link>
      </Button>
    </HeaderWrapper>
  );
};

export default Header;
