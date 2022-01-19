import React from 'react';
import './Modal.css'
export default function Modal({isOpen}) {
  return (
      <div className={`modal ${isOpen && 'modal-open'} `}>
          <div>
              Modal
          </div>
      </div>
  )
}
