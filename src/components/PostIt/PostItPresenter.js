import React from "react";
import PostItItem from "../PostItItem";
import PostItDirItem from "../PostItDirItem";
import { List } from "antd";
import { observer, inject } from "mobx-react"
import {autorun} from "mobx";

const PostItPresenter = ({
  storeData,
  showCheckbox,
  checkedItemHandler,
}) => {
  const dataManage = storeData;
  let parent = "parent";
  let change = "change";
  return (
    <div>
      <span style={listWrapperStyle} >
      <List
        dataSource={[".."]}
        style={listWrapperStyle}
        grid={{ gutter: 16, column: 4 }}
        renderItem={() => (
          <List.Item>
            <PostItDirItem name=".." set = {parent} />
          </List.Item>
        )}
      />
      <List
        dataSource={dataManage.dirList}
        style={listWrapperStyle}
        grid={{ gutter: 16, column: 4 }}
        renderItem={(item) => (
          <List.Item>
            <PostItDirItem name={item.title} set = {change} />
          </List.Item>
        )}
      />
      </span>
      <List
        dataSource={dataManage.memoList}
        style={listWrapperStyle}
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
  );
};

const listWrapperStyle = {
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
};

export default inject("storeEditor", "storeData")(observer(PostItPresenter));