import { React } from "react";
import ListItem from "../ListItem";
import ListDirItem from "../ListDirItem";
import { List } from "antd";
import { observer, inject } from "mobx-react";

const ListIt = ({ storeData, showCheckbox, checkedItemHandler }) => {
  const dataManage = storeData;
  let parent = "parent";
  let change = "change";
  return (
    <div style={overallListStyle}>
      <List
        dataSource={[".."]}
        renderItem={(name) => (
          <List.Item>
            <ListDirItem name={name} time={null} set={parent} />
          </List.Item>
        )}
      />
      <div style={titleBoxStyle}>
        <div>Title</div>
        <div style={timeStyle}>Last Edited Time</div>
      </div>
      <List
        dataSource={dataManage.dataList}
        style={listWrapperStyle}
        renderItem={(item) =>
          item.type === "directory" ? (
            <List.Item>
              <ListDirItem
                name={item.title}
                time={item.createdAt}
                set={change}
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

const overallListStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "80vw",
  margin: "auto",
};

const titleBoxStyle = {
  fontFamily: "Open Sans",
  display: "flex",
  justifyContent: "space-between",
  padding: "15px 24px",
  margin: "50px 0px 0px 0px",
  position: "relative",
  width: "100%",
  height: "50px",
  backgroundColor: "#FAFAFA",
};

const listWrapperStyle = {
  fontFamily: "Open Sans",
  paddingTop: "15px",
};

const timeStyle = {
  position: "relative",
  left: "-16%",
};

export default inject("storeEditor", "storeData")(observer(ListIt));
