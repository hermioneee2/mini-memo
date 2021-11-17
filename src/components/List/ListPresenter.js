import { React } from "react";
import ListItem from "../ListItem";
import { List } from "antd";
import { FolderOutlined } from "@ant-design/icons";
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
      <span>Directories</span>
      <List
        dataSource={dirOrderedList()}
        style={listWrapperStyle}
        renderItem={(name) => (
          <List.Item>
            <FolderOutlined />
            {name}
          </List.Item>
        )}
      />
      <span>Memos</span>
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
