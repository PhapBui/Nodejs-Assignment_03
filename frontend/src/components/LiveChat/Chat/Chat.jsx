import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { SiIconify } from "react-icons/si";
import { GrAttachment } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";

import "./Chat.scss";
import { images } from "../../../assets/img/index.js";

const Chat = () => {
  return (
    <div className="wrapper">
      <div className="chat-header">
        <div className="title">Customer Support</div>
        <div className="cta">Let's Chat App</div>
      </div>
      <div className="body">
        <img
          src={images.chatting}
          alt="chatting"
        />
      </div>
      <div className="chat-footer">
        <div className="user-content">
          <div className="avatar">
            <FaUserCircle />
          </div>
          <div className="input">
            <input
              type="text"
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
          <div className="send-btn">
            <BsFillSendFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
