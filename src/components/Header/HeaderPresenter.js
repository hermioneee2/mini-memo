import {
  BarsOutlined,
  AppstoreOutlined,
  DeleteOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Affix, Button, Dropdown } from "antd";
import {React, useState} from "react";
import styled from "styled-components";
import List from "../List";
import AddMemo from "../AddMemo";
import Editor from "../Editor";
import { storeMemo, loadMemoList } from "../../memo-storage/memo-localstorage";




const HeaderPresenter = () => {
  const [del_click_num, setNumber] = useState(0);
  const [showEditor, setShowEditor] = useState(false);

  const setShowEditorTrue = () => {
    setShowEditor(true);
  };

  const setShowEditorFalse = () => {
    setShowEditor(false);
  };
  const handleClick = () => {
    setNumber(del_click_num + 1);
  }
  const clickNum = () => {
    if (del_click_num % 2 === 1)
      return 1;
    return 0;
  }
  return (
    <div>
      <Editor isOpen={showEditor} modalClose={setShowEditorFalse} />    
      <Affix offsetTop={0}>
        <Header>
          <span
            style={{
              color: "#F0BF39",
              fontFamily: "Open Sans",
              fontSize: 30,
              fontWeight: 800,
              marginLeft: 20,
            }}
          >
            Mini Memo
          </span>
          <HeaderButtonWrapper>
            <BarsOutlined
              style={{ fontSize: 28, color: "#F0BF39", cursor: "pointer" }}
            />
            <DeleteOutlined
              onClick = {() => {handleClick()}}
              style={{ fontSize: 28, color: "#F0BF39", cursor: "pointer" }}
            />
            <SettingOutlined
              style={{ fontSize: 28, color: "#F0BF39", cursor: "pointer" }}
            />
          </HeaderButtonWrapper>
        </Header>
        <HeaderBottomOutline></HeaderBottomOutline>
      </Affix>
      <List click_num = {clickNum()}/>
      <AddMemo setter={setShowEditorTrue} />
    </div>
  );
};

const Header = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 40px;
  width: 130px;
  justify-content: space-between;
`;

const HeaderBottomOutline = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 2px;
  display: flex;
`;

export default HeaderPresenter;
