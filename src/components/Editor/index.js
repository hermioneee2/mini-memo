import EditorPresenter from "./EditorPresenter";
// import React, { useState } from "react";
import {
  storeMemo,
  modifyMemo,
} from "../../memo-storage/memo-localstorage";
// import axios from "axios";
import { observer, inject } from "mobx-react";

const Editor = ({ storeEditor, storeData, storeUrl }) => {
  const controlEditor = storeEditor;
  const dataManage = storeData;
  const urlStore = storeUrl;

  const setURLQuery = (e) => {
    urlStore.setLongUrl(e.target.value);
  };

  const atSave = (memoObj) => {
    storeMemo(dataManage.cwd, memoObj.title, memoObj.content);
    dataManage.reloadCwd();
    controlEditor.setEditorFalse();
    controlEditor.setNewEditorFalse();
    urlStore.setShortenedUrl("");
    urlStore.setLongUrl("");
  };

  const atModify = (memoObj, id) => {
    modifyMemo(dataManage.cwd, memoObj, id);
    dataManage.reloadCwd();
    controlEditor.setEditorFalse();
    controlEditor.setNewEditorFalse();
    urlStore.setShortenedUrl("");
    urlStore.setLongUrl("");
  };

  const atCancel = () => {
    controlEditor.setEditorFalse();
    controlEditor.setNewEditorFalse();
    urlStore.setShortenedUrl("");
    urlStore.setLongUrl("");
  };
  return (
    <EditorPresenter
      atSave={atSave}
      atModify={atModify}
      atCancel={atCancel}
      setURLQuery={setURLQuery}
      urlStore={urlStore}
    />
  );
};

export default inject("storeEditor", "storeData", "storeUrl")(observer(Editor));
