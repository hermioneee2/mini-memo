import PostItPresenter from "./PostItPresenter";
import React from "react";

const PostItContainer = ({
  showCheckbox,
  checkedItemHandler,
  setTrue,
  setId,
  memoOrderedList,
  cwd,
}) => {
  return (
    <PostItPresenter
      showCheckbox={showCheckbox}
      checkedItemHandler={checkedItemHandler}
      setTrue={setTrue}
      setId={setId}
      memoOrderedList={memoOrderedList}
      cwd={cwd}
    />
  );
};

export default PostItContainer;
