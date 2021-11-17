import React from "react";
import PostItItem from "../PostItItem";
import { List } from "antd";

const PostItPresenter = ({
  showCheckbox,
  checkedItemHandler,
  setTrue,
  setId,
  memoOrderedList,
  cwd,
}) => {
  return (
    <div>
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
              setTrue={setTrue}
              setId={setId}
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
