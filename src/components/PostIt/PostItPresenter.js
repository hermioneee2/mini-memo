import React from "react";
import PostItItem from "../PostItItem";
import { List } from "antd";
import { loadMemoList } from "../../memo-storage/memo-localstorage";

const PostItPresenter = ({ showCheckbox, checkedItemHandler }) => {
  return (
    <div>
      <List
        dataSource={loadMemoList()}
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

export default PostItPresenter;
