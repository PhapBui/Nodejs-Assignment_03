import { Box, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { orderActions } from "@/redux/order/orderSlice";
import Statistic from "./Statistic/Statistic";
import History from "./History/History";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderActions.fetchAllOrderStart());
  }, [dispatch]);

  return (
    <>
      <Statistic />
      <Box sx={{ px: 2, mt: 2, pb: 2 }} component={Paper}>
        <Typography variant="h5" sx={{ py: 2 }}>
          History
        </Typography>
        <History />
      </Box>
    </>
  );
};

export default Dashboard;
