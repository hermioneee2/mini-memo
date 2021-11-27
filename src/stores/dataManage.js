import { makeObservable, observable, action, computed} from 'mobx';
import * as MStore from "../memo-storage/memo-localstorage";

export default class DataManage {
  cwd;
  order;
  memoList;
  dirList;
  dataList;
  dirPrevList;

  constructor() {
    this.cwd = MStore.initMemoCwd();
    this.order = "";
    this.memoList = MStore.loadMemoList(this.cwd);
    this.dirList = MStore.loadDirList(this.cwd);
    this.dataList = this.dirList.concat(this.memoList);

    makeObservable(this, {
      cwd: observable,
      order: observable,
      memoList: observable,
      dirList: observable,
      dataList: observable,
      reloadCwd:action,
      setCwd: action,
      setChangeDir: action,
      setParentDir: action,
      setOrder: action,
      setMemoList: action,
      setDirList: action,
      setDataList: action,
    })
  }

  reloadCwd = () => {
    this.cwd = MStore.reloadCwd(this.cwd);
  }

  setCwd = (cwd) => {
    this.cwd = cwd;
  }

  setChangeDir = (name) => {
    let newCwd = MStore.changeDir(this.cwd, name);
    this.cwd = newCwd;
  }

  setParentDir = (name) => {
    let newCwd = MStore.parentDir(this.cwd);
    this.cwd = newCwd;
  };

  setOrder = (value) => {
    this.order = value[1];
  }

  setMemoList = () => {
    this.memoList = MStore.loadMemoList(this.cwd);
    if (this.order == "name_ascend") {
      this.memoList = MStore.objectGeneralSort(this.memoList, "title", true);
    }
    else if (this.order == "name_descend") {
      this.memoList = MStore.objectGeneralSort(this.memoList, "title", false);
    }
    else if (this.order == "time_ascend") {
      this.memoList = MStore.objectGeneralSort(this.memoList, "createdAt", true);
    }
    else if (this.order == "time_descend") {
      this.memoList = MStore.objectGeneralSort(this.memoList, "createdAt", false);
    }
  }
  setDirList = () => {
    this.dirList = MStore.loadDirList(this.cwd);
    if (this.order == "name_ascend") {
      this.dirList = MStore.objectGeneralSort(this.dirList, "title", true);
    }
    else if (this.order == "name_descend") {
      this.dirList = MStore.objectGeneralSort(this.dirList, "title", false);
    }
    else if (this.order == "time_ascend") {
      this.dirList = MStore.objectGeneralSort(this.dirList, "createdAt", true);
    }
    else if (this.order == "time_descend") {
      this.dirList = MStore.objectGeneralSort(this.dirList, "createdAt", false);
    }
  }
  setDataList = () =>{
    this.memoList = MStore.loadMemoList(this.cwd);
    this.dirList = MStore.loadDirList(this.cwd);
    if (this.order == "name_ascend") {
      this.memoList = MStore.objectGeneralSort(this.memoList, "title", true);
      this.dirList = MStore.objectGeneralSort(this.dirList, "title", true);
    }
    else if (this.order == "name_descend") {
      this.memoList = MStore.objectGeneralSort(this.memoList, "title", false);
      this.dirList = MStore.objectGeneralSort(this.dirList, "title", false);
    }
    else if (this.order == "time_ascend") {
      this.memoList = MStore.objectGeneralSort(this.memoList, "createdAt", true);
      this.dirList = MStore.objectGeneralSort(this.dirList, "createdAt", true);
    }
    else if (this.order == "time_descend") {
      this.memoList = MStore.objectGeneralSort(this.memoList, "createdAt", false);
      this.dirList = MStore.objectGeneralSort(this.dirList, "createdAt", false);
    }
    this.dataList = this.dirList.concat(this.memoList);
  }
}