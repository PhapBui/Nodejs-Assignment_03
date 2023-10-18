import { Divider } from "@mui/material";
import Header from "../../../components/header/Header";
import {
  ChatBoard,
  ChatSidebar,
  MainContent,
  ServiceLayout,
  ServiceWrapper,
} from "../components/ServicesStyled";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import ChatList from "./components/ChatList/ChatList";
import ChatInput from "./components/MessageInput/ChatInput";
import SearchContact from "./components/SearchContact/SearchContact";

function AdminChat() {
  return (
    <ServiceLayout>
      <ServiceWrapper>
        <Header />
        <MainContent direction="row" mt={2}>
          <ChatSidebar>
            <SearchContact />
            <ChatList />
          </ChatSidebar>
          <ChatBoard>
            <ChatHistory />

            <Divider />
            <ChatInput />
          </ChatBoard>
        </MainContent>
      </ServiceWrapper>
    </ServiceLayout>
  );
}

export default AdminChat;
