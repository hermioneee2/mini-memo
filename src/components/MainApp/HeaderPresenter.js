import {
  BarsOutlined,
  AppstoreOutlined,
  DeleteOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Affix, Dropdown, Menu } from "antd";
import { React, useState } from "react";
import styled from "styled-components";
import List from "../List";
import PostIt from "../PostIt";
import AddMemo from "../AddMemo";
import Editor from "../Editor";
import { deleteMemo } from "../../memo-storage/memo-localstorage";

const HeaderPresenter = () => {
  const DISP = {
    LIST: "list",
    POSTIT: "postit",
  };
  
  const [showEditor, setShowEditor] = useState(false);
  const [showCheckbox, setShowCheckbox] = useState(false); // for delete
  const [delItems, setDelItems] = useState(new Set()); // for delete
  const [display, setDisplay] = useState(DISP.LIST);
  const [id, setNum] = useState(0);
  
  const setShowEditorTrue = () => {
    console.log('set true');
    setShowEditor(true);
  };

  const setShowEditorFalse = () => {
    setShowEditor(false);
  };
  
  const setId = (id) => {
    console.log('id')
    console.log(id);
    setNum(id);
  };
  const delMemo = () => {
    delItems.forEach((e) => {
      deleteMemo(e);
    });
  };

  const handleDeleteIconClick = () => {
    setShowCheckbox(!showCheckbox);
  };

  const checkedItemHandler = (id, isChecked) => {
    //reflect change on del item list
    if (isChecked) {
      delItems.add(id);
    } else if (!isChecked) {
      delItems.delete(id);
    }
    setDelItems(delItems);
  };

  const handleDispIconClick = () => {
    if (display === DISP.POSTIT) {
      setDisplay(DISP.LIST);
    } else {
      setDisplay(DISP.POSTIT);
    }
  };

  const deleteDropdown = (
    <Menu>
      <Menu.Item
        key="0"
        style={{ color: "red" }}
        onClick={() => {
          delMemo();
          setShowCheckbox(false);
        }}
      >
        Delete Selections
      </Menu.Item>
    </Menu>
  );
  return (
    <Wrapper>
      <Editor isOpen={showEditor} modalClose={setShowEditorFalse} id = {id} />
      <Affix offsetTop={0}>
        <Header>
          <span style={headerStyle}>Mini Memo</span>
          <HeaderButtonWrapper>
            {display === DISP.POSTIT && (
              <BarsOutlined onClick={handleDispIconClick} style={iconStyle} />
            )}
            {display === DISP.LIST && (
              <AppstoreOutlined
                onClick={handleDispIconClick}
                style={iconStyle}
              />
            )}
            <Dropdown
              overlay={deleteDropdown}
              trigger={["click"]}
              placement="bottomCenter"
              arrow
              onClick={handleDeleteIconClick}
              visible={showCheckbox}
            >
              <DeleteOutlined style={iconStyle} />
            </Dropdown>
            <SettingOutlined style={iconStyle} />
          </HeaderButtonWrapper>
        </Header>
        <HeaderBottomOutline />
      </Affix>
      <div onClick = {() => setId(-1)}>
        <AddMemo setter={setShowEditorTrue}/>
      </div>
      {display === DISP.LIST && (
        <List
          showCheckbox={showCheckbox}
          checkedItemHandler={checkedItemHandler}
          setTrue = {setShowEditorTrue} 
          setId = {setId}
        />
      )}
      {display === DISP.POSTIT && (
        <PostIt
          showCheckbox={showCheckbox}
          checkedItemHandler={checkedItemHandler}
        />
      )}
    </Wrapper>
  );
};

const headerStyle = {
  color: "#F0BF39",
  fontFamily: "Open Sans",
  fontSize: 30,
  fontWeight: 800,
  marginLeft: 20,
};

const iconStyle = {
  fontSize: 28,
  color: "#F0BF39",
  cursor: "pointer",
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
