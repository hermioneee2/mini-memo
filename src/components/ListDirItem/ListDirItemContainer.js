import ListDirItemPresenter from "./ListDirItemPresenter";
import { React, useState } from "react";
import dateFormat, { masks } from "dateformat";
import Clock from 'react-clock';


const ListDirItemContainer = ({
  name
}) => {
  return (
    <div onClick = {() => {}}>
      <ListDirItemPresenter
        name={name}
      />
    </div>
  );
};

export default ListDirItemContainer;
