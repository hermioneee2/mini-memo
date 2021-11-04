import AddMemoPresenter from "./AddMemoPresenter";
import React, { useState } from "react";

const AddMemoContainer = ({ setter }) => {
  const onClickShow = () => {
    console.log(setter);
    setter();
  };

  return (
    <div onClick={onClickShow}>
      <AddMemoPresenter>asdf</AddMemoPresenter>
    </div>
  );
};

export default AddMemoContainer;
