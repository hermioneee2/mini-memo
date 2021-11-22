import React from "react";
import { FolderFilled } from "@ant-design/icons";

const ListDirItemPresenter = ({ name }) => {
  return (
    <div>
      <div style={listItemStyle}>
        <FolderFilled/>
        <strong>{name}</strong>
      </div>
    </div>
  );
};

const listItemStyle = {
  height: "63px",
  fontSize: "large",
  cursor: "pointer",
  width:"100%"
};
const timeStyle = {
  height: "63px",
  fontSize: "large",
  padding: 40,
};

export default ListDirItemPresenter;
