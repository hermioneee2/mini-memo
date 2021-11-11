import React from "react";
import PostItItem from "../PostItItem";
import { List } from "antd";
import { loadMemoList } from "../../memo-storage/memo-localstorage";

import styled from "styled-components";

const PostItPresenter = ({ showCheckbox, checkedItemHandler }) => {
  return (
    <div>
      <List
        dataSource={loadMemoList()}
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

export default PostItPresenter;
