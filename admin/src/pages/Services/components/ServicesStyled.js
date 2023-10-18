import { Box, Container, Stack, styled } from "@mui/material";
import { cssVariables } from "../../../utils/theme";

export const ServiceLayout = styled(Container)({
  height: "100vh",
  backgroundColor: "#f9fbfd",
});

export const ServiceWrapper = styled(Stack)({
  height: "100%",
});

export const MainContent = styled(Stack)({
  flexGrow: 1,
  backgroundColor: "#fff",
});

export const ChatSidebar = styled(Box)({
  maxWidth: cssVariables.width.sidebar,
  borderRight: "1px solid rgba(0, 0, 0, 0.12)",
  padding: 8,
});
export const ChatBoard = styled(Stack)({
  flexGrow: 1,
});
