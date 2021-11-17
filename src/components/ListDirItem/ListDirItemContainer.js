import ListDirItemPresenter from "./ListDirItemPresenter";
import { React, useState } from "react";
import dateFormat, { masks } from "dateformat";
import Clock from 'react-clock';


const ListDirItemContainer = ({
  name,
  onChangeDir,
}) => {
  return (
    <div onClick = {() => {console.log(onChangeDir);onChangeDir(name)}}>
      <ListDirItemPresenter
        name={name}
      />
    </div>
  );
};

export default ListDirItemContainer;
