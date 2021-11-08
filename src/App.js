import Header from "./components/Header";
import List from "./components/List";
import AddMemo from "./components/AddMemo";
import Editor from "./components/Editor";
import { useState } from "react";
import "antd/dist/antd.css";
import { storeMemo, loadMemoList } from "./memo-storage/memo-localstorage";

const App = () => {
  const [showEditor, setShowEditor] = useState(false);

  const setShowEditorTrue = () => {
    setShowEditor(true);
  };

  const setShowEditorFalse = () => {
    setShowEditor(false);
  };

  const uidTest = () => {
    storeMemo("title", "adsf")
  };

  const listTest = () => {
    console.log(loadMemoList());
  }

  return (
    <div className="App">
      <Editor isOpen={showEditor} modalClose={setShowEditorFalse} />
      <Header />
      <List />
      <AddMemo setter={setShowEditorTrue} />
    </div>
  );
};

export default App;
