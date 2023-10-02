import React from "react";
import { createPortal } from "react-dom";

const RootModal = (El) =>
  createPortal(<El />, document.getElementById("modal"));

export default RootModal;
