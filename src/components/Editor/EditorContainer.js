import EditorPresenter from "./EditorPresenter";
import React, { useState } from "react";

const EditorContainer = ({open, setter}) => {
  return <EditorPresenter open={open} setter={setter}/>;
};

export default EditorContainer;
