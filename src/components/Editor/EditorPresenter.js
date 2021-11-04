import React, { memo, useState } from "react";
import Modal from "react-modal";
import { Input, Divider, Button } from "antd";

const { TextArea } = Input;

const style = {
  width: "701px",
  height: "486px",
};

const EditorPresenter = ({ isOpen, atSave, atCancel }) => {
  const [memoObj, setMemoObj] = useState({
    title: "",
    content: "",
  });

  const setMemoObjTitle = (e) => {
    let newObj = memoObj
    newObj.title = e.target.value
    setMemoObj(newObj)
  };

  const setMemoObjContent = (e) => {
    let newObj = memoObj
    newObj.content = e.target.value
    setMemoObj(newObj)
  };

  const onSave = () => {
    if (memoObj.content === "" || memoObj.title === "") {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
    else {
      atSave(memoObj);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={atCancel} style={style}>
        <Input placeholder="Title" onChange={setMemoObjTitle}/>
        <Divider />
        <TextArea placeholder="Content" rows={10} onChange={setMemoObjContent} />
        <div style={{ marginRight: "10px" }}>
          <Button type="primary" style={{ marginTop: "10px" }} onClick={onSave}>
            Save
          </Button>
          <Button onClick={atCancel}>Cancel</Button>
        </div>
      </Modal>
    </div>
  );
};

export default EditorPresenter;
