import { makeObservable, observable, action, computed } from "mobx";

export default class ControlTopbar {
  dirInputBox;
  deleteButton;
  dirInput;

  constructor() {
    this.dirInputBox = false;
    this.deleteButton = false;
    this.dirInput = "";
    makeObservable(this, {
      dirInputBox: observable,
      deleteButton: observable,
      dirInput: observable,
      setDirInputBoxTrue: action,
      setDirInputBoxFalse: action,
      setDeleteButtonTrue: action,
      setDeleteButtonFalse: action,
      setDirInput: action,
      setInit: action,
    });
  }
  setInit = () => {
    this.dirInputBox = false;
    this.dirInput = "";
  };

  setDirInputBoxTrue = () => {
    this.dirInputBox = true;
  };
  setDirInputBoxFalse = () => {
    //console.log("set False");
    this.dirInputBox = false;
  };
  setDeleteButtonTrue = () => {
    this.deleteButton = true;
  };
  setDeleteButtonFalse = () => {
    console.log("set False");
    this.deleteButton = false;
  };
  setDirInput = (input) => {
    this.dirInput = input;
  };
}
