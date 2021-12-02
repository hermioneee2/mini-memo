import { makeObservable, observable, action, computed} from 'mobx';
import * as MStore from "../memo-storage/memo-localstorage";

export default class DataManage {
  cwd;
  order;
  memoList;
  dirList;
  dataList;
  memoObj

  constructor() {
    this.cwd = MStore.initMemoCwd();
    this.order = "";
    this.memoList = MStore.loadMemoList(this.cwd);
    this.dirList = MStore.loadDirList(this.cwd);
    this.dataList = this.dirList.concat(this.memoList);
    this.memoObj = {title: "", content: "", createdAt: ""};

    makeObservable(this, {
      cwd: observable,
      order: observable,
      memoList: observable,
      dirList: observable,
      dataList: observable,
      memoObj: observable,
      reloadCwd:action,
      setCwd: action,
      setChangeDir: action,
      setParentDir: action,
      setOrder: action,
      setMemoList: action,
      setDirList: action,
      setDataList: action,
      setMemoObjTitle: action,
      setMemoObjContent: action,
      setMemoObjCreatedAt: action,
      setExistingMemoObj: action,
      setNewMemoObj: action,
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

  setMemoObjTitle = (e) => {
    let newObj = this.memoObj;
    newObj.title = e.target.value;
    this.memoObj = newObj;
  }
  setMemoObjContent = (e) => {
    let newObj = this.memoObj;
    newObj.content = e;
    this.memoObj = newObj;
  }
  setMemoObjCreatedAt = () => {
    let newObj = this.memoObj;
    newObj.createdAt = new Date();
    this.memoObj = newObj;
  }
  setExistingMemoObj = (cwd, id) => {
    let newObj = this.memoObj;
    newObj.title = MStore.loadMemoTitle(cwd, id);
    newObj.content = MStore.loadMemoContent(cwd, id);
    newObj.createdAt = new Date();
    this.memoObj = newObj;
  }
  setNewMemoObj = () => {
    this.memoObj.title = "";
    this.memoObj.content = "";
  }

}