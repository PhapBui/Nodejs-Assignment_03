import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { selectMessage } from "../../../../../redux/chat/chatSlice";
import MessageItem from "./MessageItem";

const ChatHistory = () => {
  const messages = useSelector(selectMessage);

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
