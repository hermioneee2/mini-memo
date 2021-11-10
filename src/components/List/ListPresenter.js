import { React, useState, setState } from "react";
import ListItem from "../ListItem";
import { List } from "antd";
import { loadMemoList } from "../../memo-storage/memo-localstorage";

const ListPresenter = ({ checkbox, delItems, setDelItems }) => {
  return (
    <div>
      <List
        dataSource={loadMemoList()}
        renderItem={(item) => (
          <List.Item>
            <ListItem
              title={item.title}
              content={item.content}
              uid={item.uid}
              checkbox={checkbox}
              delItems={delItems}
              setDelItems={setDelItems}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListPresenter;
