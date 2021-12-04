import { React } from "react";
import ListItem from "../ListItem";
import ListDirItem from "../ListDirItem";
import { List } from "antd";
import { observer, inject } from "mobx-react";
import styled from "styled-components";
const ListIt = ({ storeData, showCheckbox, checkedItemHandler }) => {
  const dataManage = storeData;
  let parent = "parent";
  let change = "change";
  return (
    <div style={overallListStyle}>
      <List
        dataSource={[".."]}
        renderItem={(name) => (
          <List.Item>
            <ListDirItem name={name} time={null} set={parent} />
          </List.Item>
        )}
      />
      <TitleBoxStyle>
        <div>Title</div>
        <div style={timeStyle}>Last Edited Time</div>
      </TitleBoxStyle>
      <List
        dataSource={dataManage.dataList}
        style={listWrapperStyle}
        renderItem={(item) =>
          item.type === "directory" ? (
            <List.Item style={{ borderBottom: 0 }}>
              <ListDirItem
                name={item.title}
                uid={item.uid}
                time={item.createdAt}
                set={change}
                showCheckbox={showCheckbox}
                checkedItemHandler={checkedItemHandler}
              />
            </List.Item>
          ) : (
            <List.Item style={{ borderBottom: 0 }}>
              <ListItem
                title={item.title}
                content={item.content}
                uid={item.uid}
                time={item.createdAt}
                showCheckbox={showCheckbox}
                checkedItemHandler={checkedItemHandler}
              />
            </List.Item>
          )
        }
      />
    </div>
  );
};

const overallListStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "80vw",
  margin: "auto",
};

const TitleBoxStyle = styled.div`
  font-family: Open Sans;
  display: flex;
  justify-content: space-between;
  padding: 15px 24px;
  margin: 50px 0px 0px 0px;
  position: relative;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.items};
  color: ${({ theme }) => theme.colors.text};
`;

const listWrapperStyle = {
  fontFamily: "Open Sans",
  paddingTop: "15px",
};

const timeStyle = {
  position: "relative",
  left: "-16%",
};

export default inject("storeEditor", "storeData")(observer(ListIt));
