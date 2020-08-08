import React, { useState } from "react";
import Modal from "./Modal";

const ModalController = () => {
  const [show, showModal] = useState(false);

  return (
    <main>
      {/* <h1>React Modal</h1>
      <button type="button" onClick={showModal(true)}>
        open
      </button> */}
      <h1>React Modal</h1>
      <Modal show={show} handleClose={() => showModal(false)}>
        <p>Modal</p>
        <p>Data</p>
      </Modal>
      <button type="button" onClick={() => showModal(true)}>
        open
      </button>
    </main>
  );
};
export default ModalController;
