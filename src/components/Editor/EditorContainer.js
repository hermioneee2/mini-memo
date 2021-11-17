import EditorPresenter from "./EditorPresenter";
import React, { useState } from "react";
import { storeMemo, modifyMemo } from "../../memo-storage/memo-localstorage";

const EditorContainer = ({ isOpen, modalClose, id, cwd, forceCwdUpdate }) => {
  const atSave = (memoObj) => {
    storeMemo(cwd, memoObj.title, memoObj.content);
    forceCwdUpdate();
    modalClose(false);
  };
  const atModify = (memoObj, id) => {
    modifyMemo(cwd, memoObj, id);
    forceCwdUpdate();
    modalClose(false);
  };

  const atCancel = () => {
    modalClose(false);
  };
  return (
    <EditorPresenter
      isOpen={isOpen}
      atSave={atSave}
      atModify={atModify}
      atCancel={atCancel}
      id={id}
      cwd={cwd}
    />
  );
};

export default EditorContainer;
