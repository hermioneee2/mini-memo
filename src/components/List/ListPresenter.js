import React from "react";
import ListItem from "../ListItem";
import { List } from "antd";

const data = [
  { title: "title1", content: "content1" },
  { title: "title2", content: "content2" },
  { title: "title3", content: "content3" },
  { title: "title4", content: "content4" },
];

const ListPresenter = () => {
  return (
    <List
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <ListItem title={item.title} content={item.content} />
        </List.Item>
      )}
    />
  );
};

export default ListPresenter;
