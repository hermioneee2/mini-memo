import React from "react";
import { FileOutlined } from "@ant-design/icons";

const style = {
  height: "63px",
  width: "1578px",
  left: "0.015869140625px",
  top: "0px",
  fontSize: "large",
};

const ListItemPresenter = ({
  title,
  content,
  uid,
  showCheckbox,
  bchecked,
  checkHandler,
}) => {
  return (
    <div style={style}>
      {showCheckbox && (
        <input
          type="checkbox"
          id={uid}
          checked={bchecked}
          onChange={checkHandler}
        />
      )}
      <FileOutlined />
      <strong>{title}</strong> {content}
    </div>
  );
};

export default ListItemPresenter;
