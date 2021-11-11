import React from "react";
import { FileOutlined } from "@ant-design/icons";

const ListItemPresenter = ({
  title,
  content,
  showCheckbox,
  bchecked,
  checkHandler,
}) => {
  return (
    <div style={listItemStyle}>
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
