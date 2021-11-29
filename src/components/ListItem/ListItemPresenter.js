import React from "react";
import { FileOutlined } from "@ant-design/icons";
import { observer, inject } from "mobx-react";

const ListItemPresenter = ({
  storeEditor,
  title,
  content,
  time,
  showCheckbox,
  bchecked,
  checkHandler,
}) => {
  const controlEditor = storeEditor;
  return (
    <div style={listItemWrapperStyle}>
      <div style={listItemStyle} onClick={controlEditor.setEditorTrue}>
        <div style={titleStyle}>
          <FileOutlined style={iconStyle} />
          {title}
        </div>
        <div style={timeStyle}>{time()} </div>
      </div>
      {showCheckbox && (
        <input
          type="checkbox"
          checked={bchecked}
          onChange={checkHandler}
          style={checkboxStyle}
        />
      )}
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

const timeStyle = {
  position: "relative",
  top: "-10px",
  left: "-15%",
};

const checkboxStyle = {
  position: "relative",
  marginTop: "20px",
  left: "-30px",
  width: "15px",
  height: "15px",
};

export default inject("storeEditor")(observer(ListItemPresenter));
