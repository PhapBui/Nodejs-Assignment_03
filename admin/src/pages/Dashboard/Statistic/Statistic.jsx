import { Card, CardContent, Stack, Typography } from "@mui/material";
import { icons } from "../../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authActions } from "../../../redux/auth/authSlice";

const createStatisticData = (statistic) => {
  return [
    {
      title: "Clients",
      icon: icons.addUser,
      count: statistic?.countUser,
    },
    {
      title: "Total Earning",
      icon: icons.dollar,
      count: statistic.total,
    },
    {
      title: "New Orders",
      icon: icons.order,
      count: statistic.countOrder,
    },
  ];
};

const Statistic = () => {
  const dispatch = useDispatch();
  const statistic = useSelector((state) => state.auth.statistic);

  const statisticData = createStatisticData(statistic);

  useEffect(() => {
    dispatch(authActions.fetchAllUserStart());
  }, [dispatch]);
  return (
    <Stack direction="row" columnGap="2px">
      {statisticData.map((statistic) => (
        <Card sx={{ width: "calc(100% / 3)" }} key={statistic.title}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <CardContent>
              <Typography sx={{ fontWeight: "bold" }}>
                {statistic.count}
              </Typography>
              <Typography>{statistic.title}</Typography>
            </CardContent>
            <Typography sx={{ px: 2 }}>{statistic.icon}</Typography>
          </Stack>
        </Card>
      ))}
    </Stack>
  );
};

Statistic.propTypes = {};

export default Statistic;
