import ListPresenter from "./ListPresenter";
import React from "react";

const ListContainer = ({
  showCheckbox,
  checkedItemHandler,
  setTrue,
  setId,
  memoOrderedList,
  dirOrderedList,
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
      cwd={cwd}
    />
  );
};

export default ListContainer;
