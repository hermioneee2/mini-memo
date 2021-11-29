import React from "react";
import { FolderFilled, ArrowLeftOutlined } from "@ant-design/icons";

const ListDirItemPresenter = ({ name, time }) => {
  return time != null ? (
    <div style={listItemStyle}>
      <div style={titleStyle}>
        <FolderFilled style={iconStyle} />
        {name}
      </div>
      <div style={timeStyle}>{time}</div>
    </div>
  ) : (
    <div style={gobackStyle}>
      <ArrowLeftOutlined style={gobackiconStyle} />
      back to previous folder
    </div>
  );
};

const listItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",
  height: "30px",
  width: "80vw",
  fontSize: "16px",
  cursor: "pointer",
  fontFamily: "Open Sans",
  borderBottom: "1px solid #DFDFDF",
};

const iconStyle = {
  marginLeft: "20px",
  marginRight: "8px",
};

const titleStyle = {
  position: "relative",
  top: "-10px",
};

const gobackiconStyle = {
  marginRight: "8px",
};

const gobackStyle = {
  position: "relative",
  top: "45px",
  fontSize: "13px",
  cursor: "pointer",
  fontFamily: "Open Sans",
  color: "#808080",
};

const timeStyle = {
  position: "relative",
  top: "-10px",
  left: "-15%",
};

export default ListDirItemPresenter;
