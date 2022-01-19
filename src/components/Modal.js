import React from "react";
import "./Modal.css";
export default function Modal({ isOpen, isClose }) {
  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`modal ${isOpen && "modal-open"} `} 
    onClick={isClose}>
      <div className="modal__dialog" onClick={handleModalDialogClick}>
        <h1>Modal</h1>
        <button onClick={isClose}>Close Modal</button>
      </div>
    </div>
  );
}
