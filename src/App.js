import Header from "./components/Header";
import PostIt from "./components/PostIt";
import List from "./components/List";
import AddMemo from "./components/AddMemo";
import "antd/dist/antd.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <PostIt />
      <AddMemo />
    </div>
  );
};

export default App;
