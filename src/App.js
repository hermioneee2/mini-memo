import Header from "./components/Header";
import List from "./components/List";
import AddMemo from "./components/AddMemo";
import Editor from "./components/Editor";
import "antd/dist/antd.css";

const App = () => {
  return (
    <div className="App">
      <Editor />
      <Header />
      <List />
      <AddMemo />
    </div>
  );
};

export default App;
