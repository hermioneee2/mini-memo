import PostItPresenter from "./PostItPresenter";
import React from "react";

const PostItContainer = ({ showCheckbox, checkedItemHandler, setTrue, setId, memoOrderedList}) => {
  return (
    <PostItPresenter
      showCheckbox={showCheckbox}
      checkedItemHandler={checkedItemHandler}
      setTrue = {setTrue} setId = {setId}
      memoOrderedList = {memoOrderedList}
    />
  );
};

export default PostItContainer;
