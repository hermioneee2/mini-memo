import React from "react";
import { FileOutlined } from "@ant-design/icons";


const style = {
  height: "63px",
  width: "1578px",
  left: "0.015869140625px",
  top: "0px",
  fontSize: "large",
  cursor: "pointer",
};

const ListItemPresenter = ({ title, content, setTrue}) => {
  return (
    <div style={style} onClick = {setTrue}>
        <FileOutlined />
        <strong>{title}</strong> {content}
    </div>
  );
};

export default ListItemPresenter;
