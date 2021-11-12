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
    <div>
      {showCheckbox && (
        <input type="checkbox" checked={bchecked} onChange={checkHandler} />
      )}
      <div style={listItemStyle} onClick = {setTrue}>
        <FileOutlined />
        <strong>{title}</strong> {content}
      </div>
    </div>
  );
};

const listItemStyle = {
  height: "63px",
  fontSize: "large",
};

export default ListItemPresenter;
