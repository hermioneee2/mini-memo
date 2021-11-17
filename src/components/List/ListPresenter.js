import { React } from "react";
import ListItem from "../ListItem";
import ListDirItem from "../ListDirItem";
import { List } from "antd";

const ListPresenter = ({
  showCheckbox,
  checkedItemHandler,
  setTrue,
  setId,
  memoOrderedList,
  dirOrderedList,
  cwd,
}) => {
  return (
    <div>
      <List
        dataSource={dirOrderedList()}
        style={listWrapperStyle}
        renderItem={(name) => (
          <List.Item>
            <ListDirItem
              name={name}
            />
          </List.Item>
        )}
      />
      <List
        dataSource={memoOrderedList()}
        style={listWrapperStyle}
        renderItem={(item) => (
          <List.Item>
            <ListItem
              title={item.title}
              content={item.content}
              uid={item.uid}
              time={item.createdAt}
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

export default ListPresenter;
