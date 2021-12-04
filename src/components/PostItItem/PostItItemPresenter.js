import React from "react";
import { Card } from "antd";
import { observer, inject } from "mobx-react";
import styled from "styled-components";

const PostItItemPresenter = ({
  storeEditor,
  storeData,
  title,
  content,
  showCheckbox,
  bchecked,
  checkHandler,
}) => {
  const controlEditor = storeEditor;
  const TitleStyleWrapper = <TitleStyle>{title}</TitleStyle>;
  return (
    <div>
      <CardStyle
        title={TitleStyleWrapper}
        onClick={controlEditor.setEditorTrue}
      >
        <div
          style={contentStyle}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </CardStyle>
      {showCheckbox && (
        <input
          type="checkbox"
          checked={bchecked}
          style={checkboxStyle}
          onChange={checkHandler}
        />
      )}
      {!showCheckbox && <div style={{ height: "22px" }} />}
    </div>
  );
};

const CardStyle = styled(Card)`
  cursor: pointer
  border-radius: 7px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.items};
  border-color: ${({ theme }) => theme.colors.items};
`;

const contentStyle = {
  wordWrap: "break-word",
};

const TitleStyle = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

const checkboxStyle = {
  position: "relative",
  left: "245px",
  top: "-35px",
  width: "17px",
  height: "17px",
};

export default inject(
  "storeEditor",
  "storeData"
)(observer(PostItItemPresenter));
