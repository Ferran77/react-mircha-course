import { createPortal } from "react-dom";
import "./Modal.css";

export const ModalPortal = ({ children, isOpen, closeModalPortal }) => {
  return (
    <article className={`modal ${isOpen && "is-open"}`} >
      {createPortal(
        <div className="modal-container" >
          <button className="modal-close" onClick={closeModalPortal}>X</button>
          {children}
        </div>,
        document.getElementById("modal")
      )}
    </article >
  );
};
export default ModalPortal;
