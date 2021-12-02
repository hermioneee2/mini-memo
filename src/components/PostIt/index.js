import React from "react";
import PostItItem from "../PostItItem";
import PostItDirItem from "../PostItDirItem";
import { List } from "antd";
import { observer, inject } from "mobx-react";

const PostIt = ({ storeData, showCheckbox, checkedItemHandler }) => {
  const dataManage = storeData;
  let parent = "parent";
  let change = "change";
  return (
    <div style={overallListStyle}>
      <List
        dataSource={[".."]}
        grid={{ gutter: 24, column: 4 }}
        renderItem={() => (
          <List.Item>
            <PostItDirItem name=".." set={parent} />
          </List.Item>
        )}
      />
      <div style={regionTitleStyle}> Folder </div>
      <div style={{ postitWrapperStyle }}>
        <List
          dataSource={dataManage.dirList}
          grid={{ gutter: 24, column: 4 }}
          locale={{ emptyText: " " }}
          renderItem={(item) => (
            <List.Item>
              <PostItDirItem
                name={item.title}
                set={change}
                uid={item.uid}
                showCheckbox={showCheckbox}
                checkedItemHandler={checkedItemHandler}
              />
            </List.Item>
          )}
        />
      </div>
      <div style={regionTitleStyle}> Memo </div>
      <div style={{ postitWrapperStyle }}>
        <List
          dataSource={dataManage.memoList}
          grid={{ gutter: 16, column: 4 }}
          renderItem={(item) => (
            <List.Item>
              <PostItItem
                title={item.title}
                content={item.content}
                uid={item.uid}
                showCheckbox={showCheckbox}
                checkedItemHandler={checkedItemHandler}
              />
            </List.Item>
          )}
        />
      </div>
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

const postitWrapperStyle = {
  // postion: "relative",
  // top: "100px",
};

const regionTitleStyle = {
  paddingLeft: "25px",
  marginTop: "5px",
  marginBottom: "15px",
  fontFamily: "Open Sans",
  color: "#A0A0A0",
  // height: "30px",
};

export default inject("storeEditor", "storeData")(observer(PostIt));
