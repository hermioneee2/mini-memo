import React from "react";
import { FileOutlined } from "@ant-design/icons";

const ListItemPresenter = ({
  title,
  content,
  showCheckbox,
  bchecked,
  checkHandler,
  setTrue
}) => {
  return (
    <div style={listItemStyle} onClick = {setTrue}>>
      {showCheckbox && (
        <input type="checkbox" checked={bchecked} onChange={checkHandler} />
      )}
      <FileOutlined />
      <strong>{title}</strong> {content}
    </div>
  );
};

const listItemStyle = {
  height: "63px",
  fontSize: "large",
};

export default ListItemPresenter;
