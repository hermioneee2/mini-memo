import ListDirItemPresenter from "./ListDirItemPresenter";
import { React, useState } from "react";
import dateFormat, { masks } from "dateformat";
import Clock from 'react-clock';


const ListDirItemContainer = ({
  name,
  onChangeDir,
  time,
}) => {
  let timeString = (time != null)? (dateFormat(time, "yyyy. m. d  HH:MM")) : null;
  return (
    <div onClick = {() => {console.log(onChangeDir);onChangeDir(name)}}>
      <ListDirItemPresenter
        name={name}
        time={timeString}
      />
    </div>
  );
};

export default ListDirItemContainer;
