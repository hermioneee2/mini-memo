import React from "react";
import { FolderFilled, ArrowLeftOutlined } from "@ant-design/icons";
import styled from "styled-components";
const ListDirItemPresenter = ({
  name,
  time,
  showCheckbox,
  bChecked,
  checkHandler,
  changeHandler,
}) => {
  return time != null ? (
    <div style={listItemWrapperStyle}>
      <ListItemStyle onClick={() => changeHandler(name)}>
        <div style={titleStyle}>
          <FolderIconStyle />
          <FolderNameStyle>{name}</FolderNameStyle>
        </div>
        <div style={timeStyle}>{time}</div>
      </ListItemStyle>
      {showCheckbox && (
        <input
          type="checkbox"
          checked={bChecked}
          onChange={checkHandler}
          style={checkboxStyle}
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

const FolderIconStyle = styled(FolderFilled)`
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

const FolderNameStyle = styled.span`
  font-family: Open Sans;
  font-weight: 600;
`;

export default ListDirItemPresenter;
