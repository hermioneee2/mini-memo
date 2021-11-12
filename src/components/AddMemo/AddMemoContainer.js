import AddMemoPresenter from "./AddMemoPresenter";
import React, { useState } from "react";

const AddMemoContainer = ({setter}) => {
  const onClickShow = () => {
    setter();
  };
  return (
      <div onClick={onClickShow}>
        <AddMemoPresenter/>
      </div>
  );
};

export default AddMemoContainer;
