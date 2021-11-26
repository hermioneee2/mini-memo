import React, { memo, useState } from "react";
import Modal from "react-modal";
import { Input, Divider, Button, message } from "antd";
import EditorComponent from "../Editor/Quill";
import { existingMemo, loadMemoTitle, loadMemoContent } from "../../memo-storage/memo-localstorage";
import ReactQuill from "react-quill";
import styled from "styled-components";

const { TextArea } = Input;

const style = {
  width: "701px",
  height: "486px",
};

const EditorPresenter = ({
  isOpen,
  newOpen,
  atSave,
  atModify,
  atCancel,
  id,
  cwd,
  handleURLQuery,
  handleURLButton,
  shortenedURL,
}) => {
  const [memoObj, setMemoObj] = useState({
    title: "",
    content: "",
    createdAt: "",
  });

  const setMemoObjTitle = (e) => {
    let newObj = memoObj;
    //console.log(e)
    newObj.title = e.target.value;
    setMemoObj(newObj);
  };

  const setMemoObjContent = (e) => {
    let newObj = memoObj;
    //console.log(e)
    newObj.content = e;
    setMemoObj(newObj);
  };

  const setMemoObjCreatedAt = () => {
    let newObj = memoObj;
    //console.log(e)
    newObj.createdAt = new Date();
    setMemoObj(newObj);
  };

  const successMsg = () => {
    message.success({
      content: "Shortened URL is copied to the clipboard.",
      // className: "custom-class",
      style: {
        marginTop: "40vh",
      },
    });
  };

  const failMsg = () => {
    message.error({
      content: "Please enter valid URL",
      // className: "custom-class",
      style: {
        marginTop: "40vh",
      },
    });
  };

  const handleURLButtonWrapper = () => {
    handleURLButton(successMsg, failMsg);
  };

  const onSave = () => {
    console.log(existingMemo(cwd, id));
    if (memoObj.content === "" || memoObj.title === "") {
      alert("제목과 내용을 입력해주세요.");
      return;
    } else if (existingMemo(cwd, id)) {
      setMemoObjCreatedAt();
      atModify(memoObj, id);
    } else {
      atSave(memoObj);
    }
  };
  
  const open = () => {
    if(isOpen === true || newOpen === true)
      return true;
    else
      return false;

  }
  const defaultTitle = () =>{
    let r = loadMemoTitle(cwd, id);
    return r;
  }
  const defaultContent = () =>{
    let r = loadMemoContent(cwd, id);
    return r;
  }

  let editor;
  if(newOpen == true)
    editor = <div><Input placeholder="Title" onChange={setMemoObjTitle} /><Divider /><EditorComponent value="" onChange={setMemoObjContent} /></div>;
  else{
    console.log("!#@!@QWEAS")
    editor = <div><Input defaultValue = {defaultTitle()} onChange={setMemoObjTitle} /><Divider /><EditorComponent value={defaultContent()} onChange={setMemoObjContent} /></div>;
  }
  return (
    <div>
      <Modal isOpen={open()} onRequestClose={atCancel}>
        {editor}
        <Input.Group compact>
          <Input
            style={{ width: "calc(40% - 200px)" }}
            placeholder="Enter your URL here"
            onChange={handleURLQuery}
            onPressEnter={handleURLButtonWrapper}
          />
          <Button
            style={{
              borderColor: "#F0BF39",
              color: "#F0BF39",
              fontWeight: "bold",
            }}
            onClick={handleURLButtonWrapper}
          >
            Shorten URL
          </Button>
        </Input.Group>
        {/* <Input defaultValue={shortenedURL} /> */}
        <div>Shortend URL: {shortenedURL}</div>
        <div style={{ marginRight: "10px" }}>
          <Button
            type="primary"
            style={{
              background: "#F0BF39",
              borderColor: "#F0BF39",
              marginTop: "10px",
            }}
            onClick={onSave}
          >
            Save
          </Button>
          <Button onClick={atCancel}>Cancel</Button>
        </div>
      </Modal>
    </div>
  );
};

export default EditorPresenter;
