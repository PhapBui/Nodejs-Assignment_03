import { Card, CardContent, Stack, Typography } from "@mui/material";
import { icons } from "../../../assets/icons";

const Statistic = () => {
  return (
    <Stack direction="row" columnGap="2px">
      <Card sx={{ width: "calc(100% / 3)" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <CardContent>
            <Typography>2</Typography>
            <Typography>Clients</Typography>
          </CardContent>
          <Typography sx={{ px: 2 }}>{icons.addUser}</Typography>
        </Stack>
      </Card>
      <Card sx={{ width: "calc(100% / 3)" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <CardContent>
            <Typography>2</Typography>
            <Typography>Clients</Typography>
          </CardContent>
          <Typography sx={{ px: 2 }}>{icons.addUser}</Typography>
        </Stack>
      </Card>
      <Card sx={{ width: "calc(100% / 3)" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <CardContent>
            <Typography>2</Typography>
            <Typography>Clients</Typography>
          </CardContent>
          <Typography sx={{ px: 2 }}>{icons.addUser}</Typography>
        </Stack>
      </Card>
    </Stack>
  );
};

Statistic.propTypes = {};

export default Statistic;
