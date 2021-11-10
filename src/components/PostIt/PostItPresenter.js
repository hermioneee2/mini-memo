import React from "react";
import { Card } from "antd";
import { List } from "antd";
import { loadMemoList } from "../../memo-storage/memo-localstorage";

import styled from "styled-components";

const PostItPresenter = ({ title, content }) => {
  const style = {
    width: "400px",
    margin: "10px",
  };

  return (
    <div style={style}>
      <List
        dataSource={loadMemoList()}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title} style={style}>
              {item.content}
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default PostItPresenter;
