import ListPresenter from "./ListPresenter";
import React from "react";

const ListContainer = ({
  showCheckbox,
  checkedItemHandler,
  setTrue,
  setId,
  memoOrderedList,
  dirOrderedList,
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
      memoOrderedList={memoOrderedList}
      dirOrderedList={dirOrderedList}
      onChangeDir={onChangeDir}
      onParentDir={onParentDir}
      cwd={cwd}
    />
  );
};

export default ListContainer;
