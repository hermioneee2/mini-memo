import React, { useState } from "react";
import Modal from "react-modal";

const EditorPresenter = ({open, setter}) => {
  return (
    <div>
      <Modal isOpen={open} onRequestClose={() => setter(false)}>
        hello
      </Modal>
    </div>
  );
};

export default EditorPresenter;
