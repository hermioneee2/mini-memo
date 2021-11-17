import ListPresenter from "./ListPresenter";
import React from "react";
import {loadMemoList, nameAscendingSort, nameDescendingSort, timeAscendingSort, timeDescendingSort} from "../../memo-storage/memo-localstorage";



const ListContainer = ({ showCheckbox, checkedItemHandler, setTrue, setId, order}) => {
  const memoOrderedList = () =>{
    let memoList = nameAscendingSort();
    if(order == 'name_ascend')
      return memoList;
    else if(order == 'name_descend')
      memoList = nameDescendingSort();
    else if(order == 'time_ascend')
      memoList = timeAscendingSort();
    else if(order == 'time_descend')
      memoList = timeDescendingSort();
    else return timeDescendingSort();
    return memoList;
  };
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
