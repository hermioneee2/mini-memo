import {
  BarsOutlined,
  AppstoreOutlined,
  DeleteOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Affix, Button, Dropdown, Menu } from "antd";
import { React, useState } from "react";
import styled from "styled-components";
import List from "../List";
import PostIt from "../PostIt";
import AddMemo from "../AddMemo";
import Editor from "../Editor";
// import { storeMemo, loadMemoList } from "../../memo-storage/memo-localstorage";
import { loadMemoList, deleteMemo } from "../../memo-storage/memo-localstorage";

const HeaderPresenter = () => {
  const DISP = {
    LIST: "list",
    POSTIT: "postit",
  };

  const [showEditor, setShowEditor] = useState(false);
  const [showCheckbox, setShowCheckbox] = useState(false); // for delete
  const [delItems, setDelItems] = useState(new Set()); // for delete
  const [visible, setVisible] = useState(false); // for delete
  const [display, setDisplay] = useState(DISP.LIST);

  const setShowEditorTrue = () => {
    setShowEditor(true);
  };

  const setShowEditorFalse = () => {
    setShowEditor(false);
  };

  const delMemo = () => {
    delItems.forEach((e) => {
      deleteMemo(e);
    });
  };

  const handleButtonClick = () => {
    setVisible(!visible);
    setShowCheckbox(!visible);
  };

  const handleVisibleChange = () => {
    setVisible(false);
    setShowCheckbox(false);
  };

  const handleDispChange = () => {
    if (display == DISP.POSTIT) {
      setDisplay(DISP.LIST);
    } else {
      setDisplay(DISP.POSTIT);
    }
  };

  const deleteButton = (
    <Menu>
      <Menu.Item
        key="0"
        style={{ color: "red" }}
        onClick={() => {
          delMemo();
          handleVisibleChange();
        }}
      >
        Delete Selections
      </Menu.Item>
    </Menu>
  );

  return (
    <Wrapper>
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
            {display == DISP.POSTIT && (
              <BarsOutlined
                onClick={handleDispChange}
                style={{ fontSize: 28, color: "#F0BF39", cursor: "pointer" }}
              />
            )}
            {display == DISP.LIST && (
              <AppstoreOutlined
                onClick={handleDispChange}
                style={{ fontSize: 28, color: "#F0BF39", cursor: "pointer" }}
              />
            )}
            <Dropdown
              overlay={deleteButton}
              trigger={["click"]}
              placement="bottomCenter"
              arrow
              onClick={handleButtonClick}
              visible={visible}
            >
              <DeleteOutlined
                style={{ fontSize: 28, color: "#F0BF39", cursor: "pointer" }}
              />
            </Dropdown>
            <SettingOutlined
              style={{ fontSize: 28, color: "#F0BF39", cursor: "pointer" }}
            />
          </HeaderButtonWrapper>
        </Header>
        <HeaderBottomOutline />
      </Affix>
      <AddMemo setter={setShowEditorTrue} />
      {display == DISP.LIST && (
        <List
          checkbox={showCheckbox}
          delItems={delItems}
          setDelItems={setDelItems}
        />
      )}
      {display == DISP.POSTIT && <PostIt />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f0f0f0;
`;

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
  width: 160px;
  justify-content: space-between;
`;

const HeaderBottomOutline = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 2px;
  display: flex;
`;

export default HeaderPresenter;
