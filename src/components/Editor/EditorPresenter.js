import React, { useState } from "react";
import { Input, Divider, Button, message, Modal } from "antd";
import EditorComponent from "../Editor/EditorComponent";
import {
  existingMemo,
  loadMemoTitle,
  loadMemoContent,
} from "../../memo-storage/memo-localstorage";
import { observer, inject } from "mobx-react";

const EditorPresenter = ({
  storeEditor,
  storeData,
  atSave,
  atModify,
  atCancel,
  handleURLQuery,
  handleURLButton,
  shortenedURL,
}) => {
  const controlEditor = storeEditor;
  const dataManage = storeData;
  const id = controlEditor.id;
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
    console.log(existingMemo(dataManage.cwd, id));
    if (memoObj.content === "" || memoObj.title === "") {
      alert("제목과 내용을 입력해주세요.");
      return;
    } else if (existingMemo(dataManage.cwd, id)) {
      setMemoObjCreatedAt();
      atModify(memoObj, id);
    } else {
      atSave(memoObj);
    }
    dataManage.setMemoList();
    dataManage.setDataList();
  };

  const defaultTitle = () => {
    let r = loadMemoTitle(dataManage.cwd, id);
    return r;
  };
  const defaultContent = () => {
    let r = loadMemoContent(dataManage.cwd, id);
    return r;
  };

  let open;
  if (controlEditor.editor === true || controlEditor.newEditor === true) {
    open = true;
  } else {
    open = false;
  }

  let editor;
  if (controlEditor.newEditor === true)
    editor = (
      <div>
        <Input
          placeholder="Title"
          bordered={false}
          onChange={setMemoObjTitle}
          style={memoTitleStyle}
        />
        <EditorComponent value="" onChange={setMemoObjContent} />
      </div>
    );
  else {
    editor = (
      <div>
        <Input
          defaultValue={defaultTitle()}
          bordered={false}
          onChange={setMemoObjTitle}
          style={memoTitleStyle}
        />
        <EditorComponent
          value={defaultContent()}
          onChange={setMemoObjContent}
        />
      </div>
    );
  }

  return (
    <div>
      <Modal
        visible={open}
        closable={false}
        onCancel={atCancel}
        onOk={onSave}
        style={{ overflow: "hidden", borderRadius: "10px", height: "63vh" }}
        footer={null}
      >
        {editor}
        <Input.Group compact>
          <Input
            style={{ width: "calc(100% - 120px)" }}
            placeholder="Enter your URL here"
            onChange={handleURLQuery}
            onPressEnter={handleURLButtonWrapper}
          />
          <Button
            style={{
              borderColor: "#F0BF39",
              color: "#F0BF39",
              fontWeight: "bold",
              width: "120px",
            }}
            onClick={handleURLButtonWrapper}
          >
            Shorten URL
          </Button>
        </Input.Group>
        <Button
          key="back"
          onClick={atCancel}
          size="small"
          type="link"
          style={{ color: "#C5C5C5" }}
        >
          Cancel
        </Button>
        <Button
          key="submit"
          type="primary"
          onClick={onSave}
          size="small"
          type="link"
          style={{ color: "#F0BF39", float: "right" }}
        >
          Save
        </Button>
      </Modal>
    </div>
  );
};

const memoTitleStyle = {
  fontFamily: "Open Sans",
  fontSize: 17,
  fontWeight: 600,
  marginLeft: 5,
  marginBottom: 7,
};

export default inject("storeEditor", "storeData")(observer(EditorPresenter));
