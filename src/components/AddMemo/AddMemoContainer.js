import AddMemoPresenter from "./AddMemoPresenter";
import React from "react";
import { observer, inject } from "mobx-react"

const AddMemoContainer = ({storeEditor}) => {
  const controlEditor = storeEditor;

  return (
      <div onClick = {controlEditor.setNewEditorTrue}>
        <AddMemoPresenter/>
      </div>
  );
};

export default inject("storeEditor")(observer(AddMemoContainer));
