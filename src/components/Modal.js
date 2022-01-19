import React from 'react';
import './Modal.css'
export default function Modal({isOpen,isClose}) {
  return (
      <div className={`modal ${isOpen && 'modal-open'} `}>
          
          <h1>Modal</h1>
          <button onClick={isClose}>
              Close Modal
          </button>
      </div>
  )
}
