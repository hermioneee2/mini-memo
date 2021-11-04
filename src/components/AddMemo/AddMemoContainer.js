import AddMemoPresenter from "./AddMemoPresenter";
import React, { useState } from "react";

const AddMemoContainer = ({ setter }) => {
  const onClickShow = () => {
    console.log(setter);
    setter();
  };
  return (
    <div>
      <button onClick={onClickShow}>onClickTestButton</button>
      <AddMemoPresenter onClick={onClickShow}>asdf</AddMemoPresenter>
    </div>
  );
};

export default AddMemoContainer;
