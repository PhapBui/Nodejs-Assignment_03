import React from "react";
import { useSelector } from "react-redux";
import { selectUserId } from "../../../features/auth/authSlice";

const ChatItem = ({ message }) => {
  const userId = useSelector(selectUserId);
  return (
    <div className={`message ${userId === message.userId ? "right" : "left"}`}>
      {message.content}
    </div>
  );
};

export default ChatItem;
