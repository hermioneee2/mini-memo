import ListPresenter from "./ListPresenter";
import React from "react";
import { observer, inject } from "mobx-react"

const List = ({
  showCheckbox,
  checkedItemHandler,
}) => {
  return (
    <ListPresenter
      showCheckbox={showCheckbox}
      checkedItemHandler={checkedItemHandler}
    />
  );
};

export default inject("storeEditor", "storeData")(observer(List));
