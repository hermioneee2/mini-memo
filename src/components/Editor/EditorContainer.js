import EditorPresenter from "./EditorPresenter";
import React, { useState } from "react";
import { storeMemo, modifyMemo } from "../../memo-storage/memo-localstorage";
import axios from "axios";
import {observer} from 'mobx';
import ShowEditor from "../../stores/showEditor";

const EditorContainer = observer(({id, cwd, forceCwdUpdate }) => {
  const showEditor = new ShowEditor();

  const [url, setURL] = useState("");
  const [shortenedURL, setShortenedURL] = useState();

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
    showEditor.setShowEditorFalse();
    showEditor.setShowNewEditorFalse();
    setShortenedURL("");
  };

  const atModify = (memoObj, id) => {
    modifyMemo(cwd, memoObj, id);
    forceCwdUpdate();
    showEditor.setShowEditorFalse();
    showEditor.setShowNewEditorFalse();
    setShortenedURL("");
  };

  const atCancel = () => {
    showEditor.setShowEditorFalse();
    showEditor.setShowNewEditorFalse();
    setShortenedURL("");
  };
  return (
    <EditorPresenter
      isOpen={showEditor.showEditor}
      newOpen={showEditor.showNewEditor}
      atSave={atSave}
      atModify={atModify}
      atCancel={atCancel}
      id={id}
      cwd={cwd}
      handleURLQuery={handleURLQuery}
      handleURLButton={handleURLButton}
      shortenedURL={shortenedURL}
    />
  );
});

export default EditorContainer;
