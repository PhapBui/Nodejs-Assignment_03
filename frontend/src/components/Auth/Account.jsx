import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

const Account = ({ currentUser }) => {
  return (
    <div>
      <span>{currentUser.fullName}</span>
      <span>
        <AiFillCaretDown />
      </span>
      <span>{"(Logout)"}</span>
    </div>
  );
};

export default Account;
