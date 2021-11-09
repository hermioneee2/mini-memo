import {React, useState, useCallback, dataLists} from "react";
import ListItem from "../ListItem";
import { List } from "antd";
import { loadMemoList } from "../../memo-storage/memo-localstorage";

const ListPresenter = ({click_num}) => {
  const [delItems, setDelItems] = useState(new Set());

  const getData = (delItems) => {
    setDelItems(delItems);
    // console.log('!!!');
    console.log(delItems);
  };
  const deleteMemo = () => {

  };
  const deleteButton = () =>{
    if(click_num === 1){
      return <input type="button" value ='삭제' />
    }
  };
  
  return (
    <div>
      {deleteButton()}
      <List
        dataSource={loadMemoList()}
        renderItem={(item) => (
          <List.Item>
            <ListItem title={item.title} content={item.content} uid = {item.uid} click_num = {click_num} getData={getData} delItems = {delItems}/>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListPresenter;
