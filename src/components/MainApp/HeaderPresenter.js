import {
  BarsOutlined,
  AppstoreOutlined,
  DeleteOutlined,
  SettingOutlined,
  FolderAddOutlined,
} from "@ant-design/icons";
import { Affix, Dropdown, Menu, Button, Cascader, Input } from "antd";
import { React, useState } from "react";
import styled from "styled-components";
import List from "../List";
import PostIt from "../PostIt";
import AddMemo from "../AddMemo";
import Editor from "../Editor";
import BreadCrumb from "../BreadCrumb";
import { deleteMemo } from "../../memo-storage/memo-localstorage";
import * as MStore from "../../memo-storage/memo-localstorage";
import { Provider, observer } from "mobx-react";
import ControlEditor from "../../stores/controlEditor";
import DataManage from "../../stores/dataManage";

const controlEditor = new ControlEditor();
const dataManage = new DataManage();

const HeaderPresenter = () => {
  const DISP = {
    LIST: "list",
    POSTIT: "postit",
  };

  const options = [
    {
      label: "Edited Time",
      value: "time",
      children: [
        {
          label: "Ascending Order",
          value: "time_ascend",
        },
        {
          label: "Desceding Order",
          value: "time_descend",
        },
      ],
    },
    {
      label: "Name",
      value: "name",
      children: [
        {
          label: "Ascending Order",
          value: "name_ascend",
        },
        {
          label: "Desceding Order",
          value: "name_descend",
        },
      ],
    },
  ];
  const [checkbox, setCheckbox] = useState(false);
  const [delItems, setDelItems] = useState(new Set());
  const [display, setDisplay] = useState(DISP.LIST);

  const delMemo = () => {
    delItems.forEach((e) => {
      deleteMemo(dataManage.cwd, e);
    });
  };

  const DeleteIconClick = () => {
    setCheckbox(!checkbox);
  };

  const setCheckedItem = (id, isChecked) => {
    if (isChecked) {
      delItems.add(id);
    } else if (!isChecked) {
      delItems.delete(id);
    }
    setDelItems(delItems);
  };

  const dispIconClick = () => {
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
          setCheckbox(false);
          dataManage.setMemoList();
          dataManage.setDirList();
          dataManage.setDataList();
        }}
      >
        Delete Selections
      </Menu.Item>
    </Menu>
  );

  // dir add related
  const [showDirInput, setShowDirInput] = useState(false); // for dir add
  const [dirName, setDirName] = useState("");

  const dirNameChange = (e) => {
    setDirName(e.target.value);
  };

  const dirAddIconClick = () => {
    setShowDirInput(!showDirInput);
  };

  const dirAddButtonclick = (name) => {
    let dirData = {
      type: "directory",
      name: name,
      title: name,
      createdAt: new Date(),
    };
    MStore.storeDir(dataManage.cwd, name, dirData);
    setDirName("");
    setShowDirInput(false);
    dataManage.reloadCwd();
  };

  const dirAddDropdown = (
    <Menu>
      <Menu.Item>
        <Input.Group compact>
          <Input
            style={{ size: "50%" }}
            placeholder="New Folder Name"
            value={dirName}
            enterButton="Add"
            onChange={dirNameChange}
          />
          <Button type="primary" onClick={() => dirAddButtonclick(dirName)}>
            Add
          </Button>
        </Input.Group>
      </Menu.Item>
    </Menu>
  );

  return (
    <Wrapper>
      <Provider storeEditor={controlEditor} storeData={dataManage}>
        <Editor />
      </Provider>
      <Affix offsetTop={0}>
        <Header>
          <span style={headerStyle}>Mini Memo</span>
          <HeaderButtonWrapper>
            <div>
              <span style={sortStyle}>Sort By</span>
              <Cascader
                options={options}
                onChange={dataManage.setOrder}
                expandTrigger="hover"
                placeholder="Please select"
                style={cascaderStyle}
              />
            </div>
            {display === DISP.POSTIT && (
              <BarsOutlined onClick={dispIconClick} style={iconStyle} />
            )}
            {display === DISP.LIST && (
              <AppstoreOutlined onClick={dispIconClick} style={iconStyle} />
            )}
            <Dropdown
              overlay={dirAddDropdown}
              trigger={["click"]}
              placement="bottomRight"
              arrow
              onClick={dirAddIconClick}
              visible={showDirInput}
            >
              <FolderAddOutlined style={iconStyle} />
            </Dropdown>
            <Dropdown
              overlay={deleteDropdown}
              trigger={["click"]}
              placement="bottomCenter"
              arrow
              onClick={DeleteIconClick}
              visible={checkbox}
            >
              <DeleteOutlined style={iconStyle} />
            </Dropdown>
            <SettingOutlined style={iconStyle} />
          </HeaderButtonWrapper>
        </Header>
        <HeaderBottomOutline />
      </Affix>
      <Provider storeEditor={controlEditor}>
        <div onClick={() => controlEditor.setId(-1)}>
          <AddMemo />
        </div>
      </Provider>
      <BreadCrumb cwd={dataManage.cwd} />
      {display === DISP.LIST && (
        <Provider storeEditor={controlEditor} storeData={dataManage}>
          <List showCheckbox={checkbox} checkedItemHandler={setCheckedItem} />
        </Provider>
      )}
      {display === DISP.POSTIT && (
        <Provider storeEditor={controlEditor} storeData={dataManage}>
          <PostIt showCheckbox={checkbox} checkedItemHandler={setCheckedItem} />
        </Provider>
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

const sortStyle = {
  color: "#F0BF39",
  fontFamily: "Open Sans",
  fontSize: 17,
  fontWeight: 600,
};

const cascaderStyle = {
  width: "120px",
  marginLeft: 8,
};

const iconStyle = {
  fontSize: 28,
  color: "#F0BF39",
  cursor: "pointer",
  padding: 3,
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
  width: 420px;
  justify-content: space-between;
`;

const HeaderBottomOutline = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 2px;
  display: flex;
`;

export default observer(HeaderPresenter);
