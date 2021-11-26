import ListPresenter from "./ListPresenter";
import React from "react";
import { observer, inject } from "mobx-react"

const ListContainer = ({
  showCheckbox,
  checkedItemHandler,
  setId,
  dataOrderedList,
  onChangeDir,
  onParentDir,
  cwd,
}) => {
  return (
    <ListPresenter
      showCheckbox={showCheckbox}
      checkedItemHandler={checkedItemHandler}
      dataOrderedList={dataOrderedList}
      onChangeDir={onChangeDir}
      onParentDir={onParentDir}
      cwd={cwd}
    />
  );
};

export default inject("storeEditor")(observer(ListContainer));
