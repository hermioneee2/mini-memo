import React from "react";
import PostItItem from "../PostItItem";
import PostItDirItem from "../PostItDirItem";
import { List } from "antd";
import { observer, inject } from "mobx-react"

const PostItPresenter = ({
  storeData,
  showCheckbox,
  checkedItemHandler,
}) => {
  const dataManage = storeData;
  const dirOrderedListWithPrev = () => {
    let prev = { type: "prevDirectory" };
    let temp = dataManage.dirList;
    temp.unshift(prev);
    return temp;
  };
  let parent = "parent";
  let change = "change";
  return (
    <div>
      <List
        dataSource={dirOrderedListWithPrev()}
        style={listWrapperStyle}
        grid={{ gutter: 16, column: 4 }}
                renderItem={(item) => (
          (item.type == "prevDirectory") ? (
            <List.Item>
              <PostItDirItem name=".." set = {parent} />
            </List.Item>
          ) : (
          <List.Item>
            <PostItDirItem name={item.title} set = {change} />
          </List.Item>
          )
        )}
        renderItem={(item) => (
          (item.type == "prevDirectory") ? (
            <List.Item>
              <PostItDirItem name=".." set = {parent} />
            </List.Item>
          ) : (
          <List.Item>
            <PostItDirItem name={item.title} set = {change} />
          </List.Item>
          )
        )}
      />
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