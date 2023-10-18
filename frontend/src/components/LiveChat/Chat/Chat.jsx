import React, { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { SiIconify } from "react-icons/si";

import "./Chat.scss";
import ChatItem from "./ChatItem";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../features/auth/authSlice";
import { Link } from "react-router-dom";

const Chat = ({ sendMsg, handlerCloseChat, messages, onClick }) => {
  const [message, setMessage] = useState("");

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handlerChangeInputMessage = (e) => {
    setMessage(e.target.value);
  };

  const handlerSubmitForm = (e) => {
    e.preventDefault();
    if (!isLoggedIn) return;
    sendMsg(message.trim());
    setMessage("");
  };

  return (
    <div className="wrapper">
      <div className="chat-header">
        <div className="title">Customer Support</div>
        <div className="cta" onClick={onClick}>
          Close
        </div>
      </div>
      <div className="body">
        {isLoggedIn ? (
          messages?.length > 0 ? (
            messages.map((message) => (
              <ChatItem message={message} key={message._id} />
            ))
          ) : (
            <>"What's ur mind?"</>
          )
        ) : (
          <div className="login-msg">
            <p>You need login for this feature!</p>
            <Link to="/auth/login">Login</Link>
          </div>
        )}
      </div>
      <form className="chat-footer" onSubmit={handlerSubmitForm}>
        <div className="user-content">
          <div className="avatar">
            <FaUserCircle />
          </div>
          <div className="input">
            <input
              type="text"
              disabled={!isLoggedIn}
              value={message}
              onChange={handlerChangeInputMessage}
              placeholder="Enter message!"
            />
          </div>
        </div>
        <div className="chat-control">
          <div className="attach">
            <GrAttachment />
          </div>
          <div className="icon">
            <SiIconify />
          </div>
          <button type="submit" className="send-btn">
            <BsFillSendFill />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
