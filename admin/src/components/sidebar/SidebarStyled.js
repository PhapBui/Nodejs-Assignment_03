import { cssVariables } from "@/utils/theme";
import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const NavbarWrapper = styled("nav")(() => ({
  width: cssVariables.width.sidebar,
  border: `2px solid ${cssVariables.color.sidebarText}`,
  borderLeft: "unset",
  padding: "12px 0 8px 8px",
  color: cssVariables.color.sidebarText,
}));

export const ListTitle = styled("h3")(() => ({
  fontSize: 18,
  padding: "4px 8px",
}));

export const ListItem = styled("ul")(() => ({
  listStyle: "none",
  padding: 0,
}));
export const Item = styled("li")(() => ({
  padding: "8px 16px",
  "&:has(>a.active)": {
    backgroundColor: "rgba(116,81,248,0.2)",
  },
}));

export const NavItem = styled(NavLink)(() => ({
  display: "flex",
  alignItems: "center",
  columnGap: 12,
  "& >span >svg": {
    color: cssVariables.color.icons,
    fontSize: 20,
  },
}));

export const NavTitle = styled("h4")(() => ({}));
