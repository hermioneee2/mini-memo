import ListPresenter from "./ListPresenter";
import React, { useState } from "react";


const ListContainer = ({ showCheckbox, checkedItemHandler, setTrue, setId }) => {
  return (
    <ListPresenter
      showCheckbox={showCheckbox}
      checkedItemHandler={checkedItemHandler}
      setTrue = {setTrue} setId = {setId}
    />
  );
};

export default ListContainer;
