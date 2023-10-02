import React, { useState } from "react";
import { createPortal } from "react-dom";
import { LiaFacebookMessenger } from "react-icons/lia";

import "./LiveChat.scss";
import Chat from "./Chat/Chat.jsx";

const LiveChat = () => {
  const [isShowChatWindow, setIsShowChatWindow] = useState(false);
  const handlerOpenChatWindow = (e) => {
    setIsShowChatWindow((prev) => !prev);
  };
  return (
    <div className="live__chat-container">
      <button
        className="live__chat-icon"
        onClick={handlerOpenChatWindow}
      >
        <LiaFacebookMessenger
          style={{
            width: 50,
            height: "auto",
          }}
        />
      </button>
      {isShowChatWindow && (
        <div className="live__chat-window">
          <Chat />
        </div>
      )}
    </div>
  );
};

const RootModal = () =>
  createPortal(<LiveChat />, document.getElementById("live-chat"));

export default RootModal;
