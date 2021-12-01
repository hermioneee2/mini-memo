import EditorPresenter from "./EditorPresenter";
// import React, { useState } from "react";
import {
  storeMemo,
  modifyMemo,
  modifyTime,
} from "../../memo-storage/memo-localstorage";
// import axios from "axios";
import { observer, inject } from "mobx-react";

const Editor = ({ storeEditor, storeData, storeUrl }) => {
  // const [url, setURL] = useState("");
  // const [shortenedURL, setShortenedURL] = useState();
  const controlEditor = storeEditor;
  const dataManage = storeData;
  const urlStore = storeUrl;

  const setURLQuery = (e) => {
    urlStore.setLongUrl(e.target.value);
  };

  // const setURLButton = urlStore.getShortenedUrl(successMsg, failMsg);

  const atSave = (memoObj) => {
    storeMemo(dataManage.cwd, memoObj.title, memoObj.content);
    dataManage.reloadCwd();
    controlEditor.setEditorFalse();
    controlEditor.setNewEditorFalse();
    urlStore.setShortenedURL("");
    urlStore.setLongUrl("");
  };

  const atModify = (memoObj, id) => {
    modifyMemo(dataManage.cwd, memoObj, id);
    dataManage.reloadCwd();
    controlEditor.setEditorFalse();
    controlEditor.setNewEditorFalse();
    urlStore.setShortenedURL("");
    urlStore.setLongUrl("");
  };

  const atModifyTime = (memoObj, id) => {
    modifyTime(dataManage.cwd, memoObj, id);
    dataManage.reloadCwd();
    controlEditor.setEditorFalse();
    controlEditor.setNewEditorFalse();
    urlStore.setShortenedURL("");
    urlStore.setLongUrl("");
  };

  const atCancel = () => {
    controlEditor.setEditorFalse();
    controlEditor.setNewEditorFalse();
    urlStore.setShortenedURL("");
    urlStore.setLongUrl("");
  };
  return (
    <EditorPresenter
      atSave={atSave}
      atModify={atModify}
      atModifyTime={atModifyTime}
      atCancel={atCancel}
      setURLQuery={setURLQuery}
      urlStore={urlStore}
      // url={url}
      // shortenedURL={shortenedURL}
    />
  );
};

export default inject("storeEditor", "storeData", "storeUrl")(observer(Editor));
