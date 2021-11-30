import { PlusCircleFilled } from "@ant-design/icons";
import React from "react";
import { Affix } from "antd";
import { observer, inject } from "mobx-react"

const AddMemo = ({storeEditor}) => {
  const controlEditor = storeEditor;

  return (
      <div onClick = {controlEditor.setNewEditorTrue}>
        <Affix offsetTop={720}>
          <PlusCircleFilled
            style={{
              fontSize: 60,
              color: "#F0BF39",
              cursor: "pointer",
              position: "absolute",
              bottom: "55px",
              right: "55px",
            }}
          />
        </Affix>
      </div>
  );
};

export default inject("storeEditor")(observer(AddMemo));
