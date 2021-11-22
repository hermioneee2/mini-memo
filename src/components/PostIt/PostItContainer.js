import PostItPresenter from "./PostItPresenter";
import React from "react";

const PostItContainer = ({
  showCheckbox,
  checkedItemHandler,
  setTrue,
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
      setTrue={setTrue}
      setId={setId}
      onChangeDir={onChangeDir}
      onParentDir={onParentDir}
      memoOrderedList={memoOrderedList}
      dirOrderedList={dirOrderedList}
      cwd={cwd}
    />
  );
};

export default PostItContainer;
