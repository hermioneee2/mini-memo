import ListPresenter from "./ListPresenter";
import React from "react";

const ListContainer = ({
  showCheckbox,
  checkedItemHandler,
  setTrue,
  setId,
  memoOrderedList,
  dirOrderedList,
  dataOrderedList,
  onChangeDir,
  onParentDir,
  cwd,
}) => {
  return (
    <ListPresenter
      showCheckbox={showCheckbox}
      checkedItemHandler={checkedItemHandler}
      setTrue={setTrue}
      setId={setId}
      dataOrderedList={dataOrderedList}
      onChangeDir={onChangeDir}
      onParentDir={onParentDir}
      cwd={cwd}
    />
  );
};

export default ListContainer;
