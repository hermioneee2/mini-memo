import React from "react";
import { FileOutlined } from "@ant-design/icons";


const style = {
  height: "63px",
  width: "1578px",
  left: "0.015869140625px",
  top: "0px",
  fontSize: "large",
};

const ListItemPresenter = ({ title, content}) => {
  return (
    <div style={style}>
      <FileOutlined />
      <strong>{title}</strong> {content}
    </div>
  );
};

export default ListItemPresenter;
