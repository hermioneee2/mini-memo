import Header from "./components/Header";
import List from "./components/List";
import AddMemo from "./components/AddMemo";
import Editor from "./components/Editor";
import { useState } from "react";
import "antd/dist/antd.css";

const App = () => {
  const [showEditor, setShowEditor] = useState(false);
  
  const setShowEditorTrue = () => {
    setShowEditor(true);
  }

  const setShowEditorFalse = () => {
    setShowEditor(false);
  }

  return (
    <div className="App">
      <Editor isOpen={showEditor} modalClose={setShowEditorFalse}/>
      <Header />
      <List />
      <AddMemo setter={setShowEditorTrue}/>
    </div>
  );
};

export default App;
