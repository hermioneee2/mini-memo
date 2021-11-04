import EditorPresenter from "./EditorPresenter";
import React, { useState } from "react";

const EditorContainer = ({ isOpen, modalClose }) => {
  const atSave = () => {
    console.log("save"); //TODO implement save
    modalClose(false);
  };

  const atCancel = () => {
    console.log("cancel");
    modalClose(false); //TODO implement cancel
  };

  return (
    <EditorPresenter isOpen={isOpen} atSave={atSave} atCancel={atCancel} />
  );
};

export default EditorContainer;
