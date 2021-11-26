import React from "react";
import PostItItem from "../PostItItem";
import PostItDirItem from "../PostItDirItem";
import { List } from "antd";
import { observer, inject } from "mobx-react"

const PostItPresenter = ({
  showCheckbox,
  checkedItemHandler,
  onChangeDir,
  onParentDir,
  memoOrderedList,
  dirOrderedList,
  cwd,
}) => {
  const dirOrderedListWithPrev = () => {
    let prev = { type: "prevDirectory" };
    let temp = dirOrderedList();
    temp.unshift(prev);
    return temp;
  };
  return (
    <div>
      <List
        dataSource={dirOrderedListWithPrev()}
        style={listWrapperStyle}
        grid={{ gutter: 16, column: 4 }}
        renderItem={(item) => (
          (item.type == "prevDirectory") ? (
            <List.Item>
              <PostItDirItem name=".." onChangeDir={onParentDir} />
            </List.Item>
          ) : (
          <List.Item>
            <PostItDirItem name={item.title} onChangeDir={onChangeDir} />
          </List.Item>
          )
        )}
      />
      <List
        dataSource={memoOrderedList()}
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

export default inject("storeEditor")(observer(PostItPresenter));