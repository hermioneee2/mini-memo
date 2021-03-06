import React from "react";
import Modal from "react-modal";
import { Input, Button, message } from "antd";
import EditorComponent from "../Editor/EditorComponent";
import {
  existingMemo,
  loadMemoTitle,
  loadMemoContent,
  modifyMemo,
} from "../../memo-storage/memo-localstorage";
import { observer, inject } from "mobx-react";
import { SwapOutlined } from "@ant-design/icons";
import styled from "styled-components";
const EditorPresenter = ({
  storeEditor,
  storeData,
  atSave,
  atModify,
  atCancel,
  setURLQuery,
  urlStore,
}) => {
  const controlEditor = storeEditor;
  const dataManage = storeData;
  const id = controlEditor.id;
  const cwd = dataManage.cwd;
  const memoObj = dataManage.memoObj;

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
    if (existingMemo(cwd, id)) {
      dataManage.setMemoObjCreatedAt();
      atModify(memoObj, id);
      console.log("3");
      console.log(memoObj);
    } else {
      if (memoObj.content === "" && memoObj.title === "") {
        alert("제목이나 내용을 입력해주세요.");
        return;
      } else atSave(memoObj);
    }
    dataManage.setMemoList();
    dataManage.setDataList();
  };

  let open;
  if (controlEditor.editor === true || controlEditor.newEditor === true) {
    open = true;
  } else {
    open = false;
  }

  let editor;
  if (controlEditor.newEditor === true) {
    editor = (
      <div>
        <MemoTitleStyle
          placeholder="Title"
          bordered={false}
          onChange={dataManage.setMemoObjTitle}
          style={memoTitleStyle}
        />
        <EditorComponent
          value={dataManage.memoObj.content}
          onChange={dataManage.setMemoObjContent}
        />
      </div>
    );
  } else {
    editor = (
      <div>
        <MemoTitleStyle
          defaultValue={dataManage.memoObj.title}
          bordered={false}
          onChange={dataManage.setMemoObjTitle}
          style={memoTitleStyle}
        />
        <EditorComponent
          value={dataManage.memoObj.content}
          onChange={dataManage.setMemoObjContent}
        />
      </div>
    );
  }

  return (
    <ModalStyle
      isOpen={open}
      onRequestClose={atCancel}
      style={modalStyle}
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
        <UrlInputStyle
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
    </ModalStyle>
  );
};

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "510px",
    height: "450px",
    overflow: "hidden",
    borderRadius: "10px",
    position: "relative",
    border: "1px solid rgb(204, 204, 204)",
    padding: "20px",
  },
};
const ModalStyle = styled(Modal)`
  background-color: ${({ theme }) => theme.colors.items};
  color: ${({ theme }) => theme.colors.text};
`;
const memoTitleStyle = {
  fontFamily: "Open Sans",
  fontSize: 17,
  fontWeight: 600,
  marginLeft: 5,
  marginBottom: 7,
  width: "100%",
  border: 0,
  outline: "none",
};

const MemoTitleStyle = styled.input`
  background-color: ${({ theme }) => theme.colors.items};
  color: ${({ theme }) => theme.colors.text};
`;

const UrlInputStyle = styled.input`
  background-color: ${({ theme }) => theme.colors.items};
  color: ${({ theme }) => theme.colors.text};
  width: 290px;
  border: 1px solid rgb(204, 204, 204);
  height: 30px;
  outline: none;
`;

export default inject(
  "storeEditor",
  "storeData",
  "storeUrl"
)(observer(EditorPresenter));
