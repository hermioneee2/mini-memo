import PostItDirItemPresenter from "./PostItDirItemPresenter";
import { useState } from "react";

const PostItDirItemContainer = ({
  name,
  onChangeDir,
}) => {
  return (
    <div onClick={() => onChangeDir(name)}>
      <PostItDirItemPresenter
        name={name}
      />
    </div>
  );
};

export default PostItDirItemContainer;
