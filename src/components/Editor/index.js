import EditorPresenter from "./EditorPresenter";
import React, { useState } from "react";
import { storeMemo, modifyMemo, modifyTime } from "../../memo-storage/memo-localstorage";
import axios from "axios";
import { observer, inject } from "mobx-react";

const Editor = ({ storeEditor, storeData }) => {
  const [url, setURL] = useState("");
  const [shortenedURL, setShortenedURL] = useState();
  const controlEditor = storeEditor;
  const dataManage = storeData;

  const setURLQuery = (e) => {
    setURL(e.target.value);
  };

  const setURLButton = async (successMsg, failMsg) => {
    try {
      const res = await axios.get("http://localhost:3031/getURL", {
        params: {
          url: url,
        },
      });
      if (res && res.status === 200) {
        const { data } = res;
        setShortenedURL(data.result.url);
        navigator.clipboard.writeText(data.result.url);
        successMsg();
      }
    } catch (e) {
      setShortenedURL("");
      failMsg();
    }
  };

  const atSave = (memoObj) => {
    storeMemo(dataManage.cwd, memoObj.title, memoObj.content);
    dataManage.reloadCwd();
    controlEditor.setEditorFalse();
    controlEditor.setNewEditorFalse();
    setShortenedURL("");
    setURL("");
  };

  const atModify = (memoObj, id) => {
    modifyMemo(dataManage.cwd, memoObj, id);
    dataManage.reloadCwd();
    controlEditor.setEditorFalse();
    controlEditor.setNewEditorFalse();
    setShortenedURL("");
    setURL("");
  };
  
  const atModifyTime = (memoObj, id) =>{
    modifyTime(dataManage.cwd, memoObj, id);
    dataManage.reloadCwd();
    controlEditor.setEditorFalse();
    controlEditor.setNewEditorFalse();
    setShortenedURL("");
    setURL("");
  }

  const atCancel = () => {
    controlEditor.setEditorFalse();
    controlEditor.setNewEditorFalse();
    setShortenedURL("");
    setURL("");
  };
  return (
    <EditorPresenter
      atSave={atSave}
      atModify={atModify}
      atModifyTime = {atModifyTime}
      atCancel={atCancel}
      setURLQuery={setURLQuery}
      setURLButton={setURLButton}
      url={url}
      shortenedURL={shortenedURL}
    />
  );
};

export default inject("storeEditor", "storeData")(observer(Editor));
