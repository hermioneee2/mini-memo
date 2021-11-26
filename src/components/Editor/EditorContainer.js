import EditorPresenter from "./EditorPresenter";
import React, { useState } from "react";
import { storeMemo, modifyMemo } from "../../memo-storage/memo-localstorage";
import axios from "axios";
import { observer, inject } from "mobx-react"

const EditorContainer = ({storeEditor, cwd, forceCwdUpdate}) => {
  const [url, setURL] = useState("");
  const [shortenedURL, setShortenedURL] = useState();
  const controlEditor = storeEditor;

  const handleURLQuery = (e) => {
    setURL(e.target.value);
  };

  const handleURLButton = async (successMsg, failMsg) => {
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
    storeMemo(cwd, memoObj.title, memoObj.content);
    forceCwdUpdate();
    controlEditor.setEditorFalse();
    controlEditor.setNewEditorFalse();
    setShortenedURL("");
  };

  const atModify = (memoObj, id) => {
    modifyMemo(cwd, memoObj, id);
    forceCwdUpdate();
    controlEditor.setEditorFalse();
    controlEditor.setNewEditorFalse();
    setShortenedURL("");
  };

  const atCancel = () => {
    controlEditor.setEditorFalse();
    controlEditor.setNewEditorFalse();
    setShortenedURL("");
  };
  return (
    <EditorPresenter
      atSave={atSave}
      atModify={atModify}
      atCancel={atCancel}
      cwd={cwd}
      handleURLQuery={handleURLQuery}
      handleURLButton={handleURLButton}
      shortenedURL={shortenedURL}
    />
  );
};

export default inject("storeEditor")(observer(EditorContainer));
