import { Box } from "@mui/material";
import MessageItem from "./MessageItem";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import Socket from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import {
  chatActions,
  selectMessage,
} from "../../../../../redux/chat/chatSlice";

const io = Socket("http://localhost:5000/admin");
const ChatHistory = () => {
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("roomId");

  const dispatch = useDispatch();
  const messages = useSelector(selectMessage);

  useEffect(() => {
    function getRoomMessages(payload) {
      console.log(payload);
      dispatch(chatActions.getRoomMessage(payload.messages));
    }

    io.on("getRoomSuccess", getRoomMessages);

    return () => {
      io.off("getRoomSuccess", getRoomMessages);
    };
  }, [dispatch]);

  useEffect(() => {
    io.emit("getRoomChat", roomId);
  }, [roomId]);
  return (
    <Box flexGrow={1} sx={{ px: 1, py: 2 }}>
      {messages.map((msg) => (
        <MessageItem
          message={msg.content}
          userId={msg.userId}
          key={msg.userId}
        />
      ))}
    </Box>
  );
};

export default ChatHistory;
