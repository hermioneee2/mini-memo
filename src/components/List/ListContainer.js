import ListPresenter from "./ListPresenter";
import React from "react";
import { observer, inject } from "mobx-react"

const ListContainer = ({
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

export default inject("storeEditor", "storeData")(observer(ListContainer));
