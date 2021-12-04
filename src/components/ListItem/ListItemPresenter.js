import React from "react";
import { FileOutlined } from "@ant-design/icons";
import { observer, inject } from "mobx-react";
import styled from "styled-components";
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
      <ListItemStyle onClick={controlEditor.setEditorTrue}>
        <div style={titleStyle}>
          <FileIconStyle />
          <FileNameStyle>{title}</FileNameStyle>
        </div>
        <div style={timeStyle}>{time()} </div>
      </ListItemStyle>
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

const ListItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 30px;
  width: 80vw;
  font-size: 16px;
  cursor: pointer;
  font-family: Open Sans;
  border-bottom: 1px solid #dfdfdf;
  color: ${({ theme }) => theme.colors.text};
`;

const FileIconStyle = styled(FileOutlined)`
  margin-left: 20px;
  margin-right: 8px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
`;

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
  left: "-30px",
  top: "-5px",
  width: "15px",
  height: "15px",
};

const FileNameStyle = styled.span`
  font-family: Open Sans;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;
export default inject("storeEditor")(observer(ListItemPresenter));
