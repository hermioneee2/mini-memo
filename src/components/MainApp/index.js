import {
  BarsOutlined,
  AppstoreOutlined,
  DeleteOutlined,
  SettingOutlined,
  FolderAddOutlined,
} from "@ant-design/icons";
import { Affix, Dropdown, Menu, Button, Cascader, Input } from "antd";
import { React, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ListIt from "../ListIt";
import PostIt from "../PostIt";
import AddMemo from "../AddMemo";
import Editor from "../Editor";
import BreadCrumb from "../BreadCrumb";
import { deleteMemo, deleteDir } from "../../memo-storage/memo-localstorage";
import * as MStore from "../../memo-storage/memo-localstorage";
import { getNextMemoUid } from "../../memo-storage/uid";
import { Provider, observer } from "mobx-react";
import ControlEditor from "../../stores/controlEditor";
import DataManage from "../../stores/dataManage";
import UrlStore from "../../stores/urlStore";

const controlEditor = new ControlEditor();
const dataManage = new DataManage();
const urlStore = new UrlStore();

const MainApp = () => {
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
      deleteDir(dataManage.cwd, e);
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
    //console.log(delItems);
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
      uid: getNextMemoUid(),
      createdAt: new Date(),
    };
    MStore.storeDir(dataManage.cwd, name, dirData);
    setDirName("");
    setShowDirInput(false);
    dataManage.reloadCwd();
    dataManage.setDirList();
    dataManage.setDataList();
  };

  const sorting = (value) => {
    dataManage.setOrder(value);
    dataManage.setMemoList();
    dataManage.setDirList();
    dataManage.setDataList();
  };
  const dirAddDropdown = (
    <Menu>
      <Menu.Item>
        <Input.Group compact>
          <Input
            style={{ width: "calc(100% - 55px)" }}
            placeholder="New Folder Name"
            value={dirName}
            enterButton="Add"
            onChange={dirNameChange}
          />
          <Button
            type="primary"
            style={{
              backgroundColor: "#F0BF39",
              borderColor: "#F0BF39",
              fontFamily: "Open Sans",
              fontWeight: "600",
              width: "55px",
            }}
            onMouseDown={() => dirAddButtonclick(dirName)}
          >
            Add
          </Button>
        </Input.Group>
      </Menu.Item>
    </Menu>
  );

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          !(event.target.tagName == "INPUT") &&
          !(event.target.innerText == "Delete Selections")
        ) {
          setShowDirInput(false);
          setDirName("");
          setCheckbox(false);
          //console.log(!ref.current.contains(event.target));
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      //console.log(ref);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  function OutsideAlerter(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    return <div ref={wrapperRef}>{props.children}</div>;
  }

  return (
    <Wrapper>
      <Provider
        storeEditor={controlEditor}
        storeData={dataManage}
        storeUrl={urlStore}
      >
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
                onChange={(value) => sorting(value)}
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
              placement="bottomCenter"
              arrow
              onClick={dirAddIconClick}
              visible={showDirInput}
            >
              <FolderAddOutlined style={iconStyle} />
            </Dropdown>

            <OutsideAlerter>
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
            </OutsideAlerter>
            <SettingOutlined style={iconStyle} />
          </HeaderButtonWrapper>
        </Header>
        <HeaderBottomOutline />
      </Affix>
      <Provider storeEditor={controlEditor} storeData = {dataManage}>
        <div onClick={() => controlEditor.setId(-1)}>
          <AddMemo />
        </div>
      </Provider>
      <BreadCrumb cwd={dataManage.cwd} />
      {display === DISP.LIST && (
        <Provider storeEditor={controlEditor} storeData={dataManage}>
          <ListIt showCheckbox={checkbox} checkedItemHandler={setCheckedItem} />
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
  height: 70px;
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

export default observer(MainApp);
