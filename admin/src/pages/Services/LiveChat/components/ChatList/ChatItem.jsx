import { ImageListItem, Stack, Typography } from "@mui/material";
import { icons } from "../../../../../assets/icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ChatItem = ({ data }) => {
  return (
    <Link to={`/service/chat?roomId=${data._id}`}>
      <Stack direction="row">
        <ImageListItem>{icons.user}</ImageListItem>
        <Typography variant="body1">{data._id}</Typography>
      </Stack>
    </Link>
  );
};
ChatItem.propTypes = {
  data: PropTypes.object,
};

export default ChatItem;
