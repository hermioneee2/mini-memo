import React from "react";
import { Card } from "antd";
import { observer, inject } from "mobx-react"

const PostItItemPresenter = ({
  storeEditor,
  title,
  content,
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
      <Card title={title} style={cardStyle} onClick = {controlEditor.setEditorTrue}>
        {content}
      </Card>
    </div>
  );
};

const cardStyle = {
  width: "310px",
  margin: "10px",
  cursor: "pointer",
};

export default inject("storeEditor")(observer(PostItItemPresenter));
