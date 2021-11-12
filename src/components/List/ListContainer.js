import ListPresenter from "./ListPresenter";
import React, { useState } from "react";

const ListContainer = ({click_num, setTrue, setId}) => {

  return (
      <ListPresenter click_num = {click_num} setTrue = {setTrue} setId = {setId}/>
  );
};

export default ListContainer;
