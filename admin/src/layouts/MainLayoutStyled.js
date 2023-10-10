import { Box, Container, styled } from "@mui/material";

export const Wrapper = styled(Container)(() => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  padding: "0 !important",
}));

export const MainBody = styled(Box)(() => ({
  flexGrow: 1,
  display: "flex",
}));
