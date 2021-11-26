import EditorPresenter from "./EditorPresenter";
import React, { useState } from "react";
import { storeMemo, modifyMemo } from "../../memo-storage/memo-localstorage";
import axios from "axios";

const EditorContainer = ({ isOpen, newOpen, modalClose, modalNewClose, id, cwd, forceCwdUpdate }) => {
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
        // console.log(data);
        setShortenedURL(data.result.url);
        navigator.clipboard.writeText(data.result.url);
        successMsg();
      }
    } catch (e) {
      // console.log("error ", e);
      setShortenedURL("");
      failMsg();
    }
  };

  const atSave = (memoObj) => {
    storeMemo(cwd, memoObj.title, memoObj.content);
    forceCwdUpdate();
    modalClose(false);
    modalNewClose(false);
    setShortenedURL("");
  };

  const atModify = (memoObj, id) => {
    modifyMemo(cwd, memoObj, id);
    forceCwdUpdate();
    modalClose(false);
    modalNewClose(false);
    setShortenedURL("");
  };

  const atCancel = () => {
    modalClose(false);
    modalNewClose(false);
    setShortenedURL("");
  };
  return (
    <EditorPresenter
      isOpen={isOpen}
      newOpen={newOpen}
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
};

export default EditorContainer;
