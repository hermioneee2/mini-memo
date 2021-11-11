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

export const deleteMemo = (id) => {
  const list = [];
  const memoList = loadMemoList();
  memoList.forEach((e) => {
    if (e.uid !== id) list.push(e);
  });
  console.log(localStorage.memoList);
  localStorage.removeItem("memoList");
  localStorage.setItem("memoList", JSON.stringify(list));
  console.log(localStorage.memoList);
};

export const storeMemo = (tile, content) => {
  const memoObj = makeMemoObj(getNextMemoUid(), tile, content);
  const memoList = loadMemo();
  memoList.push(memoObj);
  localStorage.setItem("memoList", JSON.stringify(memoList));
};
