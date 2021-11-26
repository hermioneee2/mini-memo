import { observable, action, decorate } from 'mobx';

export default class ShowEditor {
  showEditor = false;
  showNewEditor = false;
  
  setShowEditorTrue() {
    this.showEditor = true;
  }
  setShowEditorFalse() {
    this.showEditor = false;
  }
  setShowNewEditorTrue() {
    this.showNewEditor = true;
  }
  setShowNewEditorFalse() {
    this.showNewEditor = false;
  }
}

decorate(ShowEditor, {
  showEditor: observable, 
  showNewEditor: observable,
  setShowEditorTrue: action,
  setShowEditorFalse: action,
  setShowNewEditorTrue: action,
  setShowNewEditorFalse: action,
})
