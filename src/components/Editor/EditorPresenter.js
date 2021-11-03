import React, { useState } from "react";
import Modal from "react-modal";

const EditorPresenter = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <h1>Editor</h1>
      <button onClick={()=> setModalOpen(true)}>Modal Open</button>
      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        hello
      </Modal>
    </div>
  );
};

export default EditorPresenter;
