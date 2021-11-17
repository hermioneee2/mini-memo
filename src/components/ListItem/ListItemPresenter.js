import React from "react";
import { FileOutlined } from "@ant-design/icons";

const ListItemPresenter = ({
  title,
  content,
  time,
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
      <div style = {listItemStyle} onClick = {setTrue}>
        <FileOutlined />
        <strong>{title}</strong> {content}
        <span style = {timeStyle}>
          {time()}
        </span>
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
  padding: 40
};

export default ListItemPresenter;
