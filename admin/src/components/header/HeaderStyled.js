import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import { cssVariables } from "../../utils/theme";

export const HeaderWrapper = styled("header")(() => ({
  display: "flex",
  flexDirection: "row",
  borderBottom: `1px solid ${cssVariables.color.sidebarText}`,
  alignItems: "center",
}));

export const PageLogo = styled(Link)(() => ({
  width: cssVariables.width.sidebar,
  textAlign: "center",
  color: cssVariables.color.icons,
  fontSize: 24,
  borderRight: `1px solid ${cssVariables.color.sidebarText}`,
  lineHeight: cssVariables.height.header,
}));
