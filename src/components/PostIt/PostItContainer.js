import PostItPresenter from "./PostItPresenter";
import React from "react";
import { observer, inject } from "mobx-react"

const PostItContainer = ({
  showCheckbox,
  checkedItemHandler,
  setId,
  onChangeDir,
  onParentDir,
  memoOrderedList,
  dirOrderedList,
  cwd,
}) => {
  return (
    <PostItPresenter
      showCheckbox={showCheckbox}
      checkedItemHandler={checkedItemHandler}
      onChangeDir={onChangeDir}
      onParentDir={onParentDir}
      memoOrderedList={memoOrderedList}
      dirOrderedList={dirOrderedList}
      cwd={cwd}
    />
  );
};

export default inject("storeEditor")(observer(PostItContainer));
