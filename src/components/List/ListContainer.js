import ListPresenter from "./ListPresenter";
import React from "react";



const ListContainer = ({ showCheckbox, checkedItemHandler, setTrue, setId, memoOrderedList}) => {
  return (
    <ListPresenter
      showCheckbox={showCheckbox}
      checkedItemHandler={checkedItemHandler}
      setTrue = {setTrue} setId = {setId} 
      memoOrderedList = {memoOrderedList}
    />
  );
};

export default ListContainer;
