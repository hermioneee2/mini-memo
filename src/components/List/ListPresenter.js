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
  onChangeDir,
  onParentDir,
  cwd,
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
            <ListDirItem name={name} onChangeDir={onParentDir} />
          </List.Item>
          )}
      />
      <List
        dataSource={dirOrderedList()}
        style={listWrapperStyle}
        renderItem={(name) => (
          <List.Item>
            <ListDirItem name={name} onChangeDir={onChangeDir} />
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

export default ListPresenter;
