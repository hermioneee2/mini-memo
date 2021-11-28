import React from "react";
import { FileOutlined } from "@ant-design/icons";
import { observer, inject } from "mobx-react";

const ListItemPresenter = ({
  storeEditor,
  title,
  content,
  time,
  showCheckbox,
  bchecked,
  checkHandler,
}) => {
  const controlEditor = storeEditor;
  return (
    <div>
      {showCheckbox && (
        <input type="checkbox" checked={bchecked} onChange={checkHandler} />
      )}
      <div style={listItemStyle} onClick={controlEditor.setEditorTrue}>
        <FileOutlined />
        <strong>{title}</strong> {content}
        <span style={timeStyle}>{time()}</span>
      </div>
    </div>
  );
};

const listItemStyle = {
  height: "63px",
  fontSize: "large",
  cursor: "pointer",
};
const timeStyle = {
  height: "63px",
  fontSize: "large",
  padding: 40,
};

export default inject("storeEditor")(observer(ListItemPresenter));
