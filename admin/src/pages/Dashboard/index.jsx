import { Box, Paper, Typography } from "@mui/material";
import History from "./History/History";
import Statistic from "./Statistic/Statistic";

const Dashboard = () => {
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
