import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const MessageItem = ({ message, userId }) => {
  return (
    <Typography textAlign={userId % 2 === 0 ? "left" : "right"}>
      {message}
    </Typography>
  );
};
MessageItem.propTypes = {
  message: PropTypes.string,
  userId: PropTypes.number,
};

export default MessageItem;
