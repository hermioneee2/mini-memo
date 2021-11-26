import { React } from "react";
import ListItem from "../ListItem";
import ListDirItem from "../ListDirItem";
import { List } from "antd";
import { observer, inject } from "mobx-react"

const ListPresenter = ({
  showCheckbox,
  checkedItemHandler,
  dataOrderedList,
  onChangeDir,
  onParentDir,
}) => {
  
  return (
    <div style ={overallListStyle}>
      <div style = {titleBoxStyle}>
        <div>Title</div> 
        <div>Last Edited Time</div>
      </div>
      <List
        dataSource={[".."]}
        style={listWrapperStyle}
        renderItem={(name) => (
          <List.Item>
            <ListDirItem
              name={name}
              time={null}
              onChangeDir={onParentDir} />
          </List.Item>
        )}
      />
      <List
        dataSource={dataOrderedList()}
        style={listWrapperStyle}
        renderItem={(item) =>
          item.type === "directory" ? (
            <List.Item>
              <ListDirItem
                name={item.title}
                time={item.createdAt}
                onChangeDir={onChangeDir}
              />
            </List.Item>
          ) : (
            <List.Item>
              <ListItem
                title={item.title}
                content={item.content}
                uid={item.uid}
                time={item.createdAt}
                showCheckbox={showCheckbox}
                checkedItemHandler={checkedItemHandler}
              />
            </List.Item>
          )
        }
      />
    </div>
  );
};

const listWrapperStyle = {
  justifyContent: "flex-start",
  alignItems: "flex-start",
  margin: "auto",
  width: "95%"
};
const overallListStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  
  width: "80%",
  
  
  margin: "auto",
  
}
const titleBoxStyle = {
  display: "flex",
  justifyContent:"space-between",
  padding: "15px 24px",
  margin: "50px 0px 0px 0px",
  position: "relative",
  width: "100%",
  height: "50px",
  backgroundColor: "#FAFAFA",
    
}

export default inject("storeEditor")(observer(ListPresenter));
