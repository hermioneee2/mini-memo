import PostItPresenter from "./PostItPresenter";
import React from "react";
import { observer, inject } from "mobx-react"

const PostItContainer = ({
  showCheckbox,
  checkedItemHandler,
}) => {
  return (
    <PostItPresenter
      showCheckbox={showCheckbox}
      checkedItemHandler={checkedItemHandler}
    />
  );
};

export default inject("storeEditor", "storeData")(observer(PostItContainer));
