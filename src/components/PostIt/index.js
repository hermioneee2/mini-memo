import PostItPresenter from "./PostItPresenter";
import React from "react";
import { observer, inject } from "mobx-react"

const PostIt = ({
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

export default inject("storeEditor", "storeData")(observer(PostIt));
