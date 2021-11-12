import { React } from "react";
import ListItem from "../ListItem";
import { List } from "antd";
import { loadMemoList } from "../../memo-storage/memo-localstorage";

const ListPresenter = ({ showCheckbox, checkedItemHandler, setTrue, setId}) => {
  return (
    <div>
      <List
        dataSource={loadMemoList()}
        style={listWrapperStyle}
        renderItem={(item) => (
          <List.Item>
             <ListItem
              title={item.title}
              content={item.content}
              uid={item.uid}
              showCheckbox={showCheckbox}
              checkedItemHandler={checkedItemHandler}
              setTrue = {setTrue} setId = {setId}
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
