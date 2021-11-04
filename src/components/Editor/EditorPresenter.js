import React, { useState } from "react";
import Modal from "react-modal";
import { Input, Divider, Button } from "antd";

const { TextArea } = Input;

const style = {
  width: "701px",
  height: "486px",
};

const EditorPresenter = ({ isOpen, atSave, atCancel }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => atCancel(false)}
        style={style}
      >
        <Input placeholder="Title" />
        <Divider />
        <TextArea rows={10} />
        <div style={{ marginRight: "10px" }}>
          <Button type="primary" style={{ marginTop: "10px" }} onClick={atSave}>
            Save
          </Button>
          <Button onClick={atCancel}>Cancel</Button>
        </div>
      </Modal>
    </div>
  );
};

export default EditorPresenter;
