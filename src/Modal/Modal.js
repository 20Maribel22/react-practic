import React, { useState } from "react";
import "./Modal.css";

function Modal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      {isOpen && <div className="modal">
        
        <div className="modal-body">
          <h1>Modal title</h1>
          <p> I am awesome modal!</p>
          <button onClick={() => setIsOpen(false)}>Close modal</button>
        </div>
      </div>}
    </>
  );
}

export default Modal;
