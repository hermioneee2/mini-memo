import React from "react";
import { FolderFilled } from "@ant-design/icons";

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
    <div style={listItemStyle}>
      <div style={titleStyle}>
        <FolderFilled style={iconStyle} />
        {name}
      </div>
    </div>
  );
};

const listItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",
  height: "55px",
  width: "80vw",
  fontSize: "16px",
  cursor: "pointer",
  fontFamily: "Open Sans",
  borderBottom: "1px solid #DFDFDF",
  paddingTop: "13px",
};

const iconStyle = {
  marginLeft: "20px",
  marginRight: "8px",
};

const titleStyle = {};

const timeStyle = {
  position: "relative",
  left: "-15%",
};

export default ListDirItemPresenter;
