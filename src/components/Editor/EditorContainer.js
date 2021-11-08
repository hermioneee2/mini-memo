import EditorPresenter from "./EditorPresenter";
import React, { useState } from "react";
import { storeMemo } from "../../memo-storage/memo-localstorage";

const EditorContainer = ({ isOpen, modalClose }) => {
  const atSave = (memoObj) => {
    storeMemo(memoObj.title, memoObj.content);
    modalClose(false);
  };

  const atCancel = () => {
    modalClose(false);
  };

  return (
    <EditorPresenter isOpen={isOpen} atSave={atSave} atCancel={atCancel} />
  );
};

export default EditorContainer;
