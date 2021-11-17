import React from "react";
import { FolderOutlined } from "@ant-design/icons";

const ListDirItemPresenter = ({ name }) => {
  return (
    <div>
      <div style={listItemStyle}>
        <FolderOutlined />
        <strong>{name}</strong>
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

export default ListDirItemPresenter;
