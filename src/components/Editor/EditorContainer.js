import EditorPresenter from "./EditorPresenter";
import React, { useState } from "react";
import { storeMemo, modifyMemo } from "../../memo-storage/memo-localstorage";

const EditorContainer = ({ isOpen, modalClose, id}) => {
  const atSave = (memoObj) => {
    storeMemo(memoObj.title, memoObj.content);
    modalClose(false);
  };
  const atModify = (memoObj, id) => {
    modifyMemo(memoObj, id);
    modalClose(false);
  };

  const atCancel = () => {
    modalClose(false);
  };
  return (
    <EditorPresenter isOpen={isOpen} atSave={atSave} atModify = {atModify} atCancel={atCancel} id = {id}/>
  );
};

export default EditorContainer;
