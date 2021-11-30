import AddMemoPresenter from "./AddMemoPresenter";
import React from "react";
import { observer, inject } from "mobx-react"

const AddMemo = ({storeEditor}) => {
  const controlEditor = storeEditor;

  return (
      <div onClick = {controlEditor.setNewEditorTrue}>
        <AddMemoPresenter/>
      </div>
  );
};

export default inject("storeEditor")(observer(AddMemo));
