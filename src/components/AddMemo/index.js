import { PlusCircleFilled } from "@ant-design/icons";
import React from "react";
import { Affix } from "antd";
import { observer, inject } from "mobx-react"

const AddMemo = ({storeEditor, storeData}) => {
  const controlEditor = storeEditor;
  const dataManage = storeData;

  return (
      <div onClick = {controlEditor.setNewEditorTrue}>
        <Affix onClick = {dataManage.setNewMemoObj} offsetTop={720}>
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

export default inject("storeEditor", "storeData")(observer(AddMemo));
