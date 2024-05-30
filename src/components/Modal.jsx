import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Thank you!</h1>
        </div>
        <div className="body">
          <p>Check the items below to verify your orders.</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button 
            onClick={() => {
              setOpenModal(false);
            }}
            id="continueBtn"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;