import { memo } from "react";
import { makeMemoObj } from "./memo-parse";
import { getNextMemoUid } from "./uid";

export const loadMemoList = () => {
  let memoList = [];
  const memoListStr = localStorage.getItem("memoList");
  if (memoListStr) {
    const memoListObj = JSON.parse(memoListStr);
    memoList = memoListObj;
  }
  return memoList;
};

export const loadMemo = () => {
  const memo = localStorage.getItem("memoList");
  if (memo) {
    return JSON.parse(memo);
  } else {
    return [];
  }
};

export const existingMemo = (id) => {
  let bool = false;
  const memoList = loadMemoList();
  memoList.forEach((e) => {
    if(e.uid === id)
      bool = true;
  });
  return bool;
}

export const loadItem = (id) => {
  const memoList = loadMemoList();
  memoList.forEach((e) => {
    if(e.uid == id)
      return e;
  })
  return null;
 };


export const deleteMemo = (id) => {
  const list = [];
  const memoList = loadMemoList();
  memoList.forEach((e) => {
    if (e.uid !== id) list.push(e);
  });
  localStorage.removeItem("memoList");
  localStorage.setItem("memoList", JSON.stringify(list));
}

export const modifyMemo = (memo, id) =>{
  const memoList = loadMemoList();
  memoList.forEach((e) => {
    if(e.uid === id){
      e.content = memo.content;
      e.title = memo.title;
      e.createdAt = memo.createdAt;
    }
  });
  localStorage.removeItem("memoList");
  localStorage.setItem("memoList", JSON.stringify(memoList));
} 

export const storeMemo = (tile, content) => {
  const memoObj = makeMemoObj(getNextMemoUid(), tile, content);
  const memoList = loadMemo();
  memoList.push(memoObj);
  localStorage.setItem("memoList", JSON.stringify(memoList));
};

export const compareObjects = (object1, object2, key) => {
  const obj1 = object1[key].toUpperCase()
  const obj2 = object2[key].toUpperCase()
  if (obj1 < obj2) {
    return -1
  }
  if (obj1 > obj2) {
    return 1
  }
  return 0
};

export const nameAscendingSort = () =>{
  const memoList = loadMemoList();
  console.log(memoList);
  memoList.sort((memo1, memo2) => {
    return compareObjects(memo1, memo2, 'title')
  });
  console.log(memoList);
  return memoList;
}

export const nameDescendingSort = () =>{
  const memoList = loadMemoList();
  console.log(memoList);
  memoList.sort((memo1, memo2) => {
    return compareObjects(memo2, memo1, 'title')
  });
  console.log(memoList);
  return memoList;
}

export const timeAscendingSort = () =>{
  const memoList = loadMemoList();
  console.log(memoList);
  memoList.sort((memo1, memo2) => {
    return compareObjects(memo1, memo2, 'createdAt')
  });
  console.log(memoList);
  return memoList;
}

export const timeDescendingSort = () =>{
  const memoList = loadMemoList();
  console.log(memoList);
  memoList.sort((memo1, memo2) => {
    return compareObjects(memo2, memo1, 'createdAt')
  });
  console.log(memoList);
  return memoList;
}

