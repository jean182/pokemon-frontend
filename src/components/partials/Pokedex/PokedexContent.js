import React from 'react';
import ReactDOM from "react-dom"
import ReactFocusTrap from 'focus-trap-react';
import PokedexHeader from "./PokedexHeader"

const PokedexContent = ({
  ariaLabel,
  buttonRef,
  content,
  modalRef,
  onClickAway,
  onClose,
  onKeyDown,
  role = "dialog"
}) => {
  return ReactDOM.createPortal(
    <ReactFocusTrap>
    <aside
      className="pokedex-modal-cover"
      role={role}
      aria-label={ariaLabel}
      aria-modal="true"
      onClick={onClickAway}
      onKeyDown={onKeyDown}
    >
      <div className="pokedex-modal" ref={modalRef}>
        <PokedexHeader>
          <button className="close" aria-labelledby="close-modal" onClick={onClose} ref={buttonRef}>
            <span id="close-modal">&times;</span>
          </button>
        </PokedexHeader>
        {content}
      </div>
      </aside>
    </ReactFocusTrap>,
    document.body
  );
}

export default PokedexContent
