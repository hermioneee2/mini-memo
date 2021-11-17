import { memo } from "react";
import { makeMemoObj } from "./memo-parse";
import { getNextMemoUid } from "./uid";
import * as Fsp from "./fs-pointer";

/// NOTE: all these functions should get (cwd: fsPointer object) as argument now.
/// cwd should be managed as state variable in MainApp component.

// the initial cwd pointer: root
export const initMemoCwd = () => {
  return Fsp.get_root_pointer();
}

// load memo list from cwd pointer
export const loadMemoList = (cwd) => {
  let memoList = Fsp.get_file_data_list(cwd);
  return memoList;
};

// check memo with uid exists from cwd
export const existingMemo = (cwd, uid) => {
  let memoList = Fsp.get_file_data_list_by_data_predicate(cwd, (m) => m.uid == uid);
  return memoList.length > 0;
};

// load memo by uid from cwd
// TODO : this is not used... why needed?
export const loadItem = (cwd, uid) => {
  let memoList = Fsp.get_file_data_list_by_data_predicate(cwd, (m) => m.uid == uid);
  return memoList[0];
};

// delete memo from cwd
export const deleteMemo = (cwd, uid) => {
  let resBool = Fsp.delete_file_by_data_predicate(cwd, (m) => m.uid == uid);
  return resBool;
};

// modify memo from cwd
export const modifyMemo = (cwd, memoObj, uid) => {
  // TODO why memoObj.uid is not set automatically?
  let newMemoObj = memoObj;
  newMemoObj.uid = uid;
  let resBool = Fsp.modify_file_data_by_data_predicate(cwd, (m) => m.uid == uid, newMemoObj);
  return resBool;
};

// refactor to store in cwd
export const storeMemo = (cwd, title, content) => {
  const memoObj = makeMemoObj(getNextMemoUid(), title, content);
  Fsp.store_file_in_dir(cwd, title, memoObj);
};

// reload cwd pointer for force update
export const reloadCwd = (cwd) => {
  return Fsp.reload_pointer(cwd);
}

////////////////////////////sorters
//Helper function
export const compareObjects = (object1, object2, key) => {
  const obj1 = object1[key].toUpperCase();
  const obj2 = object2[key].toUpperCase();
  if (obj1 < obj2) {
    return -1;
  }
  if (obj1 > obj2) {
    return 1;
  }
  return 0;
};

export const nameAscendingSort = (cwd) => {
  const memoList = loadMemoList(cwd);
  console.log(memoList);
  memoList.sort((memo1, memo2) => {
    return compareObjects(memo1, memo2, "title");
  });
  console.log(memoList);
  return memoList;
};

export const nameDescendingSort = (cwd) => {
  const memoList = loadMemoList(cwd);
  console.log(memoList);
  memoList.sort((memo1, memo2) => {
    return compareObjects(memo2, memo1, "title");
  });
  console.log(memoList);
  return memoList;
};

export const timeAscendingSort = (cwd) => {
  const memoList = loadMemoList(cwd);
  console.log(memoList);
  memoList.sort((memo1, memo2) => {
    return compareObjects(memo1, memo2, "createdAt");
  });
  console.log(memoList);
  return memoList;
};

export const timeDescendingSort = (cwd) => {
  const memoList = loadMemoList(cwd);
  console.log(memoList);
  memoList.sort((memo1, memo2) => {
    return compareObjects(memo2, memo1, "createdAt");
  });
  console.log(memoList);
  return memoList;
};
