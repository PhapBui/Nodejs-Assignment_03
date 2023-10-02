import React from "react";
import { useDispatch } from "react-redux";
import { productActions } from "../../features/product/productSlice.js";

const Overlay = ({ children }) => {
  const dispatch = useDispatch();

  //   Dispatch hide modal action
  const handlerShowModal = () => {
    dispatch(productActions.hideProductDetailPopup());
  };

  return (
    <>
      {/* Overlay */}
      <div
        style={{
          position: "fixed",
          zIndex: 10,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.3)",
        }}
        onClick={handlerShowModal}
      ></div>
      {/* Modal container */}
      <div
        style={{
          position: "fixed",
          width: "80%",
          zIndex: 100,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          backgroundColor: "#fff",
          padding: "50px",
        }}
      >
        {children}
        <button
          onClick={handlerShowModal}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            padding: "4px",
            lineHeight: 1,
          }}
        >
          X
        </button>
      </div>
    </>
  );
};

export default Overlay;
