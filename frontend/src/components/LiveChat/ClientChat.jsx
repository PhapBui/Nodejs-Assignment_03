import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { LiaFacebookMessenger } from "react-icons/lia";
import useOutside from "../../hooks/use-onclick-outside";
import Chat from "./Chat/Chat.jsx";
import "./LiveChat.scss";

// connec socketio

const LiveChat = () => {
  const [isShowChatWindow, setIsShowChatWindow] = useState(false);

  const chatRef = useRef();

  const handlerSendMsgChat = (msg) => {
    console.log(msg);
  };

  const handlerOpenChatWindow = (e) => {
    setIsShowChatWindow((prev) => !prev);
  };
  useOutside(chatRef, setIsShowChatWindow);

  return (
    <div className="live__chat-container">
      <button className="live__chat-icon" onClick={handlerOpenChatWindow}>
        <LiaFacebookMessenger
          style={{
            width: 50,
            height: "auto",
          }}
        />
      </button>
      {isShowChatWindow && (
        <div className="live__chat-window" ref={chatRef}>
          <Chat onClick={handlerOpenChatWindow} sendMsg={handlerSendMsgChat} />
        </div>
      )}
    </div>
  );
};

const ChatPopup = () =>
  createPortal(<LiveChat />, document.getElementById("live-chat"));

export default ChatPopup;
