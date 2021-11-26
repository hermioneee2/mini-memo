import { makeObservable, observable, action, computed} from 'mobx';

export default class ControlEditor {
  editor;
  newEditor;
  id;

  constructor() {
    this.editor = false;
    this.newEditor = false;
    this.id = 0;
    makeObservable(this, {
      editor: observable,
      newEditor: observable,
      setEditorTrue: action,
      setEditorFalse: action,
      setNewEditorTrue: action,
      setNewEditorFalse: action,
      setId: action
    })
  }

  setEditorTrue = () => {
    this.editor = true;
  }
  setEditorFalse = () => {
    this.editor = false;
  }
  setNewEditorTrue = () => {
    console.log('ok')
    this.newEditor = true;
  }
  setNewEditorFalse = () => {
    this.newEditor = false;
  }

  setId = (id) => {
    this.id = id;
  }
}