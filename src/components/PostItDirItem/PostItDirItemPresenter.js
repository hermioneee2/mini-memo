import React from "react";
import { FolderFilled, ArrowLeftOutlined } from "@ant-design/icons";
import { Card } from "antd";

const PostItDirItemPresenter = ({
  name,
  showCheckbox,
  bchecked,
  checkHandler,
  changeHandler,
}) => {
  return name != ".." ? (
    <div>
      <div style={folderStyle} onClick={() => changeHandler(name)}>
        <FolderFilled style={folderIconStyle} />
        <div style={folderNameStyle}>{name}</div>
      </div>
      {showCheckbox && (
        <input
          type="checkbox"
          checked={bchecked}
          style={checkboxStyle}
          onChange={checkHandler}
        />
      )}
    </div>
  ) : (
    <div style={gobackStyle} onClick={() => changeHandler(name)}>
      <ArrowLeftOutlined style={gobackiconStyle} />
      back to previous folder
    </div>
  );
};

const folderStyle = {
  width: "280px",
  height: "45px",
  cursor: "pointer",
  borderRadius: "7px",
  fontFamily: "Open Sans",
  fontSize: "16px",
  backgroundColor: "white",
  paddingLeft: "20px",
  paddingTop: "10px",
  display: "flex",
};

const folderIconStyle = {
  marginRight: "12px",
  fontSize: "23px",
  position: "relative",
  top: "2px",
};

const folderNameStyle = {
  fontFamily: "Open Sans",
  fontWeight: "600",
};

const gobackiconStyle = {
  marginRight: "8px",
};

const gobackStyle = {
  paddingTop: "57px",
  fontSize: "13px",
  cursor: "pointer",
  fontFamily: "Open Sans",
  color: "#808080",
};

const checkboxStyle = {
  position: "relative",
  left: "245px",
  top: "-30px",
  width: "17px",
  height: "17px",
};

export default PostItDirItemPresenter;
