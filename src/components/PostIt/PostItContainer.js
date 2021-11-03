import React, { useState } from "react";
import PostItPresenter from "./PostItPresenter";

const PostItContainer = () => {
  const [title, setTitle] = useState("Some fancy title");
  const [content, setContent] = useState("wowowow");

  const onChangeTitle = (e) => {
    setTitle(e)
  }

  const onChangeContent = (e) => {
    setContent(e)
  }

  return <PostItPresenter title={title} content={content}/>;
};

export default PostItContainer;
