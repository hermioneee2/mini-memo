import ListDirItemPresenter from "./ListDirItemPresenter";
import { React, useState } from "react";
import dateFormat, { masks } from "dateformat";
import Clock from 'react-clock';
import { observer, inject } from "mobx-react"

const ListDirItemContainer = ({
  storeData,
  name,
  time,
  set
}) => {
  const dataManage = storeData;
  let timeString = (time != null)? (dateFormat(time, "yyyy. m. d  HH:MM")) : null;
  const onChange = (name) => {
    if(set === "parent"){
      dataManage.setParentDir(name);
      dataManage.setDirList();
      dataManage.setDataList();
    } else{
      dataManage.setChangeDir(name);
      dataManage.setDirList();
      dataManage.setDataList();
    }
  }
  return (
    <div onClick = {() => onChange(name)}>
      <ListDirItemPresenter
        name={name}
        time={timeString}
      />
    </div>
  );
};

export default inject("storeData")(observer(ListDirItemContainer));

