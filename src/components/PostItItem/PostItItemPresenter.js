import React from "react";
import { Card } from "antd";
import { observer, inject } from "mobx-react";

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
      <Card
        title={title}
        style={cardStyle}
        onClick={controlEditor.setEditorTrue}
      >
        <div
          style={contentStyle}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </Card>
      {showCheckbox && (
        <input
          type="checkbox"
          checked={bchecked}
          style={checkboxStyle}
          onChange={checkHandler}
        />
      )}
      {!showCheckbox && <div style={{ height: "22px" }} />}
    </div>
  );
};

const cardStyle = {
  width: "280px",
  cursor: "pointer",
  borderRadius: "7px",
};

const contentStyle = {
  wordWrap: "break-word",
};

const checkboxStyle = {
  position: "relative",
  left: "245px",
  top: "-35px",
  width: "17px",
  height: "17px",
};

export default inject("storeEditor")(observer(PostItItemPresenter));
