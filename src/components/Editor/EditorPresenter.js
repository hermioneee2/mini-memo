import React, { useState } from "react";
import Modal from "react-modal";
import { Input, Divider, Button, message } from "antd";
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
  atModifyTime,
  atCancel,
  setURLQuery,
  urlStore,
}) => {
  const controlEditor = storeEditor;
  const dataManage = storeData;
  const id = controlEditor.id;
  const [memoObj, setMemoObj] = useState({
    title: "",
    content: "",
    createdAt: "",
  });

  const setMemoObjDefault = () => {
    let newObj = memoObj;
    newObj.title = "";
    newObj.content = "";
    newObj.createdAt = "";
  };
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

  const setURLButtonWrapper = () => {
    urlStore.requestShortenedUrl(successMsg, failMsg);
  };

  const onSave = () => {
    console.log(existingMemo(dataManage.cwd, id));
    console.log(memoObj.title);
    console.log(memoObj.content);

    if (
      (memoObj.content === loadMemoContent(dataManage.cwd, id) ||
        memoObj.title === loadMemoTitle(dataManage.cwd, id)) &&
      existingMemo(dataManage.cwd, id) === true
    ) {
      setMemoObjCreatedAt();
      atModifyTime(memoObj, id);
      console.log("1");
    } else if (memoObj.content === "" || memoObj.title === "") {
      console.log("2");
      alert("제목과 내용을 입력해주세요.");
      return;
    } else if (existingMemo(dataManage.cwd, id)) {
      console.log("3");
      setMemoObjCreatedAt();
      atModify(memoObj, id);
    } else {
      console.log("4");
      atSave(memoObj);
    }
    dataManage.setMemoList();
    dataManage.setDataList();
    setMemoObjDefault();
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
  if (controlEditor.newEditor === true) {
    // console.log('!')
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
  } else {
    // console.log('!!')
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
        isOpen={open}
        onRequestClose={atCancel}
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
            value={urlStore.longUrl}
            onChange={setURLQuery}
            onPressEnter={setURLButtonWrapper}
          />
          <Button
            type="primary"
            icon={<SwapOutlined />}
            style={{
              borderColor: "#F0BF39",
              backgroundColor: "#F0BF39",
              height: "30px",
            }}
            onClick={setURLButtonWrapper}
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
            {urlStore.shortenedUrl}
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

export default inject(
  "storeEditor",
  "storeData",
  "storeUrl"
)(observer(EditorPresenter));
