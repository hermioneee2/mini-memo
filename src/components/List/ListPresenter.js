import React, { useState } from "react";
import ListItem from "../ListItem";
import { List } from "antd";
import { loadMemoList } from "../../memo-storage/memo-localstorage";

const ListPresenter = () => {
  const [data, setData] = React.useState([]);
  return (
    <List
      dataSource={loadMemoList()}
      renderItem={(item) => (
        <List.Item>
          <ListItem title={item.title} content={item.content} />
        </List.Item>
      )}
    />
  );
};

export default ListPresenter;
