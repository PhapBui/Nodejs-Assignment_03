import { Box } from "@mui/material";
import ChatItem from "./ChatItem";
import { useSelector } from "react-redux";
import { selectChatRoomList } from "../../../../../redux/chat/chatSlice";

const ChatList = () => {
  const roomList = useSelector(selectChatRoomList);
  return (
    <Box component="ul">
      {roomList.map((room) => (
        <ChatItem key={room._id} data={room} />
      ))}
    </Box>
  );
};

export default ChatList;
