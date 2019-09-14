import React, { useState } from "react"
import Modal from "react-modal"
import PokedexHeader from "./PokedexHeader"
import PokedexMain from "./PokedexMain"
Modal.setAppElement("#root")

function Pokedex() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <button onClick={handleShow}>Launch demo modal</button>
      <Modal
        isOpen={show}
        onRequestClose={handleClose}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <PokedexHeader close={handleClose} />
        <PokedexMain />
      </Modal>
    </>
  )
}

export default Pokedex
