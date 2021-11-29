import React, { useState } from "react";
import { Input, Divider, Button, message, Modal } from "antd";
import EditorComponent from "../Editor/EditorComponent";
import {
  existingMemo,
  loadMemoTitle,
  loadMemoContent,
} from "../../memo-storage/memo-localstorage";
import { observer, inject } from "mobx-react";
import { SwapOutlined } from "@ant-design/icons";

const EditorPresenter = ({
  storeEditor,
  storeData,
  atSave,
  atModify,
  atCancel,
  handleURLQuery,
  handleURLButton,
  url,
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
        onCancel={onSave}
        style={{ overflow: "hidden", borderRadius: "10px", height: "440px" }}
        footer={null}
      >
        {editor}
        <Input.Group
          compact
          style={{
            position: "relative",
            top: "-45px",
            left: "150px",
          }}
        >
          <Input
            style={{
              width: "290px",
              background: "#F5F5F5",
            }}
            bordered={false}
            placeholder="Shorten your URL here"
            value={url}
            onChange={handleURLQuery}
            onPressEnter={handleURLButtonWrapper}
          />
          <Button
            type="primary"
            icon={<SwapOutlined />}
            style={{
              borderColor: "#F0BF39",
              backgroundColor: "#F0BF39",
              height: "30px",
            }}
            onClick={handleURLButtonWrapper}
          ></Button>
          <div
            style={{
              position: "relative",
              top: "30px",
              left: "-310px",
              fontFamily: "Open Sans",
              fontSize: "10px",
              color: "gray",
            }}
          >
            {shortenedURL}
          </div>
        </Input.Group>
        <Button
          key="back"
          onClick={atCancel}
          size="small"
          type="link"
          style={{ color: "#C5C5C5", top: "-25px" }}
        >
          Cancel
        </Button>
        <Button
          key="submit"
          type="primary"
          onClick={onSave}
          size="small"
          type="link"
          style={{
            color: "#F0BF39",
            float: "right",
            top: "-25px",
            fontWeight: "600",
          }}
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
