import React from "react";
import { FolderFilled, ArrowLeftOutlined } from "@ant-design/icons";

const ListDirItemPresenter = ({
  name,
  time,
  showCheckbox,
  bChecked,
  checkHandler,
}) => {
  return time != null ? (
    <div style={listItemWrapperStyle}>
      <div style={listItemStyle}>
        <div style={titleStyle}>
          <FolderFilled style={iconStyle} />
          {name}
        </div>
        <div style={timeStyle}>{time}</div>
        {showCheckbox && (
          <input
            type="checkbox"
            checked={bChecked}
            onChange={checkHandler}
            style={checkboxStyle}
          />
        )}
      </div>
    </div>
  ) : (
    <div style={gobackStyle}>
      <ArrowLeftOutlined style={gobackiconStyle} />
      back to previous folder
    </div>
  );
};

const listItemWrapperStyle = {
  display: "flex",
  alignContent: "center",
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
const checkboxStyle = {
  position: "relative",
  left: "-30px",
  top: "-5px",
  width: "15px",
  height: "15px",
};

export default ListDirItemPresenter;
