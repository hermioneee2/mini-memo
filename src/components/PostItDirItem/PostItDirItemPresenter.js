import React from "react";
import { FolderFilled, ArrowLeftOutlined } from "@ant-design/icons";
import { Card } from "antd";
import styled from "styled-components";

const PostItDirItemPresenter = ({
  name,
  showCheckbox,
  bchecked,
  checkHandler,
  changeHandler,
}) => {
  return name != ".." ? (
    <div>
      <FolderStyle onClick={() => changeHandler(name)}>
        <FolderIconStyle />
        <FolderNameStyle>{name}</FolderNameStyle>
      </FolderStyle>
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

const FolderStyle = styled.div`
  word-wrap: break-word;
  height: 45px;
  cursor: pointer;
  border-radius: 7px;
  font-family: Open Sans;
  font-size: 17px;
  background-color: ${({ theme }) => theme.colors.items};
  padding-left: 20px;
  padding-top: 10px;
  display: flex;
`;

const FolderIconStyle = styled(FolderFilled)`
  margin-right: 12px;
  font-size: 23px;
  position: relative;
  top: 2px;
  color: ${({ theme }) => theme.colors.text};
`;

const FolderNameStyle = styled.div`
  font-family: Open Sans;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  word-wrap: break-word;
  word-break: break-word;
  overflow: auto;
`;

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
